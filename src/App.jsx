import { useState } from "react";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import tasksList from "./data/tasks.json";
import TaskForm from "./components/TaskForm";

function App() {
    const [tasks, setTasks] = useState(tasksList);

    const [categories, setCategories] = useState([
        { name: "praca", isChecked: true },
        { name: "dom", isChecked: true },
        { name: "nauka", isChecked: true },
    ]);

    const statuses = ["do_zrobienia", "w_trakcie", "ukonczone"];

    const [selectedStatus, setSelectedStatus] = useState("do_zrobienia");

    return (
        <div className="container">
            <h1>Menedżer zadań</h1>

            <TaskForm setTasks={setTasks} />

            <TaskFilter
                categories={categories}
                setCategories={setCategories}
                statuses={statuses}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
            />

            <TaskList
                tasks={tasks}
                setTasks={setTasks}
                categories={categories}
                statuses={statuses}
                selectedStatus={selectedStatus}
            />
        </div>
    );
}

export default App;