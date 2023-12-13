import { FC } from 'react';
import { Main } from './layout/Main.tsx';
import { Header } from './layout/Header.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => {
    return (
        <>
            <Header />
            <Main />
            <ToastContainer />
        </>
    );
};

export default App;
