import './App.css';
import Header from '../Common/Header/Header'
import DescribeSignInSignUp from '../Common/DescribeSignInSignUp/DescribeSignInSignUp';

function App() {
  return (
    <div>
      <Header />
      <DescribeSignInSignUp pageType='Sign Up'/>
    </div>
  );
}

export default App;
