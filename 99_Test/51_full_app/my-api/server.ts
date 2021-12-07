import { ApolloServer } from "apollo-server-express";
import express from "express";
import * as fs from "fs";
import * as path from "path";
import { resolvers } from "./src/graphql/resolvers/todo.resolvers";

const typeDefs = fs
  .readFileSync(
    path.join(__dirname, "src", "graphql", "schemas", "todo.graphql"),
    "utf8"
  )
  .toString();

const app = express();

let apolloServer: any = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  )
);
