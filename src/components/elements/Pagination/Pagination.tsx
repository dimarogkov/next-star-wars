import { useMemo } from 'react';
import { usePagination } from '@/src/store/pagination';
import { getNumbers } from '@/src/helpers/getNumbers';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
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
        <ul className='flex justify-center gap-2'>
            <li
                className={cn(
                    'flex items-center justify-center w-8 h-8 rounded border border-gray transition-colors duration-300 hover:border-black hover:text-black',
                    {
                        'opacity-35 pointer-events-none': currentPage === 1,
                        'cursor-pointer': currentPage !== 1,
                    }
                )}
                onClick={getPreviousPage}
            >
                <LuChevronLeft />
            </li>

            {pageNumbers.map((pageNumber) => (
                <li
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={cn(
                        'flex items-center justify-center w-8 h-8 rounded border transition-colors duration-300 hover:border-black hover:text-black',
                        {
                            'border-black bg-black text-white pointer-events-none': pageNumber === currentPage,
                            'border-gray cursor-pointer': pageNumber !== currentPage,
                        }
                    )}
                >
                    {pageNumber}
                </li>
            ))}

            <li
                className={cn(
                    'flex items-center justify-center w-8 h-8 rounded border border-gray transition-colors duration-300 hover:border-black hover:text-black',
                    {
                        'opacity-35 pointer-events-none': currentPage === pageCount,
                        'cursor-pointer': currentPage !== pageCount,
                    }
                )}
                onClick={getNextPage}
            >
                <LuChevronRight />
            </li>
        </ul>
    );
};

export default Pagination;
