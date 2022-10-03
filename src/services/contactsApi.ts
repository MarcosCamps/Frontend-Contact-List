import axios from 'axios';
import { API_URL } from 'utils';
import { IAddContacts } from 'interfaces/IAddContacts';
import { IContacts } from 'interfaces/IContacts';

export const getContacts = async (id: number) => {
  const { data } = await axios.get(`${API_URL}/contact/${id}`);
  return data;
};

export const createContact = async (contact: IAddContacts) => {
  const { data } = await axios.post(`${API_URL}/contact`, contact);
  return data;
};

export const updateContact = async (contact: IContacts) => {
  const { data } = await axios.put(`${API_URL}/contact/${contact.id}`, contact);
  return data;
};

export const deleteContact = async (id: number) => {
  const { data } = await axios.delete(`${API_URL}/contact/${id}`);
  return data;
};
