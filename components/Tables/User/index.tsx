import {
  ColumnDef,
  FilterFn,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { DebouncedInput } from '../../DebouncedInput';
import { rankItem } from '@tanstack/match-sorter-utils';
import * as Styled from './styles';
import TableActions from '../../TableActions';
import { IUser } from '../../../types/entities/User';
import { useFetchAllUsers } from '../../../resources/pages/UserPage/api/useFetchAllUsers';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
}

const UserTable = () => {
  const [globalFilter, setGlobalFilter] = useState('');

  const { isLoading, error, data } = useFetchAllUsers();
  console.log(data);

  // talvez melhor jogar isso num utils
  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank,
    });
    return itemRank.passed;
  };

  const columns = useMemo<ColumnDef<IUser, any>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'nvarNome',
        header: 'Nome',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'idnVarUsuario',
        header: 'Usuário',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'idnVarEmpresa',
        header: 'Empresa',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'actions',
        header: 'Ações',
        cell: (info) => (
          <TableActions
            editAction={() => console.log('asdf')}
            deleteAction={() => console.log('123')}
            row={info.row}
          />
        ),
      },
    ],
    []
  );

  const table = useReactTable<IUser>({
    columns,
    data: data ? data : [],
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    enableGlobalFilter: true,
  });

  return (
    <Styled.Container>
      <Styled.InputContainer>
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={(value) => {
            console.log(value);
            setGlobalFilter(String(value));
          }}
          placeholder='Pesquisar'
        />
      </Styled.InputContainer>
      {isLoading && <Skeleton width={600} count={5} />}
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
        {!isLoading && (
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
        )}
      </Styled.Table>
    </Styled.Container>
  );
};

export default UserTable;