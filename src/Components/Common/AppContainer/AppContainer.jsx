import './AppContainer.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { ToastContainer } from 'react-toastify';

function AppContainer() {
    return (
        <React.Fragment>
            <ToastContainer/>
            <Header />
            <Outlet />
        </React.Fragment>
    );
}

export default AppContainer;
