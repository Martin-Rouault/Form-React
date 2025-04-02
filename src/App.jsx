import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Le nom est requis")
        .min(8, "Le nom doit contenir au moins 8 caractères")
        .max(15, "Le nom ne peut pas dépasser 15 caractères"),
    dueDate: yup
        .string()
        .required("La date est requise")
        .matches(
            /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
            "Le format doit être JJ/MM/AAAA"
        )
        .test(
            "isValidDate",
            "La date ne doit pas être antérieure à aujourd’hui",
            (value) => {
                if (!value) return false;
                const [day, month, year] = value.split("/").map(Number);
                const inputDate = new Date(year, month - 1, day);
                inputDate.setHours(0, 0, 0, 0);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return inputDate >= today;
            }
        )
        .required("Ce champ est requis"),
    priority: yup
        .string()
        .oneOf(["Basse", "Moyenne", "Elevée"], "Priorité invalide"),
    isCompleted: yup.boolean(),
});

function App() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
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
                    />
                    {errors.name && (
                        <p className="text-danger">{errors.name.message}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="dueDate">
                    <Form.Label>Date Due</Form.Label>
                    <Form.Control
                        {...register("dueDate", {
                            required: "La date est requise",
                        })}
                        type="text"
                    />
                    {errors.dueDate && (
                        <p className="text-danger">{errors.dueDate.message}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="priority">
                    <Form.Label>Priorité</Form.Label>
                    <Form.Select {...register("priority")}>
                        <option value="Basse">Basse</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Elevée">Elevée</option>
                    </Form.Select>
                    {errors.priority && (
                        <p className="text-danger">{errors.priority.message}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="isCompleted">
                    <Form.Check
                        type="checkbox"
                        label="Complété"
                        {...register("isCompleted")}
                    />
                    {errors.isCompleted && (
                        <p className="text-danger">
                            {errors.isCompleted.message}
                        </p>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
        </div>
    );
}

export default App;
