import { IFilm } from '../types/interfaces/Films';
import { INode } from '../types/interfaces/Flow';
import { IPerson } from '../types/interfaces/Person';
import { IStarshipsData } from '../types/interfaces/Starships';

export const getNodes = (person: IPerson, films: IFilm[], personStarships: IStarshipsData[]) => {
    const personNode = { id: person.name, position: { x: 25, y: 25 }, data: { label: `[Hero] ${person.name}` } };

    const filmsNodes = films.map((film, index) => {
        return {
            id: film.title,
            position: { x: index * 175 + 25, y: 120 },
            data: { label: `[Film] ${film.title}` },
        };
    });

    const starshipsNodes: INode[] = [];
    personStarships.forEach((personStarship) => {
        personStarship.starships.forEach((starship, index) => {
            const starshipsNode = {
                id: starship.name,
                position: { x: (personStarship.filmPos + index) * 175 + 25, y: 240 },
                data: { label: `[Starship] ${starship.name}` },
            };

            starshipsNodes.push(starshipsNode);
        });
    });

    return [personNode, ...filmsNodes, ...starshipsNodes];
};
