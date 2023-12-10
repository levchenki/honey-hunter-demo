interface HoneyChipProps {
    label: string
    value: string | string[]
}

export const HoneyChip = ({label, value}: HoneyChipProps) => {


    return <div>
        <div className='flex flex-col'>
            <p className='text-sm font-bold'>{label}</p>
            {
                Array.isArray(value)
                    ? <p className='text-lg'>
                        {value.map((item, index) => {
                            return <p key={index}>{item}</p>
                        })}
                    </p>
                    : <p className='text-lg'>{value}</p>
            }
        </div>
    </div>
}