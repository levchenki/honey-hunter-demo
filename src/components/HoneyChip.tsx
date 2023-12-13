import {Link} from "@nextui-org/react";
import {formatAddress, getAddressLink, isAddress} from "../utils.ts";

interface HoneyChipProps {
    label: string;
    value: string | string[] | Date
}

export const HoneyChip = ({label, value}: HoneyChipProps) => {


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
                    value instanceof Date
                        ? <p className='text-lg'>
                            {value.toLocaleDateString()}
                        </p>
                        : isAddress(value)
                            ? <Link href={getAddressLink(value)}
                                    showAnchorIcon>
                                {formatAddress(value)}
                            </Link>
                            : <p className='text-lg'>{value}</p>
                )}
            </div>
        </div>
    );
};
