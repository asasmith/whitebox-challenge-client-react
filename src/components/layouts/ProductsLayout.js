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
      priceRange: '',
      priceVal: '',
      sortVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:1111/products');
      const products = await res.json();
      this.setState(
        {
          products,
          displayedProducts: products,
          searchVal: '',
        },
        () => {
          this.getMaxPrice();
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  getMaxPrice() {
    const { products } = this.state;
    const { price: maxVal } = products.reduce((max, item) =>
      parseFloat(item.price) > max ? item.price : max
    );

    this.setState({
      maxVal,
    });
  }

  handleInputChange(event) {
    const {
      target,
      target: { name },
    } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.filter();
      }
    );
  }

  // Todo: add functionality to submit filter on keypress

  searchFilter(arr) {
    const { searchVal } = this.state;
    const filteredProducts = arr.filter(item =>
      item.name.toLowerCase().includes(searchVal.toLowerCase())
    );

    return filteredProducts;
  }

  priceFilter(arr) {
    const { priceVal } = this.state;
    const [min, max] = priceVal.split('-');

    const filteredProducts = arr.filter(
      item => parseFloat(item.price) > min && parseFloat(item.price) < max
    );

    return filteredProducts;
  }

  priceRange(arr) {
    const { priceRange } = this.state;

    const filteredProducts = arr.filter(
      item => parseFloat(item.price) < priceRange
    );

    return filteredProducts;
  }

  sortByPrice(arr) {
    const { sortVal } = this.state;
    const sortedProducts = arr;

    if (sortVal === 'low') {
      return sortedProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    }

    if (sortVal === 'high') {
      return sortedProducts.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }

    return sortedProducts;
  }

  filter() {
    const { products, searchVal, priceRange, priceVal, sortVal } = this.state;

    let filteredProducts = products;

    if (searchVal !== '') {
      filteredProducts = this.searchFilter(filteredProducts);
    }

    if (priceVal.length) {
      filteredProducts = this.priceFilter(filteredProducts);
    }

    if (priceRange) {
      filteredProducts = this.priceRange(filteredProducts);
    }

    if (sortVal !== '') {
      filteredProducts = this.sortByPrice(filteredProducts);
    }

    this.setState({
      displayedProducts: filteredProducts,
    });
  }

  render() {
    const {
      displayedProducts,
      searchVal,
      priceVal,
      maxVal,
      priceRange,
      sortVal,
    } = this.state;
    return (
      <div>
        <Hero />
        <section className="bgwhite p-t-55 p-b-65">
          <div className="container">
            <div className="row">
              <SideBar
                searchVal={searchVal}
                maxVal={maxVal}
                priceRange={priceRange}
                handleInputChange={this.handleInputChange}
                filter={this.filter}
              />
              <ProductList
                products={displayedProducts}
                priceVal={priceVal}
                sortVal={sortVal}
                handleInputChange={this.handleInputChange}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
