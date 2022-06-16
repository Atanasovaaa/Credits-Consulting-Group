import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col";
import { getLoggedUser } from "../../../utils/http-utils/user-requests";
import "./taskCard.scss";
import { useNavigate } from "react-router-dom";
import { TaskStatus } from "../../../utils/http-utils/task-request";

export function TaskCard({ task, onTaskDelete, changeStatus }) {
    const loggedUser = getLoggedUser();
    const navigate = useNavigate();

    const navigateToEdit = () => {
        navigate(`/task/edit/${task.id}`);
    }
    
    const getNextStateButton = () => {
        switch(task.status) {
            case TaskStatus.NEW:
                return <Button variant="warning" onClick={() => changeStatus(TaskStatus.IN_PROGRESS, task.id)}>Move to In Progress</Button>;
            case TaskStatus.IN_PROGRESS:
                return <Button variant="info" onClick={() => changeStatus(TaskStatus.IN_REVIEW, task.id)}>Move to In Review</Button>;
            case TaskStatus.IN_REVIEW:
                return <Button variant="info" onClick={() => changeStatus(TaskStatus.DONE, task.id)}>Move to Done</Button>;

        }
    }

    return (
        <Col xs="12" md="6" lg="4" xl="3">
            <>
            {[
                // 'Primary',
                // 'Secondary',
                // 'Success',
                // 'Danger',
                // 'Warning',
                // 'Info',
                'Light',
                // 'Dark',
            ].map((variant) => (
                <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ minHeight: "22rem", minWidth: '18rem' }}
                className="task-card mb-2"
                >
                <Card.Header>{task.status}</Card.Header>
                <Card.Body>
                    <Card.Title>{task.title} </Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                    <Card.Text>{task.authorName}</Card.Text>
                    <Card.Text>Created: {task.createdDate} - Due to {task.dueDate}</Card.Text>
                    <hr className="mb-3"/>
                    { loggedUser && loggedUser.id === task.authorId &&
                        <div className="btn-holder">
                            <Button variant="success" onClick={navigateToEdit}><i className="fa fa-pencil"></i>Edit</Button> 
                            <Button variant="danger" onClick={() => onTaskDelete(task.id)}><i className="fa fa-trash"></i>Delete</Button>
                            { getNextStateButton() }
                        </div>
                    }   
                </Card.Body>
                </Card>
            ))}
            </>
        </Col>
    );
}