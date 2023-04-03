import { IUser } from "../../types/global.typing";

interface IUserDetailsComponentProps {
   user: IUser;
}

const UserDetailsComponent = ({ user }: IUserDetailsComponentProps) => {
   return (
      <div className="user-details" key={user.id}>
         <img src={user.avatar} alt={user.email} />
         <h3>{user.email}</h3>
         <h4>
            {user.first_name} {user.last_name}
         </h4>
      </div>
   );
};

export default UserDetailsComponent;
