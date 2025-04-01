import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: "",
            dueDate: "",
            priority: "Basse",
            isCompleted: false,
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="container mt-4">
            <h2>Formulaire de Tâche</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        {...register("name", {
                            required: "Le nom est requis",
                        })}
                        type="text"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dueDate">
                    <Form.Label>Date Due</Form.Label>
                    <Form.Control
                        {...register("dueDate", {
                            required: "La date est requise",
                        })}
                        type="date"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="priority">
                    <Form.Label>Priorité</Form.Label>
                    <Form.Select {...register("priority")}>
                        <option value="Basse">Basse</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Elevée">Elevée</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="isCompleted">
                    <Form.Check
                        type="checkbox"
                        name="isCompleted"
                        label="Complété"
                        {...register("isCompleted")}
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
