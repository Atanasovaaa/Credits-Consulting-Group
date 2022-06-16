import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router";
import "./login.scss";
import { login } from "../../../utils/http-utils/user-requests";

export function Login() {

    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const onInputChange = (event) => {
        setUser((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        login(user).then(() => {
            navigate('/users-list');
        }).catch(error => setError(error.message))
    }
    
    return (
        <div className="login-form-wrapper">
            <h2>Sign in</h2>
            <Form onSubmit={onFormSubmit}>
                { error && <span className="text-danger">{error}</span> }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={user.email || ''} onChange={onInputChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" name="password" value={user.password || ''} onChange={onInputChange} required/>
                </Form.Group>
                <Button variant="success" type="submit">Sign in</Button>
            </Form>
            <Link to="/register">Sign up</Link>
        </div>
    );
}