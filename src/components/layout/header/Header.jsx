import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { getLoggedUser } from "../../../utils/http-utils/user-requests";


export default function Header() {
  const loggedUser = getLoggedUser();
  const taskUrl = `/tasks/${loggedUser.id}`;
  
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users-list">Users</Nav.Link>
            <Nav.Link href="/user/create">Create User</Nav.Link>
            <NavDropdown title="Tasks" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/tasks-list">Tasks List</NavDropdown.Item>
              <NavDropdown.Item href={taskUrl}>My Tasks</NavDropdown.Item>
              <NavDropdown.Item href="/task/create">Create Task</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            { loggedUser && <span className="btn btn-danger" refresh="true">Logout</span> }
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  );
}