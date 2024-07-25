import { IPerson } from '@/src/types/interfaces/Person';
import Person from '../Person/Person';

type Props = {
    people: IPerson[];
};

const PeopleList: React.FC<Props> = ({ people }) => {
    return (
        <>
            {people.length && (
                <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5 w-full mb-8 last:mb-0'>
                    {people.map((person) => (
                        <Person person={person} key={person.id} />
                    ))}
                </div>
            )}
        </>
    );
};

export default PeopleList;
