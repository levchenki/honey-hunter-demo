import { FC } from 'react';
import { Main } from './layout/Main.tsx';
import { Header } from './layout/Header.tsx';

const App: FC = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    );
};

export default App;
