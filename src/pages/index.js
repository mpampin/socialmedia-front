import Layout from '../containers/Layout'
import { HttpLink, InMemoryCache, ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import config from "../../config";
import fetch from 'isomorphic-unfetch'
import ListOfPosts from '../containers/ListOfPosts';

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

const client = new ApolloClient({
  connectToDevTools: process.browser,
  ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  link: new HttpLink({
    uri: config.graphqlServer.url
  }),
  cache: new InMemoryCache().restore({})
});

const Index = () => (
  <ApolloProvider client={client}>
    <Layout>
      <ListOfPosts />
    </Layout>
  </ApolloProvider>
)

export default Index