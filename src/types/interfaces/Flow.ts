export interface INode {
    id: string;
    position: {
        x: number;
        y: number;
    };
    data: {
        label: string;
    };
}

export interface IEdge {
    id: string;
    source: string;
    target: string;
}

export interface IEdgesOptions {
    source: string;
    target: string[];
}
