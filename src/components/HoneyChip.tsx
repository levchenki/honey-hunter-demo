interface HoneyChipProps {
    label: string;
    value: string | string[] | Date;
}

export const HoneyChip = ({ label, value }: HoneyChipProps) => {
    return (
        <div>
            <div className='flex flex-col px-2 py-1 rounded-2xl'>
                <p className='text-sm font-bold text-yellow-600'>{label}</p>
                {Array.isArray(value) ? (
                    <p className='text-lg'>
                        {value.map((item, index) => {
                            return <p key={index}>{item}</p>;
                        })}
                    </p>
                ) : (
                    <p className='text-lg'>{value instanceof Date ? value.toLocaleDateString() : value}</p>
                )}
            </div>
        </div>
    );
};
