import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Calpage from './components/Calpage';
import Quotepage from './components/Quotepage';

const App = memo(() => (
  <Routes>
    <Route path="/quotepage" element={<Quotepage />} />
    <Route path="/calpage" element={<Calpage />} />
    <Route path="/" element={<Homepage />} />
  </Routes>
));
App.displayName = 'App';

export default App;
