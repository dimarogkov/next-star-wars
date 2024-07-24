import axios from 'axios';

const API_URL = 'https://mate.academy/students-api';

export const getTodos = () => {
    return axios.get<[]>(`${API_URL}/todos`);
};
