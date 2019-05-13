import React from 'react';

import Hero from '../hero/Hero';
import ProductList from '../products/ProductsList';
import SideBar from './SideBar';
import '../../css/main.css';
import '../../css/util.css';
import '../../vendor/bootstrap/css/bootstrap-grid.css';

const ProductsLayout = () => (
  <div>
    <Hero />
    <section className="bgwhite p-t-55 p-b-65">
      <div className="container">
        <div className="row">
          <SideBar />
          <ProductList />
        </div>
      </div>
    </section>
  </div>
);

export default ProductsLayout;
