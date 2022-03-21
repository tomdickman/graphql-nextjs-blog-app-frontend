import axios from "axios"

export type LoginParams = {
    email: string
    password: string
}

export const login = async ({
    email,
    password
}: LoginParams): Promise<string> => {
    console.log(process.env.GRAPHQL_API_URL)
    const resp = await axios.post(process.env.GRAPHQL_API_URL as string,
        {
            query: "mutation($input: SignInInput!) { signin(input: $input) { token userErrors { message } } }",
            variables: {
                input: {
                    email,
                    password
                }
            }
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    
    return resp.data.data.signin.token
}