import {FC} from "react";
import {Image} from "@nextui-org/react"
import {HoneyChip} from "../components/HoneyChip.tsx";


export const Main: FC = () => {
    return <div className='flex flex-col sm:flex-row  sm:mx-20 sm:my-10'>
        <Image src='https://i.pinimg.com/736x/19/17/10/1917108b31acf4ce0359f9abbb82414b.jpg'/>
        <div className='flex flex-col m-5 gap-5'>
            <h2 className='text-2xl text-center'>Orange Honey</h2>
            <HoneyChip label='Вид мёда:'
                       value='Акациевый мёд'
            />
            <HoneyChip label='Объём:'
                       value='250 g.'
            />
            <HoneyChip label='Состав:'
                       value={['Акация', 'Липа']}/>
            <HoneyChip label='География:'
                       value='Алтайский край'/>
        </div>
    </div>
}
