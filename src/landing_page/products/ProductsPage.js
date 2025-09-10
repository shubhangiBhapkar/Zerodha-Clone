import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer';
function ProductsPage() {
    return ( 
        <>
        <Hero/>
        <Navbar/>
        <LeftSection/>
        <RightSection/>
        <Universe/>
        <Footer/>
        </>
     );
}

export default ProductsPage;