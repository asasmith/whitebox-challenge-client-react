import React from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import MobileMenu from './MobileMenu';

const Header = () => (
  <header className="header1">
    <HeaderDesktop />
    <HeaderMobile />
    <MobileMenu />
  </header>
);
export default Header;
