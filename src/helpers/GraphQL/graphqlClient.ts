import { GraphQLClient } from "graphql-request";

const url = import.meta.env.VITE_GRAPHQL_API || "http://localhost:3000/graphql";

const graphqlClient = new GraphQLClient(url, {
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      import.meta.env.VITE_GRAPHQL_SECRET_KEY || "secret",
  },
});

export default graphqlClient;
