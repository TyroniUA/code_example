export interface Task {
  _id: string | number;
  name: string;
  description: string;
  status: string;
}

export interface Header {
  id: string;
  label: string;
}

export interface DataRow {
  _id: string;
  [key: string]: any;
}

export interface EditModalProps {
  task: Task;
  onSave: (updatedTask: Partial<Task>) => void;
  onClose: () => void;
}

export interface TableProps {
  data: DataRow[];
  headers: Header[];
  title?: string;
  onEdit: (task: Task) => void;
  onDelete: (id: number | string) => void;
  children?: any
}

export interface TableRowProps {
  element: DataRow;
  headersIdArray: string[];
  onEdit:(task: Task) => void;
  onDelete: (id: number | string) => void;
}