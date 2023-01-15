import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../../redux/auth/authActions';
import { toast } from 'react-toastify';
import ls from 'local-storage'
import Cookies from 'js-cookie'

const appLogoPath = require('../../../Assets/images/app_logo.png');

function Header(props) {
  return (
    <div className='cs_header'>
      <Link to={'/'}>
        <img className='cs_img_logo' src={appLogoPath} alt='LOGO' />
      </Link>
      <ul className='cs_nav_items'>
        <Link to={'/'}>
          <li className='cs_list_item'><i className='fa-solid fa-house'></i> Home</li>
        </Link>
        <Link to={'/signup'} style={{ display: !props.isUserSigned ? undefined : 'none' }}>
          <li className='cs_list_item'><i className='fa-solid fa-user-plus'></i> Sign Up</li>
        </Link>
        <Link to={'/signin'} style={{ display: !props.isUserSigned ? undefined : 'none' }}>
          <li className='cs_list_item'><i className='fa-solid fa-right-to-bracket'></i> Login</li>
        </Link>
        <Link to={'/signin'} style={{ display: props.isUserSigned ? undefined : 'none' }} onClick={() => { logOut(props) }}>
          <li className='cs_list_item'><i className='fa-solid fa-power-off'></i> Logout</li>
        </Link>
      </ul>
    </div>
  );
}

const logOut = (props) => {
  toast.success('Successfully logged out', {
    position: toast.POSITION.TOP_CENTER,
    className: 'toast_notification_cs'
  });
  props.signIn({ isUserSigned: false })
  ls.clear();
  Cookies.remove('usertoken')
}

const mapStateToProps = (state) => {
  return ({
    isUserSigned: state.signInReducer.isUserSigned
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    signIn: (payLoad) => { dispatch(signIn(payLoad)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
