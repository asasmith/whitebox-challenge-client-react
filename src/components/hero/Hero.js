import React from 'react';
import '../../css/main.css';
import '../../css/util.css';
import background from '../../images/heading-pages-02.jpg';

const bgStyle = {
  backgroundImage: `url(${background})`,
};

const Hero = () => (
  <section className="bg-title-page p-t-50 p-b-40 flex-col-c-m" style={bgStyle}>
    <h2 className="l-text2 t-center">Women</h2>
    <p className="m-text13 t-center">New Arrivals Women Collection 2018</p>
  </section>
);

export default Hero;
