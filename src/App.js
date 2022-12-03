import React, { memo } from 'react';
import Calculator from './components/Calculator';

const App = memo(() => (
  <Calculator />
));
App.displayName = 'App';

export default App;
