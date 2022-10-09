import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInDescribe from '../Components/Assoc/SignInDescribe/SignInDescribe';
import SignUpDescribe from '../Components/Assoc/SignUpDescribe/SignUpDescribe';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>Root one is still under construction</h1>} />
                <Route path='signin' element={<SignInDescribe />} />
                <Route path='signup' element={<SignUpDescribe />} />
                <Route path='*' element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;