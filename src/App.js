import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import About from './views/About';
import HeadAndTail from './views/HeadAndTail';
import Home from './views/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/head-and-tail" element={<HeadAndTail />} />
          <Route path="/*" element={<div className='App'>
            <h1 className='App-header'>
              404: No Page Found
            </h1>
          </div>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
