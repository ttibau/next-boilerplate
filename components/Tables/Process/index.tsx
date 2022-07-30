import {
  ColumnDef,
  createColumnHelper,
  useReactTable,
} from '@tanstack/react-table';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import * as Styled from './styles';

const ProcessTable = () => {
  const [process, setProcess] = useState([]);

  const fetchProcess = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((error) => console.log(error));

    if (response) {
      console.log(response.data);
      setProcess(response.data);
    }
  };

  useEffect(() => {
    fetchProcess();
  }, []);

  type Process = {
    id: number;
    name: string;
    description: string;
  };

  const columnHelper = createColumnHelper<Process>();

  const defaultColumns: ColumnDef<Process>[] = [columnHelper.gro];

  const tableInstance = useReactTable({ columns, data });

  return <div>table</div>;
};

export default ProcessTable;
