import { IEdgesOptions } from '../types/interfaces/Flow';

export const getEdges = (options: IEdgesOptions) => {
    const { source, target } = options;

    return target.map((filmId) => {
        return { id: `${source}-${filmId}`, source, target: filmId };
    });
};
