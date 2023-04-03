import "./navbar.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.hook";

const Navbar = () => {
   const { isAuthenticated, handleLogout } = useAuth();

   return (
      <div className="navbar">
         <div className="brand">
            <Link to="/">AuthSample</Link>
         </div>
         <div className="menu">
            <ul>
               {!isAuthenticated && (
                  <li>
                     <Link to="/login">Login</Link>
                  </li>
               )}
               {isAuthenticated && (
                  <>
                     <li>
                        <Link to="/dashboard">Dashboard</Link>
                     </li>
                     <li>
                        <Link to="/dashboard/users">Users</Link>
                     </li>
                     <li>
                        <a onClick={handleLogout}>Logout</a>
                     </li>
                  </>
               )}
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
