import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
import './userCard.scss';

export default function UserCard( { user } ) {

    const navigate = useNavigate();

    const redirectToDetails = () => {
        navigate(`/user/${user.id}`);
    }
    
    if (!user) {
        return <p>No User!</p>;
    }
    
    return (
        <Card style={{ width: '20rem' }} className="user-card">
        <Card.Img variant="top" src={user.picture} />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    <span className="key">Address: </span>
                    <span className="value">{user.address}</span>
                </Card.Text>
                <Card.Text>
                    <span className="key">Email: </span>
                    <span className="value">{user.email}</span>
                </Card.Text>
                <Card.Text>
                    <span className="key">Phone: </span>
                    <span className="value">{user.phone}</span>
                </Card.Text>
                <div className="btn-holder">
                    <Button variant="primary" onClick={redirectToDetails}><i className="fa fa-eye"></i>Details</Button>
                    <Button variant="success"><i className="fa fa-pencil"></i>Edit</Button>
                    <Button variant="danger"><i className="fa fa-trash"></i>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
}