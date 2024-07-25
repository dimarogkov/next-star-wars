'use client';
import { useQuery } from '@tanstack/react-query';
import { getPeople } from '@/src/services/people';
import PeopleList from '@/src/components/elements/PeopleList/PeopleList';
import Pagination from '@/src/components/elements/Pagination/Pagination';
import { Loader } from '@/src/components/ui';

const HomePage = () => {
    const { data, isLoading } = useQuery({
        queryFn: () => getPeople(),
        select: (data) => data.data,
        queryKey: ['people'],
    });

    return (
        <section className='relative w-full'>
            {isLoading && <Loader />}

            {data && (
                <>
                    <Pagination peopleCount={data.count} getPeople={getPeople} />
                    <PeopleList people={data.results} />
                </>
            )}
        </section>
    );
};

export default HomePage;
