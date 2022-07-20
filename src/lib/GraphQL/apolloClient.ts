import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { refreshToken } from "@chia/lib/firebase/auth/services";
import { logErrorMessages } from '@vue/apollo-util'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context';

const url = import.meta.env.VITE_GRAPHQL_API || 'http://localhost:3000/graphql'
const ws_url = import.meta.env.VITE_GRAPHQL_WS || 'ws://localhost:3000/graphql'

const httpLink = new HttpLink({
    uri: url,
})

const authLink = setContext((_, { headers }) => {
    return refreshToken().then(token => {
        return {
            headers: {
                ...headers,
                'content-type': 'application/json',
                'Authorization': token ? `Bearer ${token}` : ''
            }
        }
    })
})

const wsLink = new GraphQLWsLink(createClient({
    url: ws_url,
    lazy: true,
    connectionParams: () => {
        return refreshToken().then(token => {
            return {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': token ? `Bearer ${token}` : ''
                }
            }
        })
    }
}))

const errorLink = onError((error) => {
    if (process.env.NODE_ENV !== 'production') logErrorMessages(error)
})

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink.concat(errorLink),
    httpLink.concat(authLink).concat(errorLink)
);

const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NODE_ENV !== 'production',
})

export default apolloClient
