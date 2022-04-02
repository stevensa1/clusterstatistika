import { graphql } from 'graphql';
import { request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
            edges {
                node {
                    author {
                        name
                        id
                        photo {
                            url
                        }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featuredimage {
                        url
                    }
                    categories {
                        name
                        slug
                    }
                }
            }
            }
        }
    `;

    const result = await request(graphqlAPI, query)

    return result.postsConnection.edges;
}

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: { slug: $slug}) {
                author {
                    name
                    id
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title
                excerpt
                featuredimage {
                    url
                }
                categories {
                    name
                    slug
                }
                content {
                    raw
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query, { slug })

    return result.post;
}

export const getRecentPosts = async () => {
    const query = gql`
    query getPostDetails {
        posts(orderBy: createdAt_ASC) {
          title
          featuredimage {
            url
          }
          createdAt
          slug
        }
      }
    `
    const result = await request(graphqlAPI, query)
    return result.posts;
}

export const getSimilarPosts = async () => {
    const query = gql`
    query getPostDetails($slug: String!, $categories: [String!]) {
        posts(
            where: {slug_not: $slug, AND: {categories_some: { slug_in: $categories}}}
            last: 3) {
            title
            featuredimage {
              url
            }
            createdAt
            slug
                }
        }
    `
    const result = await request(graphqlAPI, query)
    return result.posts;
}

export const getCategories = async () => {
    const query = gql`
    query getCategories {
        categories {
            name
            slug
        }
      }
    `

    const result = await request(graphqlAPI, query)
    return result.categories;
}