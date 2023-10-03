import { Header } from "../interfaces/interface";

interface TableHeaderProps {
  headers: Header[];
}

export default function TableHeader({ headers }: TableHeaderProps) {

  return (
    <tr>
      {
        headers.map((element: Header, index: number) =>
          <td
            key={`${element.id}-${index}`}
            className="table-cell"
          >
            {element.label}
          </td>
        )
      }
    </tr>
  );
}
