import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from '../Components/Common/AppContainer/AppContainer';
import rootRoutes from './rootRoutes.config'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppContainer />}>
                    {
                        rootRoutes.map((route, i) => {
                            return <Route {...route} key={i} />
                        })
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;