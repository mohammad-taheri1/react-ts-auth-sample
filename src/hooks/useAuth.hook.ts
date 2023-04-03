import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const useAuth = () => {
   const authContext = useContext(AuthContext);

   return authContext;
};

export default useAuth;
