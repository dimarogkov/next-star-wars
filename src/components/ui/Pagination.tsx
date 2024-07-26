import { forwardRef, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLUListElement> {
    className?: string;
}

const Pagination: React.FC<Props> = forwardRef<HTMLUListElement, Props>(({ className = '', ...props }, ref) => (
    <ul ref={ref} {...props} className={`flex justify-center gap-2 ${className}`} />
));

Pagination.displayName = 'Pagination';
export default Pagination;
