import {
  ColumnDef,
  FilterFn,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo } from 'react';
import * as Styled from './styles';
import TableActions from '../../TableActions';
import { fuzzyFilter } from '../../../resources/helpers/fuzzyFilter';
import { IOrganizational } from '../../../types/entities/Organizational';

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
}

const OrganizationalTable = () => {
  const organizationalColumns: IOrganizational[] = useMemo(
    () => [
      {
        id: '1',
        label: 'Presidência',
        parentId: null,
      },
      {
        id: '2',
        label: 'Direção geral',
        parentId: '1',
      },
      {
        id: '3',
        label: 'Direção de marketing',
        parentId: '2',
      },
      {
        id: '4',
        label: 'Direção de vendas',
        parentId: '2',
      },
      {
        id: '5',
        label: 'Direção de tecnologia',
        parentId: null,
      },
    ],
    []
  );
  // talvez melhor jogar isso num utils

  const columns = useMemo<ColumnDef<IOrganizational, any>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'label',
        header: 'Label',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'parentId',
        header: 'Parent',
        cell: (info) => {
          const parent = organizationalColumns.find(
            (o) => o.id === info.getValue()
          );
          console.log(parent);
          console.log(organizationalColumns);
          return parent ? parent.label : '-';
        },
      },
      {
        accessorKey: 'actions',
        header: 'Ações',
        cell: (info) => <TableActions editAction deleteAction row={info.row} />,
      },
    ],
    []
  );

  const table = useReactTable<IOrganizational>({
    columns,
    data: organizationalColumns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Styled.Container>
      <Styled.Table>
        <Styled.TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Styled.TableHeader key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Styled.TableHeader>
              ))}
            </tr>
          ))}
        </Styled.TableHead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <Styled.TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Styled.TableData key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Styled.TableData>
              ))}
            </Styled.TableRow>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Container>
  );
};

export default OrganizationalTable;
