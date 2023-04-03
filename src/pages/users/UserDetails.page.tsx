import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios.hook";
import { IUser, IUserDetailsResponse } from "../../types/global.typing";
import UserDetailsComponent from "../../components/users/UserDetails.component";

const UserDetails = () => {
   const [user, setUser] = useState<IUser>();
   const [loading, setLoading] = useState<boolean>(false);

   const { id } = useParams();

   const axiosInstance = useAxios();

   useEffect(() => {
      setLoading(true);
      axiosInstance
         .get<IUserDetailsResponse>(`/users/${id}`)
         .then((response) => {
            const receivedUser = response.data.data;
            setLoading(false);
            setUser(receivedUser);
         })
         .catch((error) => {
            setLoading(false);
            Swal.fire({
               icon: "error",
               title: "Data Fetching Failed",
               text: "Please Try again later",
            });
         });
   }, []);

   return (
      <div className="content">
         <h1>UserDetails </h1>
         {loading && <CircularProgress size={62} />}
         {user && <UserDetailsComponent user={user} />}
      </div>
   );
};

export default UserDetails;
