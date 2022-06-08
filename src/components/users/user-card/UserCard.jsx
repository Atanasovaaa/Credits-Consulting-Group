import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './userCard.scss';

export default function UserCard() {
    return (
        <Card style={{ width: '18rem' }} className="user-card">
        <Card.Img variant="top" src="https://picsum.photos/id/237/250/150" />
            <Card.Body>
                <Card.Title>User Name</Card.Title>
                <Card.Text>
                    <span className="key">Address: </span>
                    <span className="value">User address</span>
                </Card.Text>
                <Card.Text>
                    <span className="key">Email1: </span>
                    <span className="value">User Email</span>
                </Card.Text>
                <Card.Text>
                    <span className="key">Phone: </span>
                    <span className="value">User Phone</span>
                </Card.Text>
                <div className="btn-holder">
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
}