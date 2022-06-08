import { Container } from "react-bootstrap";
import UsersList from "../../users/users-list/UsersList";
import { Routes, Route } from 'react-router-dom';
import User from "../../users/user/User";

export default function Main() {
    return (
            <Container className="main-content py-5">
                <Routes>
                    <Route exact path="/users-list" element={<UsersList />} />
                    <Route path="/user/:id" element={<User />} />
                </Routes>
            </Container>
    );
}