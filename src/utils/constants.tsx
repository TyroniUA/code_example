import { Header } from "../interfaces/interface";
export const taskHeaders: Header[] = [
  {
    id: "_id",
    label: "Id"
  },
  {
    id: "name",
    label: "Name"
  },
  {
    id: "description",
    label: "Description"
  },
  {
    id: "status",
    label: "Status"
  },
    {
    id: "action",
    label: "Action buttons"
  },
];

export const tasksLink = `${process.env.REACT_APP_BASE_URL}tasks` || "http://localhost:8081/tasks"