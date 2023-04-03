import { useState } from "react";
import "./login.css";
import { TextField, Button, CircularProgress } from "@mui/material";
import { ILoginData } from "../../types/global.typing";
import useAxios from "../../hooks/useAxios.hook";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth.hook";

const Login = () => {
   const [loginData, setLoginData] = useState<ILoginData>({ email: "", password: "" });
   const [loading, setLoading] = useState<boolean>(false);
   const { handleLogin } = useAuth();

   const axiosInstance = useAxios();

   const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
      try {
         event.preventDefault();
         setLoading(true);
         const data = loginData;
         const response = await axiosInstance.post("/login", data);
         setLoading(false);
         handleLogin(response?.data?.token);
      } catch (error) {
         setLoading(false);
         Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Check your credentials and try again",
         });
      }
   };

   return (
      <div className="content login">
         <h1>Login</h1>
         {loading && <CircularProgress size={62} />}
         <form onSubmit={submitHandler}>
            <TextField
               autoComplete="off"
               label="UserName"
               variant="outlined"
               value={loginData.email}
               onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
               required
            />
            <TextField
               autoComplete="off"
               label="Password"
               type="password"
               variant="outlined"
               value={loginData.password}
               onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
               required
            />
            <Button variant="outlined" color="primary" type="submit">
               Login
            </Button>
         </form>
         <p>For Help:</p>
         <p>This is a demo app and you can use this credentials:</p>
         <p>email: "eve.holt@reqres.in"</p>
         <p>password: "cityslicka"</p>
      </div>
   );
};

export default Login;
