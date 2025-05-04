import React from 'react';
import Header from './template/Header';
import Footer from './template/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hom from './pages/Hom';
import Cont from './pages/Cont';
import Abo from './pages/Abo';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Error from './pages/Error';
import Signup from './pages/Signup';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="/about" element={<Abo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Cont />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
