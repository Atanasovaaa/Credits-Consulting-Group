import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./taskForm.scss";
import { useEffect, useState } from "react";
import { getTaskById, saveTask, TaskStatus } from "../../../utils/http-utils/task-request";
import { useNavigate, useParams } from "react-router-dom";

export function TaskForm() {

    const navigate = useNavigate();
    const params = useParams();
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: '',
        dueDate: ''
    });

    useEffect(() => {
        if(params.id) {
            getTaskById(params.id).then((response) => {
                    setTask(response.data);
            });
        }
    }, [params.id]);
    

    const onInputChange = (event) => {
        setTask((prevState) => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ));
    }

    const onTaskSubmit = (event) => {
        event.preventDefault();

        saveTask(task).then(() => {
            console.log("Success");
            navigate("/tasks-list");
        });
    }


    
    return (
        <div className="task-form-wrapper">
            <h2>Create Task</h2>
            <Form onSubmit={onTaskSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" name="title" value={task.title || ''} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" name="description" value={task.description || ''} onChange={onInputChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Select placeholder="Select Status" name="status" value={task.status} aria-label="Select Status" onChange={onInputChange}>
                        { Object.keys(TaskStatus).map(status => <option key={status} value={TaskStatus[status]}>{TaskStatus[status]}</option>) }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDueDate">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" placeholder="Due Date" name="dueDate" value={task.dueDate || ''} onChange={onInputChange}/>
                </Form.Group>
                <Button variant="success" type="submit">{task.id ? "Edit Task" : "Create Task"}</Button>
            </Form>
        </div>
    );
}