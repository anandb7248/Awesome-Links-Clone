import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: '/api/graphql', // uri to send requests to graphql server
  cache: new InMemoryCache(), // Apollo caches the result after a query
})

export default apolloClient