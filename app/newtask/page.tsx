"use client"; // ✅ Ensures this runs on the client side

import AddTaskForm from "@/components/AddTaskForm";
import { TaskProvider } from "../context/TaskContext";

export default function Home() {
    return (
        <section>
            <div className="flex flex-col items-center p-4">
                <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

                <TaskProvider>
                    <AddTaskForm />
                </TaskProvider>
            </div>
        </section>
    );
}
