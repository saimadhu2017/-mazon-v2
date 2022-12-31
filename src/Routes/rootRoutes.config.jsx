import SignInDescribe from '../Components/Assoc/SignInDescribe/SignInDescribe';
import SignUpDescribe from '../Components/Assoc/SignUpDescribe/SignUpDescribe';
import ProtuctedComponent from '../Components/Stories/Test/Test';

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
        element: <ProtuctedComponent Component={SignUpDescribe}/>
    },
    {
        path: '*',
        element: <h1>404</h1>
    }
]

export default rootRoutes;