import DescribeSignInSignUp from '../../Common/DescribeSignInSignUp/DescribeSignInSignUp';
import SignIn from '../../Stories/SignIn/SignIn';
import './SignInDescribe.css';

function SignInDescribe() {
    return (
        <div className="SignInDescribe">
            <DescribeSignInSignUp pageType='Sign In' />
            <SignIn />
        </div>
    );
}

export default SignInDescribe;
