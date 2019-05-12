/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import './bootstrap-grid.css';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      products: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:1111/products');
      const products = await res.json();
      this.setState({
        products,
      });
      console.log(this.state.products);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
        <FilterBar />
        <div className="row">
          {this.state.products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}
