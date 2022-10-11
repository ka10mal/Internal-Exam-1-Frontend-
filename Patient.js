import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Card} from "react-bootstrap";

function BasicExample() {
    return (
        <div className="my-3">
            <Container>
                <Card>
        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Patient Id </Form.Label>
                <Form.Control type="text" placeholder="Enter your id" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Enter your age" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
                </Card>
            </Container>
        </div>
    );
}

export default BasicExample;