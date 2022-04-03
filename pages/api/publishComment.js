import {GraphQLClient, gql} from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.GRAPHCMS_TOKEN

export default async function publishComment(req, res) {
    const {id} = req.body;

    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${graphcmsToken}`
        }
    })

    const query = gql `
    mutation publishComment($id: String!) {
        publishComment(where: {id: $id}, to: PUBLISHED) {
            id
        }
    }
  `
    try {
        const result = await graphQLClient.request(query, req.body)
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}
