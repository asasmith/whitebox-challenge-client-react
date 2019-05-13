/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductsLayout from './components/layouts/ProductsLayout';
import ProductDetailLayout from './components/layouts/ProductDetailLayout';

import './css/main.css';
import './css/font-awesome/font-awesome.css';

export default class App extends Component {
  render() {
    return (
      <div className="flex-sb flex-col min-h-view-max">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/products" />} />
            <Route exact path="/products" component={ProductsLayout} />
            <Route exact path="/:id" component={ProductDetailLayout} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
