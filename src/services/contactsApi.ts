import axios from 'axios';
import { API_URL } from 'utils';

export const getContacts = async () => {
  const { data } = await axios.get(`${API_URL}/contacts`);
  return data;
};
