import { gql } from "@apollo/client";
export const GET_PROJECTS: any = gql`
  query getData($name: String!, $pinned: Int!, $languages: Int!) {
    user(login: $name) {
      pinnedItems(first: $pinned) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              id
              url
              description
              homepageUrl
              languages(first: $languages) {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
              updatedAt
            }
          }
        }
      }
    }
  }
`;
