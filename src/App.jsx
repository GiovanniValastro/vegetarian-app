import React from 'react';
import './App.module.scss';
import { ScrollToTop }  from './components/ScrollToTop'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Information } from './pages/Information'
import { Search } from './pages/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {

  return (
    <Router>
      <>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/recipe/:id' element={<Information />} />
          <Route path='/search/:recipe' element={<Search />} />
        </Routes>
      </>
    </Router> 
  ); 
}

