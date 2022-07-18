import { GraphQLClient, GraphQLWebSocketClient } from 'graphql-request'
// import { authMiddleware } from '@chia/lib/middlewares/auth'

const url = import.meta.env.VITE_GRAPHQL_API || 'http://localhost:3000/graphql'
const ws_url = import.meta.env.VITE_GRAPHQL_WS || 'ws://localhost:3000/graphql'

const graphqlClient = new GraphQLClient(url, {
    // responseMiddleware: authMiddleware
})

// const graphqlWebSocketClient = new GraphQLWebSocketClient(ws_url, {
//
// })

export default graphqlClient
