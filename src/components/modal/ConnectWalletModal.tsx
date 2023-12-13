import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from '@nextui-org/react';
import CoinbaseIcon from "../../icons/CoinbaseIcon.tsx";
import TrustWalletIcon from "../../icons/TrustWalletIcon.tsx";
import MetamaskIcon from "../../icons/MetamaskIcon.tsx";
import WalletConnectIcon from "../../icons/WalletConnectIcon.tsx";

interface ConnectWalletModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
}

export const ConnectWalletModal = ({isOpen, onOpenChange}: ConnectWalletModalProps) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader>Connect wallet</ModalHeader>
                <ModalBody>
                    <Button variant='light'
                            color='warning'
                            className='font-medium'>
                        <MetamaskIcon/> MetaMask
                    </Button>
                    <Button variant='light'
                            color='primary'
                            className='font-medium'>
                        <CoinbaseIcon/> Coinbase Wallet
                    </Button>
                    <Button variant='light'
                            color='primary'
                            className='font-medium'>
                        <WalletConnectIcon/> WalletConnect
                    </Button>
                    <Button variant='light'
                            color='primary'
                            className='font-medium'>
                        <TrustWalletIcon/> Trust Wallet
                    </Button>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onOpenChange} color='danger'>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
