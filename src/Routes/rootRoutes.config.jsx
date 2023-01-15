import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import SignInDescribe from '../Components/Assoc/SignInDescribe/SignInDescribe';
import SignUpDescribe from '../Components/Assoc/SignUpDescribe/SignUpDescribe';
import SingnedInNoAccess from '../Components/Common/SingnedInNoAccess/SingnedInNoAccess';
import SingnedInAccess from '../Components/Common/SingnedInAccess/SingnedInAccess';

const TestFunction = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <h1>Test function value is {value}</h1>
            <button onClick={
                () => { setValue(value + 1) }
            }>Click</button>
        </div>
    )
}

const rootRoutes = [
    {
        path: 'signin',
        element: <SingnedInNoAccess Component={SignInDescribe} />
    },
    {
        path: 'signup',
        element: <SingnedInNoAccess Component={SignUpDescribe} />
    },
    {
        path: 'test',
        element: <SingnedInAccess Component={TestFunction} />
    },
    {
        path: '*',
        element: <Navigate to={'/test'}/>
    }
]

export default rootRoutes;