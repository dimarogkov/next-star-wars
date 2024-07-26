import axios from 'axios';
import { API_URL } from '.';
import { IStarships } from '../types/interfaces/Starships';

export const getStarships = () => {
    return axios.get<IStarships>(`${API_URL}/starships`);
};
