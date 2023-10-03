import { TableRowProps, Task } from "../interfaces/interface";

const TableRow: React.FC<TableRowProps> = ({ element, headersIdArray, onEdit, onDelete }) => {

  return (
    <tr key={element._id}>
      {headersIdArray.map((key, index) => (
        <>

          {index === headersIdArray.length - 1
            ? <td>
                <button
                  className="button button-edit"
                  onClick={() => onEdit(element as Task)}>
                  Edit
                </button>
                <button
                  className="button button-delete"
                  onClick={() => onDelete(element._id)}>
                  Delete
                </button>
              </td>
            : <td key={`${key}-${index}`}>
              {element[key]}
            </td>}
        </>
      ))}

    </tr>
  );
};

export default TableRow;