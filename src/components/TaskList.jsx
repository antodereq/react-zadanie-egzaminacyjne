import { useState } from "react";
import DeleteTaskModal from "./DeleteTaskModal";

export default function TaskList({
    tasks,
    setTasks,
    categories,
    statuses,
    selectedStatus
}) {
    const [taskToDelete, setTaskToDelete] = useState(null);

    const checkedCategories = categories
        .filter(category => category.isChecked)
        .map(category => category.name);

    const filteredTasks = tasks.filter(task =>
        task.status === selectedStatus &&
        checkedCategories.includes(task.category)
    );

    function changeTaskStatus(id) {
        setTasks(prev =>
            prev.map(task => {
                if (task.id !== id) return task;

                const currentIndex = statuses.indexOf(task.status);
                const nextIndex = (currentIndex + 1) % statuses.length;

                return {
                    ...task,
                    status: statuses[nextIndex]
                };
            })
        );
    }

    function deleteTask(id) {
        setTasks(prev => prev.filter(task => task.id !== id));
        setTaskToDelete(null);
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="mb-0">Lista zadań</h3>

                <span className="badge bg-secondary">
                    {filteredTasks.length} zadań
                </span>
            </div>

            {filteredTasks.length === 0 ? (
                <div className="alert alert-info">
                    Brak zadań spełniających wybrane filtry.
                </div>
            ) : (
                <div className="row g-4">
                    {filteredTasks.map(task => (
                        <div key={task.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <h5 className="card-title mb-0">
                                            {task.title}
                                        </h5>

                                        <span className="badge bg-primary">
                                            {task.category}
                                        </span>
                                    </div>

                                    <p className="card-text text-muted flex-grow-1">
                                        {task.description || "Brak opisu"}
                                    </p>

                                    <div className="mb-3">
                                        <span className="badge bg-light text-dark border">
                                            {task.status}
                                        </span>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-primary btn-sm flex-fill"
                                            onClick={() => changeTaskStatus(task.id)}
                                        >
                                            Zmień status
                                        </button>

                                        <button
                                            className="btn btn-outline-danger btn-sm flex-fill"
                                            onClick={() => setTaskToDelete(task)}
                                        >
                                            Usuń
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <DeleteTaskModal
                task={taskToDelete}
                onConfirm={deleteTask}
                onCancel={() => setTaskToDelete(null)}
            />
        </div>
    );
}