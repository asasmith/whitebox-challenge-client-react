/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import ProductsLayout from './components/layouts/ProductsLayout';

export default class App extends Component {
  render() {
    return (
      <div className="flex-sb flex-col min-h-view-max">
        <Router>
          <Header />
          <Hero />
          <Switch>
            <Route exact path="/products" component={ProductsLayout} />
            <Route exact path="/:id" component={Test} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

const Test = ({ match }) => <h1>{match.params.id}</h1>;
