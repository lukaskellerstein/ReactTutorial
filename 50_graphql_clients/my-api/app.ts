import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./graphql/resolvers/car.resolvers";
import * as fs from "fs";
import * as path from "path";
import cors from "cors";

// ------------------------------------------------------------------------
// MongoDB connect
// ------------------------------------------------------------------------

//Set up default mongoose connection
mongoose.connect("mongodb://127.0.0.1/test-database");

//Get the default connection
var db = mongoose.connection;
db.once("open", function () {
  console.log("Connected successfully");
});
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// ------------------------------------------------------------------------
// GraphQL + Apollo server + Express
// ------------------------------------------------------------------------
const app = express();

//cors
app.use(cors());

let apolloServer: ApolloServer | null = null;

// --------------------------
// Schemas
// --------------------------
const typeDefs = fs
  .readFileSync(
    path.join(__dirname, "graphql", "schemas", "car.graphql"),
    "utf8"
  )
  .toString();

// ----------------------
// Root is propagated to all resolver methods
const rootValue = {
  someVal1: "hahaha",
  someFce: () => {
    return "hoohohoho";
  },
};

// Context is propagated to all resolver methods
const contextValue = {
  ctxVal1: "context's hahaha",
  ctxFce: () => {
    return "context's hoohohoho";
  },
};
// ----------------------

async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    rootValue: rootValue,
    context: contextValue,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer?.graphqlPath}`
  )
);
