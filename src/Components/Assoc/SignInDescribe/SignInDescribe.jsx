import { useHref } from 'react-router-dom';
import DescribeSignInSignUp from '../../Common/DescribeSignInSignUp/DescribeSignInSignUp';
import SignIn from '../../Stories/SignIn/SignIn';
import './SignInDescribe.css';

function SignInDescribe() {
    const urlPath = useHref();
    return (
        <div className='SignInDescribe'>
            <DescribeSignInSignUp pageName={urlPath.substring(1)} />
            <SignIn />
        </div>
    );
}

export default SignInDescribe;
