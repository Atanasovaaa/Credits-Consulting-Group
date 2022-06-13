import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../../../utils/http-utils/user-requests";
import "./register.scss";

export function Register() {

    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        isActive:false,
        name: '',
        picture: '',
        phone: '',
        address: '',
        password: ''
    });

    const [error, setError] = useState('');

    const onInputChange = (event) => {
        setUser((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        });

        setError('');
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        registerUser(user).then(() => {
            navigate('/users-list');
        })
        .catch(error => setError(error.message));

    }
    
    return (
        <div className="register-form-wrapper">
            <h2>Sign up</h2>
            <Form onSubmit={onFormSubmit}>
                { error && <span className="text-danger">{error}</span> }
                <Form.Group className="mb-3" controlId="formBasicPicture">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control type="text" placeholder="Enter Picture URL" name="picture" value={user.picture || ''} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={user.name || ''} onChange={onInputChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={user.email || ''} onChange={onInputChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter Phone" name="phone" value={user.phone || ''} onChange={onInputChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" name="address" value={user.address || ''} onChange={onInputChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" name="password" value={user.password || ''} onChange={onInputChange} required/>
                </Form.Group>
                <Button variant="success" type="submit">Sign up</Button>
            </Form>
        </div>
    );
}