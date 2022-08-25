import {
  ColumnDef,
  FilterFn,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import { Process } from '../../../types/entities/Process';
import { DebouncedInput } from '../../DebouncedInput';
import { rankItem } from '@tanstack/match-sorter-utils';
import * as Styled from './styles';
import TableActions from '../../TableActions';

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
}

const ProcessTable = () => {
  const [process, setProcess] = useState<Process[]>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
    setProcess([
      {
        id: 1,
        name: 'Process 1',
        macroProcess: { id: 1, name: 'Macro Process 1' },
        target:
          'Vender o máximo possível de mercadorias generalizadas, no prazo e a contento do cliente',
      },
      {
        id: 2,
        name: 'Folha de pagamento',
        macroProcess: { id: 1, name: 'Macro Process 1' },
        target:
          'Vender o máximo possível de mercadorias, no prazo e a contento do cliente',
      },
      {
        id: 3,
        name: 'Folha de pagam12ento',
        macroProcess: { id: 1, name: 'Macro P2rocess 1' },
        target:
          'Vender o máximo possíve2l de mercadorias, no prazo e a contento do cliente',
      },
    ]);
  }, []);

  // talvez melhor jogar isso num utils
  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank,
    });
    return itemRank.passed;
  };

  const columns = useMemo<ColumnDef<Process, any>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'name',
        header: 'Nome',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'macroProcess',
        header: 'Macro Processo',
        cell: (info) => info.getValue().name,
      },
      {
        accessorKey: 'target',
        header: 'Target',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'actions',
        header: 'Ações',
        cell: (info) => (
          <TableActions
            editAction={() => console.log(info.getValue)}
            deleteAction={() => console.log(info.getValue)}
            row={info.row}
          />
        ),
      },
    ],
    []
  );

  const table = useReactTable<Process>({
    columns,
    data: process,
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

export default ProcessTable;
