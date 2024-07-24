import { ButtonHTMLAttributes, forwardRef } from 'react';
import { EnumBtnTypes } from '@/src/types/enums/BtnTypes';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: string;
    className?: string;
}

const Btn: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ btnType = EnumBtnTypes.default, className = '', ...props }, ref) => (
        <button
            ref={ref}
            {...props}
            className={cn(
                `flex items-center justify-center w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'pointer-events-none bg-gray': props.disabled,
                    'bg-black text-white': !props.disabled && btnType === EnumBtnTypes.default,
                    'border-2 border-black text-black': !props.disabled && btnType === EnumBtnTypes.outline,
                }
            )}
        />
    )
);

Btn.displayName = 'Btn';
export default Btn;
