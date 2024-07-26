import { IEdgesOptions } from '../types/interfaces/Flow';

export const getEdges = (options: IEdgesOptions) => {
    const { source, target } = options;

    return target.map((targetId) => {
        return { id: `${source}-${targetId}`, source, target: targetId };
    });
};
