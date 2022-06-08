import { useEffect, useState } from "react";
import { getAllUsers } from "../../../utils/http-utils/user-requests";
import UserCard from "../user-card/UserCard";
import './usersList.scss';

export default function UsersList() {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
       getAllUsers().then(response => {
           setUsers(response.data);
       });
    }, []);

    return (
        <div className="users-list-wrapper">
            { users.map(user => <UserCard key={user.id} user={user} />) }
        </div>
    );
}