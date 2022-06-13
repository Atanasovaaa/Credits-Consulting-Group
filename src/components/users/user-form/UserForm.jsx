import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./userForm.scss";
import { useState } from "react";
import { saveUser } from "../../../utils/http-utils/user-requests";
import { useNavigate } from "react-router";

export function UserForm() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        isActive:false,
        name:'',
        picture:'',
        phone:'',
        address:''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        saveUser(user).then(() => {
            console.log("Success");
            navigate('/users-list');
        });
    }
    
    const onInputChange = (event) => {
         setUser((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
         })
    }
    
    return (
        <div className="user-form-wrapper">
            <h2>Create User Form</h2>
            <Form onSubmit={onFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPicture">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control type="text" placeholder="Picture URL" name="picture" onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Phone" name="phone" onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" name="address" onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Is Active" />
                </Form.Group>
                <Button variant="success" type="submit">Create</Button>
            </Form>
        </div>
    );
}