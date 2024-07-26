import { IFilm } from '../types/interfaces/Films';
import { IPerson } from '../types/interfaces/Person';
import { IStarship, IStarshipsData } from '../types/interfaces/Starships';

export const getPersonStarships = (person: IPerson, films: IFilm[], starships: IStarship[]) => {
    const personStarshipsDataArr: IStarshipsData[] = [];

    films.forEach((film, index) => {
        const uniqueStarships = film.starships.filter((starship) => person.starships.includes(starship));
        const personStarships = starships.filter(({ id }) => uniqueStarships.includes(id));

        personStarshipsDataArr.push({ filmPos: index, filmTitle: film.title, starships: personStarships });
    });

    return personStarshipsDataArr;
};
