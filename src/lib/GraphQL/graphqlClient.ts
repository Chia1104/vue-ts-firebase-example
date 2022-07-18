import { GraphQLClient } from 'graphql-request'
// import { authMiddleware } from '@chia/lib/middlewares/auth'

const url = import.meta.env.VITE_GRAPHQL_API || 'http://localhost:3000/graphql'

const graphqlClient = new GraphQLClient(url, {
    // responseMiddleware: authMiddleware
})

export default graphqlClient
