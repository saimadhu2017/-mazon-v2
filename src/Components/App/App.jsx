import './App.css';
import Header from '../Common/Header/Header'
import DescribeSignInSignUp from '../Common/DescribeSignInSignUp/DescribeSignInSignUp';
import SignIn from '../Page/SignIn/SignIn';

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <DescribeSignInSignUp pageType='Sign In' classname='describe' />
        <SignIn className='signIn' />
      </div>
    </div>
  );
}

export default App;
