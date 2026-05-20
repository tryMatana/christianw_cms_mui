import React from 'react';

export type Column<T = any> = {
  key: string;
  header: string;
  accessor?: keyof T | string;
  render?: (item: T) => React.ReactNode;
};

interface DataTableProps<T = any> {
  items: T[];
  columns?: Column<T>[];
  onView?: (item: T) => void;
  onEdit?: (item: T) => void;
  showActions?: boolean;
}

function DataTable<T = any>({ items, columns, onView, onEdit, showActions = true }: DataTableProps<T>) {
  const defaultColumns: Column<T>[] = [
    { key: 'id', header: 'Kode', accessor: 'id' },
    { key: 'name', header: 'Nama', accessor: 'name' },
    { key: 'startClass', header: 'Tgl. Awal', accessor: 'startClass' },
    { key: 'endClass', header: 'Tgl. Akhir', accessor: 'endClass' },
    { key: 'startUTS', header: 'Tgl. Awal UTS', accessor: 'startUTS' },
    { key: 'endUTS', header: 'Tgl. Akhir UTS', accessor: 'endUTS' },
    { key: 'startUAS', header: 'Tgl. Awal UAS', accessor: 'startUAS' },
    { key: 'active', header: 'Aktif', accessor: 'active' },
  ];

  const cols = columns && columns.length ? columns : defaultColumns;

  return (
    <div className="card card-table">
      <table>
        <thead>
          <tr>
            {cols.map((c) => (
              <th key={c.key}>{c.header}</th>
            ))}
            {showActions && (onView || onEdit) && <th>Aksi</th>}
          </tr>
        </thead>
        <tbody>
          {items.map((item: any) => (
            <tr key={item.id ?? JSON.stringify(item)}>
              {cols.map((c) => (
                <td key={c.key}>
                  {c.render ? c.render(item) : (c.accessor ? (item as any)[c.accessor as string] : null)}
                </td>
              ))}
              {showActions && (onView || onEdit) && (
                <td className="actions-cell">
                  {onView && (
                    <button className="btn btn-info action-btn" type="button" onClick={() => onView(item)}>
                      View
                    </button>
                  )}
                  {onEdit && (
                    <button className="btn btn-success action-btn" type="button" onClick={() => onEdit(item)}>
                      Edit
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
