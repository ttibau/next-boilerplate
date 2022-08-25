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
import * as Styled from './styles';
import TableActions from '../../TableActions';
import { IUser } from '../../../types/entities/User';
import { useFetchAllUsers } from '../../../resources/pages/UserPage/api/useFetchAllUsers';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDeleteUser } from '../../../resources/pages/UserPage/api/useDeleteUser';
import ErrorMessage from '../../ErrorContent';
import toast from 'react-hot-toast';
import { fuzzyFilter } from '../../../resources/helpers/fuzzyFilter';

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
}

const UserTable = () => {
  const [globalFilter, setGlobalFilter] = useState('');

  const query = useFetchAllUsers();
  const deleteUserMutation = useDeleteUser();

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
            editAction={() => console.log(info.row)}
            deleteAction={() => deleteUserMutation.mutate(info.row.original.id)}
            row={info.row}
          />
        ),
      },
    ],
    []
  );

  const table = useReactTable<IUser>({
    columns,
    data: query.data ? query.data : [],
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

  if (query.isError) {
    toast.error("This didn't work.");
    return <ErrorMessage />;
  }

  return (
    <Styled.Container>
      {query.isLoading && <Skeleton width={600} count={5} />}
      {!query.isLoading && !query.isError && (
        <>
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Styled.TableData>
                  ))}
                </Styled.TableRow>
              ))}
            </tbody>
          </Styled.Table>
        </>
      )}
    </Styled.Container>
  );
};

export default UserTable;
