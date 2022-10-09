import './App.css';
import Header from '../Common/Header/Header';
import React from 'react';
import AppRoutes from '../../Routes/AppRoutes';

function App() {
  return (
    <React.Fragment>
      <Header />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
