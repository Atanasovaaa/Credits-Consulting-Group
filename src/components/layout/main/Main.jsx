import { Container } from "react-bootstrap";
import UsersList from "../../users/users-list/UsersList";

export default function Main() {
    return (
        <div className="main-content py-5">
            <Container className="main-content">
                <UsersList />
            </Container>
        </div>
    );
}