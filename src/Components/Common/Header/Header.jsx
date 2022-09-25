import './Header.css';

function Header() {
  return (
    <div className='cs_header'>
      <a href={'todo'}>
        <img className='cs_img_logo' src={require('../../../images/app_logo.png')} alt='LOGO' />
      </a>
      <ul className='cs_nav_items'>
        <a href={'todo'}><li className='cs_list_item'>Home</li></a>
        <a href={'todo'}><li className='cs_list_item'>Login</li></a>
        <a href={'todo'}><li className='cs_list_item'>Sign Up</li></a>
        {/* {feature other options as well you can add} */}
      </ul>
    </div>
  );
}

export default Header;
