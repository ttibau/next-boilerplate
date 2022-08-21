import { useQuery } from '@tanstack/react-query';
import { IUser } from '../../../../types/entities/User';
import { CustomError } from '../../../../types/general/CustomError';
import { http } from '../../../../api/http';

const fetchAllUsers = async (): Promise<any> => {
  const { data } = await http.get('http://localhost:8080/api/usuarios');
  return data;
};

export const useFetchAllUsers = () => {
  return useQuery<IUser[], CustomError>(['users'], fetchAllUsers);
};
