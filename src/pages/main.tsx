import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/table";
import TableHeader from "../components/tableHeader";
import { taskHeaders, tasksLink } from "../utils/constants";
import { Task } from "../interfaces/interface";
import Loader from "../components/loader";
import EditModal from "../components/editModal";
import AddTaskForm from "../components/addNewTasks";

export default function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(tasksLink);
      if (result?.data) {
        setTasks([...result.data]);
      }
    } catch (error) {
      console.log(error)
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddNewTask = async (newTask: Partial<Task>) => {
    try {
      const result = await axios.post(tasksLink, newTask);
      const existingTasks = [...tasks];
      existingTasks.push(result.data)
      setTasks(existingTasks)
    } catch (error: any) {
      setIsError(error.message)
    }
  };

  const editTask = (task: Task) => {
    setTaskToEdit(task);
  };

  const saveTask = async (updatedTask: Partial<Task>) => {
    if (!taskToEdit) return;

    const updatedTasks = tasks.map((task) => task._id === taskToEdit._id ? { ...task, ...updatedTask } : task);
    setTasks(updatedTasks);

    try {
      await axios.put(`${tasksLink}/${taskToEdit._id}`, updatedTask);
    } catch (error) {
      console.error("Failed to update task:", error);
    }

    setTaskToEdit(null);
  };

  const deleteTask = async (id: number | string) => {
    const updatedTasks = tasks.filter(task => task._id !== id);
    try {
      await axios.delete(`${tasksLink}/${id}`);
      setTasks(updatedTasks);

    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };


  return (
    <div className="main-container">
         <div className="flex flex-align-bot w-40vw m-auto">
        <AddTaskForm onAdd={handleAddNewTask} />
      </div>
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : isError ? (
        <div className="error-container">
          An error occurred during the loading. Please retry.
        </div>
      ) : (
        <Table
          title="Tasks"
          headers={taskHeaders}
          data={tasks as any}
          onEdit={editTask}
          onDelete={deleteTask}
        >
          <TableHeader headers={taskHeaders} />
        </Table>
      )}
      {
        taskToEdit && (
          <EditModal
            task={taskToEdit}
            onSave={saveTask}
            onClose={() => setTaskToEdit(null)}
          />
        )}
    </div>
  );
}
