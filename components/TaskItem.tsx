import { Task } from "@/types/task";
import { useTasks } from "@/app/context/TaskContext";

const TaskItem = ({ task }: { task: Task }) => {
  const { deleteTask, toggleTaskCompletion } = useTasks();

  return (
    <div className="p-4 bg-white shadow-md rounded-md flex justify-between items-center mb-2">
      <div>
        <h3 className={`text-lg ${task.completed ? "line-through text-gray-500" : "text-black"}`}>
          {task.name}
        </h3>
        <p className="text-black">{task.description}</p>
        <p className="text-sm text-gray-400">Due: {task.dueDate}</p>
      </div>
      <div>
        <button onClick={() => toggleTaskCompletion(task.id)} className="mr-2 px-3 py-1 bg-[#121063]-500 text-white rounded">
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTask(task.id)} className="px-3 py-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
