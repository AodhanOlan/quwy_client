import * as React from 'react';
import MainLayout from "../layouts/MainLayout";
import TopList from "../components/TopList";
import MainHeader from "../components/MainHeader";

const Index: React.FC = () => {
    return (
        <MainLayout>
            <MainHeader/>
            <TopList/>
            <div className="ex" style={{height: '200vh'}}/>
        </MainLayout>
    );
};
export default Index
