import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [signed, setSigned] = useState(false)

    useEffect(()=> {
        if (localStorage.getItem("user", "loged")){
            localStorage.removeItem("user", "loged")
        } else localStorage.setItem("user", "loged")
    }, [signed])

    return(
        <AuthContext.Provider
            value={{signed, setSigned}}
        >
            {children}
        </AuthContext.Provider>
    )
}