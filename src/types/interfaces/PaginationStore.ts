export interface IPaginationStore {
    currentPage: number;
    startValue: number;
    endValue: number;
    setCurrentPage: (page: number) => void;
    setStartValue: (value: number) => void;
    setEndValue: (value: number) => void;
}
