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
      filteredProducts: [],
      searchVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchFilter = this.handleSearchFilter.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:1111/products');
      const products = await res.json();
      this.setState({
        products,
        filteredProducts: products,
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

  handleSearchFilter() {
    const { searchVal } = this.state;
    const { products } = this.state;

    if (searchVal !== '') {
      const filteredProducts = products.filter(item =>
        item.name.includes(searchVal)
      );

      this.setState({
        filteredProducts,
        searchVal: '',
      });
    } else {
      this.setState({
        filteredProducts: products,
      });
    }
  }

  render() {
    const { filteredProducts, searchVal } = this.state;
    return (
      <div>
        <Hero />
        <section className="bgwhite p-t-55 p-b-65">
          <div className="container">
            <div className="row">
              <SideBar
                searchVal={searchVal}
                handleInputChange={this.handleInputChange}
                handleSearchFilter={this.handleSearchFilter}
              />
              <ProductList products={filteredProducts} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
