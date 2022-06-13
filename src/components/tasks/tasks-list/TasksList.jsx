import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { getAllTasks } from "../../../utils/http-utils/task-request";
import TaskCard from "../task-card/TaskCard";
import "./tasksList.scss";

export function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks().then(response => {
            setTasks(response.data);
        })
    }, []);

    return (
        <div className="tasks-list-wrapper">
            <Row>
            { tasks.map(task => <TaskCard key={task.id} task={task} />) }
            </Row>
        </div>
    );
}