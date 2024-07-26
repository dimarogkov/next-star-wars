export interface IFilms {
    count: number;
    results: IFilm[];
}

export interface IFilm {
    id: number;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: number[];
    starships: number[];
}
