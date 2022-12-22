import './Header.css';
import { Link } from 'react-router-dom';

const appLogoPath = require('../../../Assets/images/app_logo.png');

function Header() {
  return (
    <div className='cs_header'>
      <Link to={'/'}>
        <img className='cs_img_logo' src={appLogoPath} alt='LOGO' />
      </Link>
      <ul className='cs_nav_items'>
        <Link to={'/'}>
          <li className='cs_list_item'><i className='fa-solid fa-house'></i> Home</li>
        </Link>
        <Link to={'/signup'}>
          <li className='cs_list_item'><i className='fa-solid fa-user-plus'></i> Sign Up</li>
        </Link>
        <Link to={'/signin'}>
          <li className='cs_list_item'><i className='fa-solid fa-right-to-bracket'></i> Login</li>
        </Link>
        {/* Adding other links */}
      </ul>
    </div>
  );
}

export default Header;
