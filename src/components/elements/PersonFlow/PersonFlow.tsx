'use client';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getPerson } from '@/src/services/people';
import { getFilms } from '@/src/services/films';
import { getStarships } from '@/src/services/starships';
import { IEdge, INode } from '@/src/types/interfaces/Flow';
import { getFlowData } from '@/src/helpers/getFlowData';

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
        select: (data) => data,
        queryKey: ['starships'],
    });

    useEffect(() => {
        if (person && films && starships) {
            const { flowNodes, flowEdges } = getFlowData(person, films, starships);

            setNodes(flowNodes);
            setEdges(flowEdges);
        }
    }, [films, person, setEdges, setNodes, starships]);

    return (
        <div className='relative w-full'>
            {isLoading && <Loader />}

            {person && (
                <div className={`w-full h-[600px] text-black rounded-lg overflow-hidden border border-gray`}>
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
