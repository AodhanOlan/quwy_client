import Head from 'next/head';
import * as React from 'react';
import MainNav from '../components/MainNav';

const MainLayout: React.FC = ({children}) => {

    return (
        <>
            <Head>
                <title> Quwy | Manga Reader </title>
            </Head>
            <div className="page">
                <div className="page__content">
                    {children}
                </div>
                <MainNav/>
            </div>
        </>
    );
};
export default MainLayout
