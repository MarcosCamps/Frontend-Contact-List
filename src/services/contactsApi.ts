import axios from 'axios';
import { API_URL } from 'utils';
import { IAddContacts } from 'interfaces/IAddContacts';

export const getContacts = async (id: number) => {
  const { data } = await axios.get(`${API_URL}/contact/${id}`);
  return data;
};

export const createContact = async (contact: IAddContacts) => {
  const { data } = await axios.post(`${API_URL}/contact`, contact);
  return data;
};
