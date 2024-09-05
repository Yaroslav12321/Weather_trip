import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { News } from './pages/News';
import { WeatherApp } from "./pages/WeatherApp";
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Header />
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element ={<About/>} />
        <Route path='/News' element ={<News/>} />
        <Route path="/WeatherApp" element={<WeatherApp/>}/>
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
