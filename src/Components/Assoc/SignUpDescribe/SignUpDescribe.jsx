import { useHref } from 'react-router-dom';
import DescribeSignInSignUp from '../../Common/DescribeSignInSignUp/DescribeSignInSignUp';
import SignUp from '../../Stories/SignUp/SignUp';
import './SignUpDescribe.css';

function SignUpDescribe() {
    const urlPath = useHref();
    return (
        <div className='SignUpDescribe'>
            <DescribeSignInSignUp pageName={urlPath.substring(1)} />
            <SignUp />
        </div>
    );
}

export default SignUpDescribe;
