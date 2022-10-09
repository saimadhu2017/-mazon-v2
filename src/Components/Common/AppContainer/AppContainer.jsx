import './AppContainer.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function AppContainer() {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
}

export default AppContainer;
