'use client';
import { getPeople } from '@/src/services/people';
import { useQuery } from '@tanstack/react-query';
import Person from '../Person/Person';
import { Loader } from '../../ui';

const PeopleList = () => {
    const { data, isLoading } = useQuery({
        queryFn: () => getPeople(),
        select: (data) => data.data,
        queryKey: ['people'],
    });

    return (
        <div className='relative w-full'>
            {isLoading && <Loader />}

            {data?.results.length && (
                <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5 w-full'>
                    {data.results.map((person) => (
                        <Person person={person} key={person.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PeopleList;
