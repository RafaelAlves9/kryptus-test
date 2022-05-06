import { useContext } from "react";
import { AuthContext } from "../Context/Auth";

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context
}