import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInDescribe from '../Components/Assoc/SignInDescribe/SignInDescribe';
import SignUpDescribe from '../Components/Assoc/SignUpDescribe/SignUpDescribe';
import AppContainer from '../Components/Common/AppContainer/AppContainer';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppContainer />}>
                    <Route path='signin' element={<SignInDescribe />} />
                    <Route path='signup' element={<SignUpDescribe />} />
                    <Route path='*' element={<h1>404</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;