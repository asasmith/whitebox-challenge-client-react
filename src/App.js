/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductsList from './components/products/ProductsList';

export default class App extends Component {
  render() {
    return (
      <div className="flex-sb flex-col min-h-view-max">
        <Header />
        <ProductsList />
        <Footer />
      </div>
    );
  }
}
