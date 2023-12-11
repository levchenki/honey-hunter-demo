import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';

interface ConnectWalletModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
}

export const ConnectWalletModal = ({ isOpen, onOpenChange }: ConnectWalletModalProps) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader>Connect wallet</ModalHeader>
                <ModalBody>
                    <Button variant='light' className='font-medium'>
                        MetaMask
                    </Button>
                    <Button variant='light' className='font-medium'>
                        Coinbase Wallet
                    </Button>
                    <Button variant='light' className='font-medium'>
                        WalletConnect
                    </Button>
                    <Button variant='light' className='font-medium'>
                        Trust Wallet
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
