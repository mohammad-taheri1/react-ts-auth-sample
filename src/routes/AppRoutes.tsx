import { Routes, Route, Navigate } from "react-router-dom";
import AuthGuard from "../components/auth-guard/AuthGuard.component";
import Dashboard from "../pages/dashboard/Dashboard.page";
import Home from "../pages/home/Home.page";
import Login from "../pages/login/Login.page";
import NotFound from "../pages/not-found/NotFound.page";
import Unauthorized from "../pages/unauthorized/Unauthorized.page";
import UserDetails from "../pages/users/UserDetails.page";
import Users from "../pages/users/UsersList.page";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/unauthorized" element={<Unauthorized />} />
         <Route element={<AuthGuard />}>
            <Route path="/dashboard">
               <Route index element={<Dashboard />} />
               <Route path="users">
                  <Route index element={<Users />} />
                  <Route path=":id" element={<UserDetails />} />
               </Route>
            </Route>
         </Route>

         <Route path="/not-found" element={<NotFound />} />
         <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
   );
};

export default AppRoutes;
