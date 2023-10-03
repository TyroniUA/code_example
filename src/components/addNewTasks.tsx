import React, { useState } from 'react';
import { Task } from '../interfaces/interface';
interface AddTaskFormProps {
  onAdd: (newTask: Partial<Task>) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const [newTask, setNewTask] = useState<Partial<Task>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(newTask);
    setNewTask({});
  };

  return (
    <form
      className='form'
      onSubmit={handleSubmit}>
      <div
        className='form-input'
      >
        <label>
          Task Name:
        </label>
          <input type="text" value={newTask.name || ''} onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} />

      </div>
      <div
        className='form-input'
      >
        <label>
          Description:
        </label>
          <input type="text" value={newTask.description || ''} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />

      </div>
      <div
        className='form-input'
      >
        <label>
          Status:
        </label>
          <input type="text" value={newTask.status || ''} onChange={(e) => setNewTask({ ...newTask, status: e.target.value })} />

      </div>
      <div>
        <button
          className='button'
          type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
