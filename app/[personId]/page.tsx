import { Metadata } from 'next';
import { getPerson } from '@/src/services/people';
import { BtnLink, Title } from '@/src/components/ui';
import PersonFlow from '@/src/components/elements/PersonFlow/PersonFlow';

type Props = {
    params: {
        personId: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const data = await getPerson(+params.personId);

    return {
        title: data.data.name,
    };
};

const PersonPage: React.FC<Props> = ({ params }) => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-8 last:mb-0'>
                <BtnLink href='/' className='mb-5 last:mb-0'>
                    Back
                </BtnLink>
                <Title>Person Details</Title>
            </div>

            <PersonFlow personId={+params.personId} />
        </section>
    );
};

export default PersonPage;
