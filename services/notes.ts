import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? '';
const graphQLClient = new GraphQLClient(graphqlAPI)

export const getNotes = async () => {
  const query = gql`
    query getNotesCMS {
      notes {
        title
      }
    }
  `

  const response = await graphQLClient.request(query)

  console.log('response', response)

  return response
}

export const getNote = async (slug: string) => {
  const params = { slug }
  const query = gql`
    query getNote($slug: String!) {
      note(where: {slug: $slug}) {
        title
      }
    }
  `

  const response = await graphQLClient.request(query, params)

  console.log('response', response)

  return response
}