import Card from "react-bootstrap/Card"

export function TaskCard({ task }) {
    return (
        <div className="task-card-wrapper">
            <>
            {[
                'Primary',
                'Secondary',
                'Success',
                'Danger',
                'Warning',
                'Info',
                'Light',
                'Dark',
            ].map((variant) => (
                <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
                >
                <Card.Header>{task.TODO}</Card.Header>
                <Card.Body>
                    <Card.Title>{variant} {task.title} </Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                    <Card.Text>{task.authorName}</Card.Text>
                    <Card.Text>{task.createdDate}</Card.Text>
                    <Card.Text>{task.dueDate}</Card.Text>
                </Card.Body>
                </Card>
            ))}
            </>
        </div>
    );
}