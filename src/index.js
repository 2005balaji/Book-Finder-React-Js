import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main/Main';
import Form from './components/form/form';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      
      {/* <Route path='/' element={<Navbar />} /> */}
      <Route path="/" element={<Main />}/>
      <Route path="/form" element={<Form />} />
      <Route path="/about" element={<About />}/>
      

    </Routes>
    {/* <Form/> */}
  </BrowserRouter>
);

