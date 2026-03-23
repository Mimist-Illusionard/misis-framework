import { useState, ChangeEvent } from "react";

type Task = {
    id: number;
    text: string;
    completed: boolean;
};

function ToDo() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    function addTask(): void {
        if (newTask.trim() === "") return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: newTask,
                completed: false,
            },
        ]);

        setNewTask("");
    }

    function toggleTask(id: number): void {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }

    function deleteTask(id: number): void {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
        setNewTask(e.target.value);
    }

    return (
        <div style={{ width: "400px", margin: "auto" }}>
            <h1>Task Manager</h1>

            <input
                placeholder="Enter task"
                value={newTask}
                onChange={handleInputChange}
            />

            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span
                            onClick={() => toggleTask(task.id)}
                            style={{
                                textDecoration: task.completed ? "line-through" : "none",
                                color: task.completed ? "gray" : "black",
                                cursor: "pointer",
                                marginRight: "10px",
                            }}
                        >
                            {task.text}
                        </span>

                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;