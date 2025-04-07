"use client"; // ✅ Ensures this runs on the client side

import TaskList from "@/components/TaskList";
import AddTaskForm from "@/components/AddTaskForm";
import { TaskProvider } from "./context/TaskContext";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager | <Link href={"newtask"}> New Task </Link>
        </h1>

      <TaskProvider>
        <TaskList />
      </TaskProvider>
    </main>
  );
}
