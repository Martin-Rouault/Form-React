import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        name: "Toto",
        date: "03/05/2000",
        priority: "Basse",
        isCompleted: true,
    });

    return (
        <div className="container mt-4">
            <h2>Formulaire de Tâche</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" required defaultValue={formData.name} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Date Due</Form.Label>
                    <Form.Control
                        type="date"
                        name="dueDate"
                        required
                        defaultValue={formData.date}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Priorité</Form.Label>
                    <Form.Select
                        name="priority"
                        required
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
                        defaultValue={formData.isCompleted}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    onClick={() => {
                        console.log(formData);
                    }}
                >
                    Envoyer
                </Button>
            </Form>
        </div>
    );
}

export default App;
