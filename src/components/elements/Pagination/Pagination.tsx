import { useMemo } from 'react';
import { usePagination } from '@/src/store/pagination';
import { getNumbers } from '@/src/helpers/getNumbers';

import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { Pagination as UIPagination, PaginationItem } from '../../ui';
import cn from 'classnames';

type Props = {
    peopleCount: number;
};

const Pagination: React.FC<Props> = ({ peopleCount }) => {
    const { currentPage, startValue, endValue, setCurrentPage, setStartValue, setEndValue } = usePagination(
        (state) => state
    );
    const pageCount = Math.ceil(peopleCount / 10);

    const pageNumbers = useMemo(() => {
        const firstThree = [1, 2, 3];
        const lastThree = [pageCount - 2, pageCount - 1, pageCount];

        switch (true) {
            case firstThree.includes(currentPage):
                setStartValue(1);
                setEndValue(5);
                break;
            case lastThree.includes(currentPage):
                setStartValue(pageCount - 4);
                setEndValue(pageCount);
                break;
            default:
                setStartValue(currentPage - 2);
                setEndValue(currentPage + 2);
        }

        return getNumbers(startValue, endValue);
    }, [currentPage, endValue, pageCount, setEndValue, setStartValue, startValue]);

    const getPreviousPage = () => {
        setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage);
    };

    const getNextPage = () => {
        setCurrentPage(currentPage !== pageCount ? currentPage + 1 : currentPage);
    };

    return (
        <UIPagination>
            <PaginationItem
                onClick={getPreviousPage}
                className={cn({
                    'opacity-35 pointer-events-none': currentPage === 1,
                    'border-gray cursor-pointer': currentPage !== 1,
                })}
            >
                <LuChevronLeft />
            </PaginationItem>

            {pageNumbers.map((pageNumber) => (
                <PaginationItem
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={cn({
                        'border-black bg-black text-white pointer-events-none': pageNumber === currentPage,
                        'border-gray cursor-pointer': pageNumber !== currentPage,
                    })}
                >
                    {pageNumber}
                </PaginationItem>
            ))}

            <PaginationItem
                onClick={getNextPage}
                className={cn({
                    'opacity-35 pointer-events-none': currentPage === pageCount,
                    'border-gray cursor-pointer': currentPage !== pageCount,
                })}
            >
                <LuChevronRight />
            </PaginationItem>
        </UIPagination>
    );
};

export default Pagination;
