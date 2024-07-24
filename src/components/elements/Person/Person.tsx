import { IPerson } from '@/src/types/interfaces/Person';
import { BtnLink, Subtitle, Text } from '../../ui';
import Link from 'next/link';

type Props = {
    person: IPerson;
};

const Person: React.FC<Props> = ({ person }) => {
    const { id, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = person;

    return (
        <div className='relative flex flex-col w-full p-4 xl:p-5 rounded-lg border-2 border-gray'>
            <Subtitle className='mb-4 last:mb-0'>
                <Link href={`/${id}`} className='transition-opacity duration-300 hover:opacity-75'>
                    {name}
                </Link>
            </Subtitle>

            <div className='flex flex-grow flex-col gap-1 w-full mb-4 last:mb-0'>
                <Text>Height - {height}</Text>
                <Text>Mass - {mass}</Text>
                <Text>Hair Color - {hair_color}</Text>
                <Text>Skin Color - {skin_color}</Text>
                <Text>Eye Color - {eye_color}</Text>
                <Text>Birth Year - {birth_year}</Text>
                <Text>Gender - {gender}</Text>
            </div>

            <BtnLink href={`/${id}`}>About Person</BtnLink>
        </div>
    );
};

export default Person;
