import './App.css';
import Header from '../Common/Header/Header'
import DescribeSignInSignUp from '../Common/DescribeSignInSignUp/DescribeSignInSignUp';
import SignIn from '../Page/SignIn/SignIn';
import SignUp from '../Page/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <DescribeSignInSignUp pageType='Sign Up' />
        {/* <SignIn /> */}
        <SignUp />
      </div>
    </div>
  );
}

export default App;
