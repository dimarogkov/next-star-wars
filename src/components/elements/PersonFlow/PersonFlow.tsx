'use client';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { IEdge, INode } from '@/src/types/interfaces/Flow';

import { getPerson } from '@/src/services/people';
import { getFilms } from '@/src/services/films';
import { getStarships } from '@/src/services/starships';

import { getEdges } from '@/src/helpers/getEdges';
import { getNodes } from '@/src/helpers/getNodes';
import { getPersonStarships } from '@/src/helpers/getPersonStarships';

import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import { Loader } from '../../ui';
import '@xyflow/react/dist/style.css';

type Props = {
    personId: number;
};

const PersonFlow: React.FC<Props> = ({ personId }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState<INode>([]);
    const [edges, setEdges] = useEdgesState<IEdge>([]);

    const { data: person, isLoading } = useQuery({
        queryFn: () => getPerson(personId),
        select: (data) => data.data,
        queryKey: ['person', personId],
    });

    const { data: films } = useQuery({
        queryFn: () => getFilms(),
        select: (data) => data.data.results,
        queryKey: ['films'],
    });

    const { data: starships } = useQuery({
        queryFn: () => getStarships(),
        select: (data) => data.data.results,
        queryKey: ['starships'],
    });

    useEffect(() => {
        if (person && films && starships) {
            const personFilms = films.filter(({ id }) => person.films.includes(id));
            const personStarships = getPersonStarships(person, personFilms, starships);
            const modifyNodes = getNodes(person, personFilms, personStarships);

            const personFilmsOptions = { source: person.name, target: films.map(({ title }) => title) };
            const personFilmsEdges = getEdges(personFilmsOptions);

            const firmStarshipsEdges: IEdge[] = [];
            personStarships.forEach((personStarship) => {
                if (personStarship.starships.length === 0) {
                    return null;
                }

                const filmStarshipsOptions = {
                    source: personStarship.filmTitle,
                    target: personStarship.starships.map(({ name }) => name),
                };

                firmStarshipsEdges.push(...getEdges(filmStarshipsOptions));
            });

            setNodes(modifyNodes);
            setEdges([...personFilmsEdges, ...firmStarshipsEdges]);
        }
    }, [films, person, setEdges, setNodes, starships]);

    return (
        <div className='relative w-full'>
            {isLoading && <Loader />}

            {person && (
                <div className={`w-full h-[600px] rounded-lg overflow-hidden border border-gray`}>
                    <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange}>
                        <Controls />
                        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                    </ReactFlow>
                </div>
            )}
        </div>
    );
};

export default PersonFlow;
