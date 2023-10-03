import { useState, useEffect } from "react";
import { EditModalProps, Task } from "../interfaces/interface";

const EditModal: React.FC<EditModalProps> = ({ task, onSave, onClose }) => {
  const [updatedTask, setUpdatedTask] = useState<Partial<Task>>({});

  useEffect(() => {
    setUpdatedTask(task);
  }, [task]);

  const handleSave = () => {
    onSave(updatedTask);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedTask(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="modal">
      <div
        className="form"
      >
        <div
          className='form-input'
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedTask.name || ""}
            onChange={handleChange}
          />
        </div>
        <div
          className='form-input'
        >
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={updatedTask.description || ""}
            onChange={handleChange}
          />
        </div>
        <div
          className='form-input'
        >
          <label htmlFor="status">Status:</label>
          <textarea
            id="status"
            name="status"
            value={updatedTask.status || ""}
            onChange={handleChange}
          />
        </div>
        <button
          className="button"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="button button-edit"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditModal;
