import type { User } from '../../model/User';
import { httpClient } from '../client';

export const getUsers = async () => {
  const response = await httpClient.get<User[]>('/data/users');
  return response.data;
};

export const createUser = async (data: Omit<User, 'id'>): Promise<User> => {
  const response = await httpClient.post('/data/users', { ...data });
  return response.data;
};
