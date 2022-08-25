import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IOrganizational } from '../../../types/entities/Organizational';
import { CustomError } from '../../../types/general/CustomError';

// const fetchOrganizational = async (): Promise<any> => {
//   const { data } = await axios.get('/api/organizational');
//   return data;
// }

const fetchOrganizational = (): IOrganizational[] => {
  return [
    {
      id: '1',
      parentId: null,
      label: 'Root',
    },
    {
      id: '2',
      parentId: '1',
      label: 'Child 1',
    },
    {
      id: '3',
      parentId: '1',
      label: 'Child 2',
    },
    {
      id: '4',
      parentId: '2',
      label: 'Grandchild 1',
    },
  ];
};

export const useFetchOrganizational = () => {
  return useQuery<IOrganizational[], CustomError>(
    ['organizational'],
    fetchOrganizational
  );
};
