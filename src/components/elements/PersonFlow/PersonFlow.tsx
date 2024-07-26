'use client';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { IEdge, INode } from '@/src/types/interfaces/Flow';
import { getPerson } from '@/src/services/people';
import { getFilms } from '@/src/services/films';
import { getEdges } from '@/src/helpers/getEdges';
import { getNodes } from '@/src/helpers/getNodes';

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

    useEffect(() => {
        if (person && films) {
            const personFilms = films.filter(({ id }) => person.films.includes(id));
            const edgesOptions = { source: person.name, target: films.map(({ title }) => title) };

            const modifyNodes = getNodes(person, personFilms);
            const modifyEdges = getEdges(edgesOptions);

            setNodes(modifyNodes);
            setEdges(modifyEdges);
        }
    }, [films, person, setEdges, setNodes]);

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
