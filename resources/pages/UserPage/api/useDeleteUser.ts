import { useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '../../../../api/http';

const deleteUser = async (id: number) => {
  const { data } = await http.delete(`/usuarios/${id}`);
  return data;
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (id: number) => {
      return deleteUser(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users']);
      },
    }
  );
};
