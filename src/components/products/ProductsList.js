/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import './bootstrap-grid.css';

const ProductList = ({ products, priceVal, handlePriceValChange }) => (
  <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
    <FilterBar
      products={products}
      priceFilter={priceVal}
      handlePriceValChange={handlePriceValChange}
    />
    <div className="row">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
