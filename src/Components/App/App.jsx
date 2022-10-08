import './App.css';
import Header from '../Common/Header/Header';
import SignInDescribe from '../Assoc/SignInDescribe/SignInDescribe';
import SignUpDescribe from '../Assoc/SignUpDescribe/SignUpDescribe';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <SignInDescribe />
      <SignUpDescribe />
    </React.Fragment>
  );
}

export default App;
