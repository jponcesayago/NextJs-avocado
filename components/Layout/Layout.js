import React from 'react';
import { Container } from 'semantic-ui-react'

import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <Container as="main" text>
                {children}
            </Container>
           
            <Footer/>
        </>
    );
};

export default Layout;