import { Container } from "react-bootstrap";
import UsersList from "../../users/users-list/UsersList";
import { Routes, Route } from 'react-router-dom';
import User from "../../users/user/User";
import { UserForm } from "../../users/user-form/UserForm";
import { TasksList } from "../../tasks/tasks-list/TasksList";
import { TaskForm } from "../../tasks/task-form/TaskForm";

export default function Main() {
    return (
            <Container className="main-content py-5">
                <Routes>
                    <Route path="/users-list" element={<UsersList />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="/user/create" element={<UserForm />} />
                    <Route path="/user/edit/:id" element={<UserForm />} />
                    <Route path="/tasks-list" element={<TasksList />} />
                    <Route path="/task/create" element={<TaskForm/>} />
                </Routes>
            </Container>
    );
}