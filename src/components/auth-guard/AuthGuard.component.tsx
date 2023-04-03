import useAuth from "../../hooks/useAuth.hook";
import { Navigate, Outlet } from "react-router-dom";
import React from "react";

interface IAuthGuardProps {
   children: React.ReactNode;
}

const AuthGuard = () => {
   const { isAuthenticated } = useAuth();

   return isAuthenticated ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default AuthGuard;
