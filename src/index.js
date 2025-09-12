import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/Home2/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import signup from "./landing_page/signup/signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

import PageNotFound from "./landing_page/PageNotFound";
import Navbar from "./landing_page/Navbar";
import Footer from './landing_page/Footer';

import {Link} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          {/* <Route path="/signup" element={<signup/>}></Route> */}
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/products" element={<ProductsPage/>}></Route>
          <Route path="/pricing" element={<PricingPage/>}></Route>
          <Route path="/support" element={<SupportPage/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

