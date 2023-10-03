import React from 'react';
import { TableProps } from '../interfaces/interface';
import TableRow from './tableRow';

const Table: React.FC<TableProps> = ({ data, headers, title = "", children, onEdit,
  onDelete, }) => {

  const headersIdArray = headers.map((header) => header.id);

  return (
    <div className="table">
      <table>
        {title &&
          <caption>
            {title}
          </caption>
        }
        <thead className="table-header">{children}</thead>
        <tbody className="table-body">
          {data.map((element) => (
            <TableRow
              key={element._id}
              element={element}
              onEdit={onEdit}
              onDelete={onDelete}
              headersIdArray={headersIdArray}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Table);
