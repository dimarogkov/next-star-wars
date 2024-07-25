import axios from 'axios';
import { IPeople } from '../types/interfaces/People';

const API_URL = 'https://sw-api.starnavi.io';

export const getPeople = (currentPage: number) => {
    return axios.get<IPeople>(`${API_URL}/people/?page=${currentPage}`);
};
