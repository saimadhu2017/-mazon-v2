import DescribeSignInSignUp from '../../Common/DescribeSignInSignUp/DescribeSignInSignUp';
import SignUp from '../../Stories/SignUp/SignUp';
import './SignUpDescribe.css';

function SignUpDescribe() {
    return (
        <div className="SignUpDescribe">
            <DescribeSignInSignUp pageType='Sign Up' />
            <SignUp />
        </div>
    );
}

export default SignUpDescribe;
