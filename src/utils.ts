export const isUrl = (value: string) => {
    try {
        new URL(value);
        return true;
    } catch (_) {
        return false;
    }
}

export const isAddress = (value: string ) => {
    return /^0x[a-fA-F0-9]{40}$/.test(value);
}

export const formatAddress = (address: string) => {
    return address.slice(0, 6) + '...' + address.slice(-4);
}


// todo get network
export const getAddressLink = (address: string) => {
    return `https://sepolia.etherscan.io/address/${address}`;
}