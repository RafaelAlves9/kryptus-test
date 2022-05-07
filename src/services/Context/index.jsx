import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [signed, setSigned] = useState(null)
    
    useEffect(()=> {
        if (!localStorage.getItem("user") && signed === true){
            localStorage.setItem("user", "loged")
        }else if (localStorage.getItem("user") && signed === false){
            localStorage.removeItem("user", "loged")
        }
    }, [signed])

    return(
        <AuthContext.Provider
            value={{signed, setSigned}}
        >
            {children}
        </AuthContext.Provider>
    )
}