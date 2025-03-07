import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../services/userService';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['users'],
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
