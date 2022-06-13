import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
import './userCard.scss';

export default function UserCard( { user, deleteUser } ) {

    const navigate = useNavigate();

    const redirectToDetails = () => {
        navigate(`/user/${user.id}`);
    }
    
    const redirectToEdit = () => {
        navigate(`/user/edit/${user.id}`);
    }
    
    if (!user) {
        return <p>No User!</p>;
    }
    
    return (
        <Col xs="12" md="6" lg="4" xl="3">
            <Card style={{minHeight: '30rem'}} className="user-card">
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
                    <hr className="mb-3"/>
                    <div className="btn-holder">
                        <Button variant="primary" onClick={redirectToDetails}><i className="fa fa-eye"></i>Details</Button>
                        <Button variant="success" onClick={redirectToEdit}><i className="fa fa-pencil"></i>Edit</Button>
                        <Button variant="danger" onClick={() => deleteUser(user.id)}><i className="fa fa-trash"></i>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>    
    );
}