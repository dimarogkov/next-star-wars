import { IFilm } from '../types/interfaces/Films';
import { IPerson } from '../types/interfaces/Person';

export const getNodes = (person: IPerson, films: IFilm[]) => {
    const personNode = { id: person.name, position: { x: 25, y: 25 }, data: { label: person.name } };
    const filmsNodes = films.map((film, index) => {
        return {
            id: film.title,
            position: { x: index * 175 + 25, y: 120 },
            data: { label: film.title },
        };
    });

    return [personNode, ...filmsNodes];
};
