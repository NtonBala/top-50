import React, {Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const MainLayout = () => (
    <Fragment>
        <Header/>
        <Main/>
        <Footer/>
    </Fragment>
);

export default MainLayout;
