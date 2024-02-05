import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';

const GRAPHQL_ENDPOINT = 'https://countries.trevorblades.com/graphql';

const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
