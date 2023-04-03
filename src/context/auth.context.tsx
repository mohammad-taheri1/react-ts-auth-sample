import React, { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
   isAuthenticated: boolean;
   handleLogin: (token: string) => void;
   handleLogout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
   isAuthenticated: false,
   handleLogin: () => {},
   handleLogout: () => {},
});

interface IAuthContextProviderProps {
   children: ReactNode;
}

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
   const initialState = !!localStorage.getItem("token");

   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialState);
   const redirect = useNavigate();

   const handleLogin = (token: string) => {
      setIsAuthenticated(true);
      localStorage.setItem("token", token);
      redirect("/dashboard");
   };

   const handleLogout = () => {
      setIsAuthenticated(false);
      localStorage.removeItem("token");
      redirect("/");
   };

   return (
      <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>{children}</AuthContext.Provider>
   );
};

export default AuthContextProvider;
