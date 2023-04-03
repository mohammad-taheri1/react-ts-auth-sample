import "./users.css";
import { IUser } from "../../types/global.typing";
import { useNavigate } from "react-router-dom";

interface IUsersProps {
   users: IUser[];
}

const Users = ({ users }: IUsersProps) => {
   const redirect = useNavigate();
   return (
      <div className="users">
         {users.map((user) => (
            <div className="user-card" key={user.id} onClick={() => redirect(`/dashboard/users/${user.id}`)}>
               <img src={user.avatar} alt={user.email} />
               <h3>{user.email}</h3>
               <h4>
                  {user.first_name} {user.last_name}
               </h4>
            </div>
         ))}
      </div>
   );
};

export default Users;
