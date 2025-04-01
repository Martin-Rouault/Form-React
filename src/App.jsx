import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        dueDate: "",
        priority: "Basse",
        isCompleted: false,
    });

    const handleOnChange = (event) => {
        setFormData((prevValue) => {
            return {
                ...prevValue,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container mt-4">
            <h2>Formulaire de Tâche</h2>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        onChange={handleOnChange}
                        name="name"
                        type="text"
                        defaultValue=""
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Date Due</Form.Label>
                    <Form.Control
                        onChange={handleOnChange}
                        type="date"
                        name="dueDate"
                        required
                        defaultValue=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Priorité</Form.Label>
                    <Form.Select
                        onChange={handleOnChange}
                        name="priority"
                        defaultValue={formData.priority}
                    >
                        <option value="Basse">Basse</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Elevée">Elevée</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        name="isCompleted"
                        label="Complété"
                        checked={formData.isCompleted}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                isCompleted: event.target.checked,
                            });
                        }}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
        </div>
    );
}

export default App;
