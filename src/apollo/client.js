import ApolloClient, {gql} from 'apollo-boost';
import fetch from 'isomorphic-fetch';

// Get the URI for Apollo backend from .env file or use localhost
const API_URI = process.env.GATSBY_API_URI || 'http://localhost:4000/';

// Export the Apollo connection
export const client = new ApolloClient({
  uri: API_URI,
  fetch,
});

client
  .query({
    query: gql`
      {
        games {
          vg_name
        }
      }
    `
  })
  .then(result => console.log(result));