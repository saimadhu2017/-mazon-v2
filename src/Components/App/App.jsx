import './App.css';
import Header from '../Common/Header/Header';
import SignInDescribe from '../Assoc/SignInDescribe/SignInDescribe';
import SignUpDescribe from '../Assoc/SignUpDescribe/SignUpDescribe';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Root one is still under construction</h1>} />
          <Route path='signin' element={<SignInDescribe />} />
          <Route path='signup' element={<SignUpDescribe />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
