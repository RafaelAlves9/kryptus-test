import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [signed, setSigned] = useState(false)

    return(
        <AuthContext.Provider
            value={{signed, setSigned}}
        >
            {children}
        </AuthContext.Provider>
    )
}