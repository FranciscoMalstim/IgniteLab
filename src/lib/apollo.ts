import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omq66a0el301yw9ndmhfzx/master',
  cache: new InMemoryCache()
})