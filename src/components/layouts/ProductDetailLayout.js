import React, { Component } from 'react';

import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import ProductDetail from '../products/ProductDetail';
import '../../css/main.css';
import '../../css/util.css';
import '../../vendor/bootstrap/css/bootstrap-grid.css';

// something other than a class here
export default class ProductDetailLayout extends Component {
  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <div>
        <Breadcrumbs />
        <ProductDetail id={id} />
      </div>
    );
  }
}
