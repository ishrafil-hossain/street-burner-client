import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <CustomerReview></CustomerReview>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;
