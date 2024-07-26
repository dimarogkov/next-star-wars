import axios from 'axios';
import { API_URL } from '.';
import { IPeople } from '../types/interfaces/People';
import { IPerson } from '../types/interfaces/Person';

export const getPeople = (currentPage: number) => {
    return axios.get<IPeople>(`${API_URL}/people/?page=${currentPage}`);
};

export const getPerson = (personId: number) => {
    return axios.get<IPerson>(`${API_URL}/people/${personId}`);
};
