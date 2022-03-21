import React, { 
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useState
} from 'react'

type AuthContextType = {
    token: string
    setToken: Dispatch<SetStateAction<string>> | undefined
}

const authContextDefaults: AuthContextType = {
    token: '',
    setToken: undefined
 }

export const AuthContext = React.createContext(authContextDefaults)

export const AuthProvider = ({children}: PropsWithChildren<{}>) => {
    const [token, setToken] = useState<string>('')

    return (
        <AuthContext.Provider value={{
            token,
            setToken,
        }}>
            {children}
        </AuthContext.Provider>
    )
}