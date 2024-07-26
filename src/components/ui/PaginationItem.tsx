import { forwardRef, LiHTMLAttributes } from 'react';
import cn from 'classnames';

interface Props extends LiHTMLAttributes<HTMLLIElement> {
    className?: string;
}

const PaginationItem: React.FC<Props> = forwardRef<HTMLLIElement, Props>(({ className = '', ...props }, ref) => (
    <li
        ref={ref}
        {...props}
        className={cn(
            `flex items-center justify-center w-8 h-8 rounded border transition-all duration-300 hover:border-black hover:text-black ${className}`
        )}
    />
));

PaginationItem.displayName = 'PaginationItem';
export default PaginationItem;
