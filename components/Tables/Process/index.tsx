import {
  createColumnHelper,
  FilterFn,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Process } from '../../../types/entities/Process';
import { DebouncedInput } from '../../DebouncedInput';
import { rankItem } from '@tanstack/match-sorter-utils';
import * as Styled from './styles';

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
          'Vender o máximo possível de mercadorias, no prazo e a contento do cliente',
      },
      {
        id: 2,
        name: 'Folha de pagamento',
        macroProcess: { id: 1, name: 'Macro Process 1' },
        target:
          'Vender o máximo possível de mercadorias, no prazo e a contento do cliente',
      },
    ]);
  }, []);

  // talvez melhor jogar isso num utils
  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    console.log('bati');
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank,
    });
    return itemRank.passed;
  };

  const columnHelper = createColumnHelper<Process>();

  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
    }),
    columnHelper.accessor('name', {
      header: 'Name',
    }),
    columnHelper.accessor('macroProcess', {
      header: 'Macro Process',
      cell: (info) => info.row.original.macroProcess.name,
    }),
  ];

  const table = useReactTable<Process>({
    columns,
    data: process,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    enableGlobalFilter: true,
  });

  return (
    <>
      <DebouncedInput
        value={globalFilter ?? ''}
        onChange={(value) => {
          console.log(value);
          setGlobalFilter(String(value));
        }}
        placeholder='Search all columns...'
      />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};

export default ProcessTable;
