import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo.png';
import login from '../../images/icons/icon-header-01.png';
import cart from '../../images/icons/icon-header-02.png';
import cart1 from '../../images/item-cart-01.jpg';
import cart2 from '../../images/item-cart-02.jpg';
import cart3 from '../../images/item-cart-03.jpg';

const HeaderDesktop = () => (
  <div className="container-menu-header">
    <div className="topbar">
      <div className="topbar-social">
        <a href="#" className="topbar-social-item fa fa-facebook" />
        <a href="#" className="topbar-social-item fa fa-instagram" />
        <a href="#" className="topbar-social-item fa fa-pinterest-p" />
        <a href="#" className="topbar-social-item fa fa-snapchat-ghost" />
        <a href="#" className="topbar-social-item fa fa-youtube-play" />
      </div>

      <span className="topbar-child1">
        Free shipping for standard order over $100
      </span>

      <div className="topbar-child2">
        <span className="topbar-email">fashe@example.com</span>

        <div className="topbar-language rs1-select2">
          <select className="selection-1" name="time">
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>

    <div className="wrap_header">
      {/* <!-- Logo --> */}
      <Link to="/products">
        <div className="logo">
          <img src={logo} alt="IMG-LOGO" />
        </div>
      </Link>
      {/* <!-- Menu --> */}
      <div className="wrap_menu">
        <nav className="menu">
          <ul className="main_menu">
            <li>
              <a href="index.html">Home</a>
              <ul className="sub_menu">
                <li>
                  <a href="index.html">Homepage V1</a>
                </li>
                <li>
                  <a href="home-02.html">Homepage V2</a>
                </li>
                <li>
                  <a href="home-03.html">Homepage V3</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="product.html">Shop</a>
            </li>

            <li className="sale-noti">
              <a href="product.html">Sale</a>
            </li>

            <li>
              <a href="cart.html">Features</a>
            </li>

            <li>
              <a href="blog.html">Blog</a>
            </li>

            <li>
              <a href="about.html">About</a>
            </li>

            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* <!-- Header Icon --> */}
      <div className="header-icons">
        <a href="#" className="header-wrapicon1 dis-block">
          <img src={login} className="header-icon1" alt="ICON" />
        </a>

        <span className="linedivide1" />

        <div className="header-wrapicon2">
          <img
            src={cart}
            className="header-icon1 js-show-header-dropdown"
            alt="ICON"
          />
          <span className="header-icons-noti">0</span>

          {/* <!-- Header cart noti --> */}
          <div className="header-cart header-dropdown">
            <ul className="header-cart-wrapitem">
              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img src={cart1} alt="IMG" />
                </div>

                <div className="header-cart-item-txt">
                  <a href="#" className="header-cart-item-name">
                    White Shirt With Pleat Detail Back
                  </a>

                  <span className="header-cart-item-info">1 x $19.00</span>
                </div>
              </li>

              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img src={cart2} alt="IMG" />
                </div>

                <div className="header-cart-item-txt">
                  <a href="#" className="header-cart-item-name">
                    Converse All Star Hi Black Canvas
                  </a>

                  <span className="header-cart-item-info">1 x $39.00</span>
                </div>
              </li>

              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img src={cart3} alt="IMG" />
                </div>

                <div className="header-cart-item-txt">
                  <a href="#" className="header-cart-item-name">
                    Nixon Porter Leather Watch In Tan
                  </a>

                  <span className="header-cart-item-info">1 x $17.00</span>
                </div>
              </li>
            </ul>

            <div className="header-cart-total">Total: $75.00</div>

            <div className="header-cart-buttons">
              <div className="header-cart-wrapbtn">
                {/* <!-- Button --> */}
                <a
                  href="cart.html"
                  className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
                >
                  View Cart
                </a>
              </div>

              <div className="header-cart-wrapbtn">
                {/* <!-- Button --> */}
                <a
                  href="#"
                  className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderDesktop;
