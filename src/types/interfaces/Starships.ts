export interface IStarships {
    count: number;
    results: IStarship[];
}

export interface IStarship {
    id: number;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
}
