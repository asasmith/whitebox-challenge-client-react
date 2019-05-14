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
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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

  // handlePriceValChange(e) {
  //   this.setState(
  //     {
  //       filters: {
  //         priceVal: e.target.value,
  //       },
  //     },
  //     () => {
  //       this.filter();
  //     }
  //   );
  // }

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
      product =>
        parseFloat(product.price) > min && parseFloat(product.price) < max
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

  filter() {
    const { products, searchVal, priceRange, priceVal } = this.state;

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

    this.setState({
      displayedProducts: filteredProducts,
    });
  }

  render() {
    const { displayedProducts, searchVal, priceVal } = this.state;
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
                handleInputChange={this.handleInputChange}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
