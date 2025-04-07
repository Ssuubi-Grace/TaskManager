"use client";

import { useTasks } from "@/app/context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const { tasks } = useTasks();

    return (
        <div>
            <h2 className ="text-xl font-bold mt-4 mb-4"> Task List </h2>
            {tasks.length === 0 ? (
                <p> No tasks available.</p>
            ) : (
                tasks.map((task) => <TaskItem key={task.id} task={task} />)
            )}
        </div>
    );
};
export default TaskList;
