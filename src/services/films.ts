import axios from 'axios';
import { API_URL } from '.';
import { IFilms } from '../types/interfaces/Films';

export const getFilms = () => {
    return axios.get<IFilms>(`${API_URL}/films`);
};
