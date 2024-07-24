import { AnchorHTMLAttributes, forwardRef } from 'react';
import { EnumBtnTypes } from '@/src/types/enums/BtnTypes';
import Link from 'next/link';
import cn from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    className?: string;
    btnType?: string;
}

const BtnLink: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, btnType = EnumBtnTypes.default, className = '', ...props }, ref) => (
        <Link
            ref={ref}
            {...props}
            href={href}
            className={cn(
                `flex items-center justify-center w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'bg-black text-white': btnType === EnumBtnTypes.default,
                    'border-2 border-black text-black': btnType === EnumBtnTypes.outline,
                }
            )}
        />
    )
);

BtnLink.displayName = 'BtnLink';
export default BtnLink;
