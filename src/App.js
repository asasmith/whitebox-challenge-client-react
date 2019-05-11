import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductCard from './components/products/ProductCard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getProducts = this.getProducts.bind(this)
  }

  componentDidMount() {
    console.log(`component mounted`);
    this.getProducts();
  }

  getProducts() {
    console.log('get products')
    const url = 'http://localhost:1111/products'

    fetch(url).then(
      function(response) {
        const res = response.json();
      }.bind(this)
    );
  }

  render() {
    return (
      <div className="flex-sb flex-col min-h-view-max">
        <Header />
        <ProductCard />
        <Footer />
      </div>
    );
  }
}
