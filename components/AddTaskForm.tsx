"use client";


import { useState } from "react";
import { useTasks } from "@/app/context/TaskContext";
import { Task } from "@/types/task";


const AddTaskForm = () => {
  const { addTask } = useTasks();
  const [task, setTask] = useState({ name: "", description: "", dueDate: "" });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.name || !task.dueDate) return alert("Please fill all fields!");
    addTask({ ...task, id: Date.now(), completed: false });
    setTask({ name: "", description: "", dueDate: "" });
  };


  return (
    <form onSubmit={handleSubmit} className="p-4 bg-zinc shadow-md rounded-md">
      <input type="text" placeholder="Task Name" value={task.name} onChange={(e) => setTask({ ...task, name: e.target.value })} className="p-2 border rounded w-full mb-2" />
      <input type="text" placeholder="Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} className="p-2 border rounded w-full mb-2" />
      <input type="date" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} className="p-2 border rounded w-full mb-2" />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Task</button>
    </form>
  );
};

export default AddTaskForm;


