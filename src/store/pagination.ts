import { create } from 'zustand';
import { IPaginationStore } from '../types/interfaces/PaginationStore';

export const usePagination = create<IPaginationStore>((set) => ({
    currentPage: 1,
    startValue: 1,
    endValue: 5,
    setCurrentPage: (page) => set({ currentPage: page }),
    setStartValue: (value) => set({ startValue: value }),
    setEndValue: (value) => set({ endValue: value }),
}));
