'use client';
import { useQuery } from '@tanstack/react-query';
import { usePagination } from '@/src/store/pagination';
import { getPeople } from '@/src/services/people';

import PeopleList from '@/src/components/elements/PeopleList/PeopleList';
import Pagination from '@/src/components/elements/Pagination/Pagination';
import { Loader } from '@/src/components/ui';

const HomePage = () => {
    const { currentPage } = usePagination((state) => state);

    const { data, isLoading } = useQuery({
        queryFn: () => getPeople(currentPage),
        select: (data) => data.data,
        queryKey: ['people', currentPage],
    });

    return (
        <section className='relative w-full'>
            {isLoading && <Loader />}

            {data && (
                <>
                    <PeopleList people={data.results} />
                    <Pagination peopleCount={data.count} />
                </>
            )}
        </section>
    );
};

export default HomePage;
