import { EnumBtnTypes } from '@/src/types/enums/BtnTypes';
import { BtnLink, Subtitle, Text, Title } from '@/src/components/ui';

const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <Title className='mb-2 last:mb-0'>Home Page</Title>
                <Subtitle className='mb-2 last:mb-0'>This is Home Page.</Subtitle>
                <Text className='mb-5 last:mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione et quae vel cum ut, atque
                    dolor excepturi culpa veniam odit est facere fugiat corrupti officiis. Eveniet magnam quos a.
                </Text>

                <div className='flex flex-wrap gap-2 w-full'>
                    <BtnLink href='/'>Todos Page</BtnLink>
                    <BtnLink href='/' btnType={EnumBtnTypes.outline}>
                        Form Page
                    </BtnLink>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
