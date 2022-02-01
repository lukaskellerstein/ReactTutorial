# Description

The implementation of GraphQL server.

We are using `apollo-server-express` (instead of `express-graphql`) because it is more popular (https://www.npmtrends.com/apollo-server-vs-express-graphql-vs-graphql-yoga-vs-prisma-vs-apollo-server-express)

## Technologies

TS
GraphQL + MongoDB

- we are using RootValue and Context for graphql resolvers
- documentation: https://www.apollographql.com/docs/apollo-server/api/apollo-server/

## Queries + Mutations used in UI

http://localhost:4000/graphql


### GET ALL

Query:
```
query MyGetAll {
  list {
    id
    brand
    model
    HP
  }
}
```

### GET ONE

Query:
```
query MyGetOne($id: String!) {
  one(id: $id) {
    id
    brand
    model
  }
}
```

Input parameters:
```
{
  "id": "fdc876b3-39a2-4d39-91e1-183f7626958f"
}
```

### CREATE ONE

Mutation:
```
mutation MyCreateOne($brand: String!, $model: String!, $HP: Int! ) {
    createItem(brand: $brand, model: $model, HP: $HP) {
      id
      brand
      model
      HP
    }
  }
```

Input parameters:
```
{
  "brand": "test1",
  "model": "test1-model",
  "HP": 123
}
```

### REMOVE ONE

Mutation:
```
mutation MyRemoveOne($id: String!) {
  deleteItem(id: $id) 
}
```

Input parameters:
```
{
  "id": "fdc876b3-39a2-4d39-91e1-183f7626958f"
}
```

### UPDATE ONE

Mutation:
```
mutation MyUpdateOne($id: String!, $brand: String!, $model: String!, $HP: Int! ) {
    updateItem(id: $id, brand: $brand, model: $model, HP: $HP) {
      id
      brand
      model
      HP
    }
  }
```

Input parameters:
```
{
  "id": "5d926a66-0eec-4d9d-ad26-1c04f2c2a9a7",
  "brand": "test1-changed",
  "model": "test1-model-changed",
  "HP": 1234
}
```