import React, { useContext } from 'react';
import Header from '../../user/component/Header/Header';
import Footer from '../../user/component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../../user/container/Home/Home';
import Shop from '../../user/container/Shop/Shop';
import Shop_Detail from '../../user/container/Shop_Detail/Shop_Detail';

import Checkout from '../../user/container/Checkout/Checkout';
import Testimonial from '../../user/container/Testimonial/Testimonial';
import Page from '../../user/container/Page/Page';
import Contact from '../../user/container/Contact/Contact';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import Reviews from '../../user/container/Reviews/Reviews';
import Card from '../../user/container/Card/Card';
import { ThemeContext } from '../../context/ThemeContext';




function UserRoutes(props) {


    const themeContext = useContext(ThemeContext);
    console.log(themeContext);
    return (
        <div className={themeContext.theme}>
           
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Shop" element={<Shop />} />
                    <Route exact path='/Shop/:id' element={<Shop_Detail />} />
                    <Route exact path='/Shop_Detail' element={<Shop_Detail />} />
                    <Route exact path='/Card' element={<Card />} />
                    
                    <Route element={<PrivateRoutes />}>
                    <Route exact path='/chackout' element={<Checkout />} />
                    </Route>
                    
                    <Route exact path='/Testimonial' element={<Testimonial />} />
                    <Route exact path='/Page' element={<Page />} />
                    <Route exact path='/Contact' element={<Contact />} />
                    <Route exact path='/Reviews' element={<Reviews />} />
                    
                </Routes>
                <Footer />
           
        </div>
    );
}

export default UserRoutes;