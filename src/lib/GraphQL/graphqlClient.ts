import { GraphQLClient } from 'graphql-request'
import { authMiddleware, refreshTokenMiddleware } from '@chia/lib/middlewares/auth'
import { refreshToken } from '@chia/lib/firebase/auth/services';

const url = import.meta.env.VITE_GRAPHQL_API || 'http://localhost:3000/graphql'
const ws_url = import.meta.env.VITE_GRAPHQL_WS || 'ws://localhost:3000/graphql'

const graphqlClient = new GraphQLClient(url, {
    // @ts-ignore
    requestMiddleware: authMiddleware,
    responseMiddleware: refreshTokenMiddleware
})

const client = () => {
    return refreshToken().then(token => {
        return graphqlClient.setHeader('Authorization', `Bearer ${token}`)
    })
}

export default client
