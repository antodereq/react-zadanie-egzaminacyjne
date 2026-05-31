import { useState } from "react";

export default function TaskForm({ setTasks }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("praca");
    const [error, setError] = useState("");

    const categories = ["praca", "dom", "nauka"];

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim().length < 3) {
            setError("Tytuł musi mieć minimum 3 znaki.");
            return;
        }

        const newTask = {
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
            category: category,
            status: "do_zrobienia",
            createdAt: new Date().toISOString().slice(0, 10)
        };

        setTasks(prev => {
            const updatedTasks = [...prev, newTask];

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            return updatedTasks;
        });

        setTitle("");
        setDescription("");
        setCategory("praca");
        setError("");
    }

    return (
        <form onSubmit={handleSubmit} className="card p-3 mb-4">
            <h3>Dodaj zadanie</h3>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Tytuł
                </label>

                <input
                    type="text"
                    id="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Opis
                </label>

                <textarea
                    id="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Kategoria
                </label>

                <select
                    id="category"
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {error && (
                <p className="text-danger">
                    {error}
                </p>
            )}

            <button className="btn btn-success" type="submit">
                Dodaj zadanie
            </button>
        </form>
    );
}