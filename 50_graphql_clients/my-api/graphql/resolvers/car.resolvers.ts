import { v4 as uuidv4 } from "uuid";
import { Car } from "../../mongodb/mongo-schema";

export const resolvers = {
  Query: {
    list: async (
      root: any, // rootValue
      args: any, // no arguments
      ctx: any // context
    ) => {
      console.log("rootValue", root);
      console.log("args", args);
      console.log("context", ctx);
      try {
        const result = await Car.find();
        console.log("RESULT - LIST", result);
        return result;
      } catch (err) {
        console.log("ERROR - LIST:", err);
      }
    },
    one: async (
      root: any, // rootValue
      args: { id: string }, // args
      ctx: any // context
    ) => {
      console.log("rootValue", root);
      console.log("args", args);
      console.log("context", ctx);
      try {
        const result = await Car.findOne({ id: args.id });
        console.log("RESULT - LIST", result);
        return result;
      } catch (err) {
        console.log("ERROR - LIST:", err);
      }
    },
  },
  Mutation: {
    async createItem(
      root: any, // rootValue
      args: { brand: string; model: string; HP: number }, // args
      ctx: any // context
    ) {
      console.log("rootValue", root);
      console.log("args", args);
      console.log("context", ctx);
      try {
        const result = await Car.create({
          id: uuidv4(),
          brand: args.brand,
          model: args.model,
          HP: args.HP,
        });
        console.log("RESULT - CREATE:", result);
        return result;
      } catch (err) {
        console.log("ERROR - CREATE:", err);
      }
    },
    async updateItem(
      root: any, // rootValue
      args: { id: string; brand: string; model: string; HP: number }, // args
      ctx: any // context
    ) {
      console.log("rootValue", root);
      console.log("args", args);
      console.log("context", ctx);
      try {
        const resultFind = await Car.findOne({ id: args.id });
        if (resultFind) {
          resultFind.brand = args.brand;
          resultFind.model = args.model;
          resultFind.HP = args.HP;

          const result = await resultFind.save();
          console.log("RESULT - UPDATE:", result);
          return result;
        }
        return null;
      } catch (err) {
        console.log("ERROR - UPDATE:", err);
      }
    },
    async deleteItem(
      root: any, // rootValue
      args: { id: string }, // args
      ctx: any // context
    ) {
      console.log("rootValue", root);
      console.log("args", args);
      console.log("context", ctx);
      try {
        const resultFind = await Car.findOne({ id: args.id });
        if (resultFind) {
          const result = await resultFind.delete();
          console.log("RESULT - DELETE:", result);
          if (result) {
            return `Object with ID: ${args.id} was successfully deleted`;
          } else {
            return `Object with ID: ${args.id} not found`;
          }
        }
      } catch (err) {
        console.log("ERROR - DELETE:", err);
      }
    },
  },
};
