import axios from "axios"

export const getPosts = async () => {
    const resp = await axios.post(process.env.GRAPHQL_API_URL as string,
        {
            query: "query { posts { title content } }"
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    return resp.data.data.posts
}