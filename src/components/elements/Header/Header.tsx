import Link from 'next/link';
import { GiDeathStar } from 'react-icons/gi';
import { Text } from '../../ui';

const Header = () => {
    return (
        <header className='relative z-20 w-full h-14 sm:h-16 shadow-md'>
            <div className='flex items-center w-full h-full max-w-screen-2xl px-5 m-auto'>
                <Link href='/' className='flex items-center gap-3 transition-opacity duration-300 hover:opacity-75'>
                    <GiDeathStar className='w-10 h-10 text-black' />
                    <Text>Next Star Wars</Text>
                </Link>
            </div>
        </header>
    );
};

export default Header;
