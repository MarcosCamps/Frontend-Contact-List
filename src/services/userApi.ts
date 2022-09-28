import axios from 'axios';
import { IUser } from 'interfaces/IUser';
import { API_URL } from 'utils';

export const createUser = (user: IUser) => axios.post(`${API_URL}/user`, user);
