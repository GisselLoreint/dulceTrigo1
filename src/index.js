import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home';
import Tortas from './pages/tortas/Tortas';
import Galletas from './pages/galletas/Galletas';
import Postres from './pages/postres/Postres';
import Dietetico from './pages/dietetico/Dietetico';
import Pasabocas from './pages/pasabocas/Pasabocas';
import Especial from './pages/especial/Especial';
import Personalizados from './pages/personalizados/Personalizados';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/tortas' element={<Tortas/>}></Route>
      <Route path='/galletas' element={<Galletas />}></Route>
      <Route path='/postres' element={<Postres />}></Route>
      <Route path='/dietetico' element={<Dietetico/>}></Route>
      <Route path='/pasabocas' element={<Pasabocas/>}></Route>
      <Route path='/especiales' element={<Especial/>}></Route>
      <Route path='/personalizados' element={<Personalizados/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
