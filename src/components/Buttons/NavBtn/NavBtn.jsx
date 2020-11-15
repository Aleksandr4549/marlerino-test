import { NavLink } from 'react-router-dom';

import './navBtn.scss';

const NavBtn = ({value, url, iconUrl, theme}) => {
  return (
    <NavLink className='nav_btn' 
             activeClassName={theme === 'dark' ? 'nav_btn__active_dark' : 'nav_btn__active'} 
             to={url}><img className='nav_btn__icon' src={iconUrl} alt='icon'/>{value}
    </NavLink>
  );
};

export default NavBtn;