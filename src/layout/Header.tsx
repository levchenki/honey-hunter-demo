import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react';
import { ConnectWalletModal } from '../components/modal/ConnectWalletModal.tsx';

export const Header = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <header>
                <Navbar className='flex justify-center items-center h-20 bg-gray-800 text-white'>
                    <NavbarBrand>
                        <h2>Honey Hunter</h2>
                    </NavbarBrand>
                    <NavbarContent justify='end'>
                        <NavbarItem>
                            <Button onClick={onOpen} color='primary'>
                                Sign In
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </header>
            <ConnectWalletModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
};
