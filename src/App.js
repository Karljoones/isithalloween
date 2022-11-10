import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Privacy from './Pages/Privacy';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
