import { useState } from 'react';
import SignInDescribe from '../Components/Assoc/SignInDescribe/SignInDescribe';
import SignUpDescribe from '../Components/Assoc/SignUpDescribe/SignUpDescribe';
import ProtuctedComponent from '../Components/Stories/ProtuctedComponent/ProtuctedComponent';

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
        element: <SignInDescribe />
    },
    {
        path: 'signup',
        element: <SignUpDescribe />
    },
    {
        path: 'test',
        element: <ProtuctedComponent Component={TestFunction} />
    },
    {
        path: '*',
        element: <h1>404</h1>
    }
]

export default rootRoutes;