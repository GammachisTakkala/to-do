import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do App</h1>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border rounded-lg px-3 py-2"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-2 mb-2 rounded-lg"
            >
              <span
                onClick={() => toggleTask(index)}
                className={`cursor-pointer ${
                  todo.done ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTask(index)}
                className="text-red-500"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}