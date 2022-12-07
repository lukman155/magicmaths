import React from 'react';
import Calculator from './Calculator';
import Header from './Header';

const Calpage = () => (
  <>
    <Header />
    <div className="content">
      <p>Let&apos;s do some math!</p>
      <Calculator />
    </div>
  </>
);

export default Calpage;
