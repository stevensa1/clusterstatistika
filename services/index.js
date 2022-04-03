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
                        description
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
        post(where: {slug: $slug}) {
            author {name id photo {url} description}
          createdAt
          slug
          title
          excerpt
          featuredimage {url}
          categories {name slug}
          content {raw}
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

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
    query getPostDetails($slug: String!, $categories: [String!]) {
        posts(where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}} last: 3){
        title
        featuredimage {url}
        createdAt
        slug
        }
    }
    `
    const result = await request(graphqlAPI, query, {categories, slug})
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

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
    return result.json();
}

export const publishCommentId = async (id) => {
    const result = await fetch('/api/publishComment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id)
    })
    return result.json();
}

export const getComments = async (slug) => {
    const query = gql`
    query getComments($slug: String!) {
        comments(where: {post: {slug: $slug}}) {
            name
            createdAt
            comment
        }
        
      }
    `
    const result = await request(graphqlAPI, query, {slug})
    return result.comments;
}

export const getFeaturedPosts = async () => {
    const query = gql`
        posts(where: {featured_post: true}) {
            author {
                name
                photo {url}
            }
            featuredimage{url}
            title
            slug
            createdAt
        
    }
    `;
    const result = await request(graphqlAPI, query);
    return result.posts;
}