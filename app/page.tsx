"use client"; // ✅ Ensures this runs on the client side

import TaskList from "@/components/TaskList";
import AddTaskForm from "@/components/AddTaskForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      
      {/* ✅ Add Task Form */}
      <AddTaskForm />

      {/* ✅ Task List */}
      <TaskList />
    </main>
  );
}
