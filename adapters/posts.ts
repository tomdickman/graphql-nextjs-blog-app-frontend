import axios from "axios"

export const getPosts = async (token: string) => {
    const resp = await axios.post(process.env.GRAPHQL_API_URL as string,
        {
            query: "query { posts { posts { title content } userErrors { message } } }"
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }
    )
    return resp.data.data.posts.posts
}