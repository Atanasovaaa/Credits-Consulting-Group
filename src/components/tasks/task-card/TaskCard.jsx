import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./taskCard.scss";

export function TaskCard({ task }) {
    return (
        <Col xs="12" md="6" lg="4" xl="3">
            <>
            {[
                'Primary',
                // 'Secondary',
                // 'Success',
                // 'Danger',
                // 'Warning',
                // 'Info',
                // 'Light',
                // 'Dark',
            ].map((variant) => (
                <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ minHeight: "20rem" }}
                className="task-card mb-2"
                >
                <Card.Header>{task.TODO}</Card.Header>
                <Card.Body>
                    <Card.Title>{task.title} </Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                    <Card.Text>{task.authorName}</Card.Text>
                    <Card.Text>Created: {task.createdDate} - Due to {task.dueDate}</Card.Text>
                </Card.Body>
                </Card>
            ))}
            </>
        </Col>
    );
}