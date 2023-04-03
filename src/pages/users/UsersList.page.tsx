import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Users from "../../components/users/Users.component";
import useAxios from "../../hooks/useAxios.hook";
import { IUser, IUsersResponse } from "../../types/global.typing";

const UsersList = () => {
   const [users, setUsers] = useState<IUser[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

   const axiosInstance = useAxios();

   useEffect(() => {
      setLoading(true);
      axiosInstance
         .get<IUsersResponse>("/users?page=2")
         .then((response) => {
            const usersList = response.data.data;
            setLoading(false);
            setUsers(usersList);
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
         <h1>Users List </h1>
         {loading && <CircularProgress size={62} />}
         {users.length > 0 && <Users users={users} />}
      </div>
   );
};

export default UsersList;
