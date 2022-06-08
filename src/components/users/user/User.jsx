import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../utils/http-utils/user-requests";
import UserCard from "../user-card/UserCard";

export default function User() {

    const params = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserById(params.id).then(response => setUser(response.data))
    }, [params.id])
    
    return (
        <div className="user">
            <UserCard user={user} />
        </div>
    );
}