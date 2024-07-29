import axios from 'axios';
import { API_URL } from '.';
import { IStarship, IStarships } from '../types/interfaces/Starships';

export const getStarships = async () => {
    const dataStarshipsPageOne = axios.get<IStarships>(`${API_URL}/starships`);
    const dataStarshipsPageTwo = axios.get<IStarships>(`${API_URL}/starships?page=2`);
    const dataStarshipsPageThree = axios.get<IStarships>(`${API_URL}/starships?page=3`);
    const dataStarshipsPageFour = axios.get<IStarships>(`${API_URL}/starships?page=4`);

    const results = await Promise.all([
        dataStarshipsPageOne,
        dataStarshipsPageTwo,
        dataStarshipsPageThree,
        dataStarshipsPageFour,
    ]);

    const modifyResults = results.map((data) => data.data.results);
    const allStarships: IStarship[] = [];

    return allStarships.concat(...modifyResults);
};
