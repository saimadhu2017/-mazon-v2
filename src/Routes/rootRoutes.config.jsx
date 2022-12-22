import SignInDescribe from '../Components/Assoc/SignInDescribe/SignInDescribe';
import SignUpDescribe from '../Components/Assoc/SignUpDescribe/SignUpDescribe';

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
        path: '*',
        element: <h1>404</h1>
    }
]

export default rootRoutes;