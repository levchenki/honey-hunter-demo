import {FC} from 'react';
import {Button, Image} from '@nextui-org/react';
import {HoneyChip} from '../components/HoneyChip.tsx';
import {toast} from 'react-toastify';

// todo check isConnected account
export const Main: FC = () => {
    const addYears = (date: Date, years: number) => {
        const copy = new Date(date);
        copy.setFullYear(copy.getFullYear() + years);
        return copy;
    };

    return (
        <>
            <div className='flex flex-col sm:flex-row  sm:mx-20 sm:my-10'>
                <Image src='https://i.pinimg.com/736x/19/17/10/1917108b31acf4ce0359f9abbb82414b.jpg'/>
                <div className='flex flex-col m-5 gap-5'>
                    <h2 className='text-2xl text-center'>Orange Honey</h2>
                    <HoneyChip label='Вид мёда:' value='Акациевый мёд'/>
                    <HoneyChip label='Объём:' value='250 g.'/>
                    <HoneyChip label='Состав:' value={['Акация', 'Липа']}/>
                    <HoneyChip label='География:' value='Алтайский край'/>
                    <HoneyChip label='Произведён:' value={new Date()}/>
                    <HoneyChip label='Годен до:' value={addYears(new Date(), 5)}/>
                    <HoneyChip label='Hash:'
                               value={'0x65DFadcab8962C3563cc110203a720183B696665'}/>
                    <Button
                        variant='flat'
                        color='warning'
                        onClick={() => toast.success('100 HNHN has been added to your wallet')}
                    >
                        Get HoneyCoins
                    </Button>
                </div>
            </div>
        </>
    );
};
