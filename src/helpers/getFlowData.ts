import { IFilm } from '../types/interfaces/Films';
import { IEdge } from '../types/interfaces/Flow';
import { IPerson } from '../types/interfaces/Person';
import { IStarship } from '../types/interfaces/Starships';

import { getEdges } from './getEdges';
import { getNodes } from './getNodes';
import { getPersonStarships } from './getPersonStarships';

export const getFlowData = (person: IPerson, films: IFilm[], starships: IStarship[]) => {
    const personFilms = films.filter(({ id }) => person.films.includes(id));
    const personStarships = getPersonStarships(person, personFilms, starships);
    const nodes = getNodes(person, personFilms, personStarships);

    const personFilmsOptions = { source: person.name, target: films.map(({ title }) => title) };
    const personEdges = getEdges(personFilmsOptions);

    const filmEdges: IEdge[] = [];
    personStarships.forEach((personStarship) => {
        if (personStarship.starships.length === 0) {
            return null;
        }

        const filmStarshipsOptions = {
            source: personStarship.filmTitle,
            target: personStarship.starships.map(({ name }) => name),
        };

        filmEdges.push(...getEdges(filmStarshipsOptions));
    });

    return { flowNodes: nodes, flowEdges: [...personEdges, ...filmEdges] };
};
