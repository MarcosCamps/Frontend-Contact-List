import axios from 'axios';
import { IUser } from 'interfaces/IUser';
import { API_URL } from 'utils';

export const createUser = async (user: IUser) => {
  const { data } = await axios.post(`${API_URL}/user`, user);
  return data;
};

export const loginUser = async (user: IUser) => {
  const { data } = await axios.post(`${API_URL}/user/login`, user);
  return data;
};
