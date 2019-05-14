import React, { Component } from 'react';

import Hero from '../hero/Hero';
import ProductList from '../products/ProductsList';
import SideBar from '../sidebar/SideBar';
import '../../css/main.css';
import '../../css/util.css';
import '../../vendor/bootstrap/css/bootstrap-grid.css';

export default class ProductsLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      products: [],
      displayedProducts: [],
      searchVal: '',
      filters: {
        priceVal: '',
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePriceValChange = this.handlePriceValChange.bind(this);
    this.priceFilter = this.priceFilter.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:1111/products');
      const products = await res.json();
      this.setState({
        products,
        displayedProducts: products,
        searchVal: '',
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleInputChange(e) {
    this.setState({
      searchVal: e.target.value,
    });
  }

  // Todo: add functionality to submit filter on keypress

  handlePriceValChange(e) {
    this.setState(
      {
        filters: {
          priceVal: e.target.value,
        },
      },
      () => {
        this.filter();
      }
    );
  }

  searchFilter(arr) {
    const { searchVal } = this.state;
    const filteredProducts = arr.filter(item => item.name.includes(searchVal));

    return filteredProducts;
  }

  priceFilter(arr) {
    const {
      filters: { priceVal },
    } = this.state;
    const [min, max] = priceVal.split('-');

    const filteredProducts = arr.filter(
      product =>
        parseFloat(product.price) > min && parseFloat(product.price) < max
    );

    return filteredProducts;
  }

  filter() {
    const {
      products,
      searchVal,
      filters: { priceVal },
    } = this.state;

    let filteredProducts = products;

    if (searchVal !== '') {
      filteredProducts = this.searchFilter(filteredProducts);
    }

    if (priceVal.length) {
      filteredProducts = this.priceFilter(filteredProducts);
    }

    this.setState({
      displayedProducts: filteredProducts,
    });
  }

  render() {
    const {
      displayedProducts,
      searchVal,
      filters: { priceVal },
    } = this.state;
    return (
      <div>
        <Hero />
        <section className="bgwhite p-t-55 p-b-65">
          <div className="container">
            <div className="row">
              <SideBar
                searchVal={searchVal}
                handleInputChange={this.handleInputChange}
                filter={this.filter}
              />
              <ProductList
                products={displayedProducts}
                priceVal={priceVal}
                handlePriceValChange={this.handlePriceValChange}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
