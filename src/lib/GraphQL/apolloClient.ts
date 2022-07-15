import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_API || 'http://localhost:3000/graphql'
})

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': import.meta.env.VITE_GRAPHQL_SECRET_KEY || 'secret',
        }
    }
});

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        }
    }
})


export default apolloClient
