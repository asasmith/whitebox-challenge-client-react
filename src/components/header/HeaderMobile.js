import React from 'react';

const HeaderMobile = () => (
  <div className="wrap_header_mobile">
    <a href="index.html" className="logo-mobile">
      <img src="images/icons/logo.png" alt="IMG-LOGO" />
    </a>

    <div className="btn-show-menu">
      <div className="header-icons-mobile">
        <a href="#" className="header-wrapicon1 dis-block">
          <img
            src="images/icons/icon-header-01.png"
            className="header-icon1"
            alt="ICON"
          />
        </a>

        <span className="linedivide2" />

        <div className="header-wrapicon2">
          <img
            src="images/icons/icon-header-02.png"
            className="header-icon1 js-show-header-dropdown"
            alt="ICON"
          />
          <span className="header-icons-noti">0</span>

          <div className="header-cart header-dropdown">
            <ul className="header-cart-wrapitem">
              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img src="images/item-cart-01.jpg" alt="IMG" />
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
                  <img src="images/item-cart-02.jpg" alt="IMG" />
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
                  <img src="images/item-cart-03.jpg" alt="IMG" />
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
                <a
                  href="cart.html"
                  className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
                >
                  View Cart
                </a>
              </div>

              <div className="header-cart-wrapbtn">
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

      <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </div>
    </div>
  </div>
);

export default HeaderMobile;
