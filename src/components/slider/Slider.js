import React from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

const Slider = () => (
  <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect />
);

export default Slider;
