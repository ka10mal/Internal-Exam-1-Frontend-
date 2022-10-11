import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Patient Management System</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Patient">Add Patient</Nav.Link>
                        <Nav.Link href="/PatientList">View Patient details</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;