import { connect } from 'react-redux';
import { withRouter } from "react-router";

import NavBtn from '../Buttons/NavBtn/NavBtn';
import logo from '../../assets/images/Logo.png';
import logoDark from '../../assets/images/LogoDark.png';
import navOffersIconGreen from '../../assets/icons/navOffersIconGreen.svg';
import navOffersIconBlack from '../../assets/icons/navOffersIconBlack.svg';
import navOffersIconLight from '../../assets/icons/navOffersIconLight.svg';
import navAppsIconGreen from '../../assets/icons/navAppsIconGreen.svg';
import navAppsIconBlack from '../../assets/icons/navAppsIconBlack.svg';
import navAppsIconLight from '../../assets/icons/navAppsIconLight.svg';
import './sidebar.scss';

const Sidebar = (props) => {
  let btnIconOffers;
  let btnIconApps;
  
  if (props.location.pathname === '/offers' && props.theme === 'dark') {
    btnIconOffers = navOffersIconBlack;
    btnIconApps = navAppsIconLight
  }  else if (props.location.pathname === '/apps' && props.theme === 'dark') {
    btnIconApps = navAppsIconBlack;
    btnIconOffers = navOffersIconLight;
  } else if (props.location.pathname === '/offers') {
    btnIconOffers = navOffersIconGreen;
    btnIconApps = navAppsIconBlack
  } else if (props.location.pathname === '/apps') {
    btnIconApps = navAppsIconGreen;
    btnIconOffers = navOffersIconBlack;
  }  else {
    btnIconOffers = navOffersIconBlack
    btnIconApps = navAppsIconBlack
  } 

  return (
    <div className={props.theme === 'dark' ? 'sidebar sidebar_dark' : 'sidebar'}>
      <div>
        <div className='sidebar-logo'>
          <img src={props.theme === 'dark' ? logoDark : logo} alt='logo' />
        </div>
        <div>
          <NavBtn value='offers' 
                  url='/offers' 
                  iconUrl={btnIconOffers}
                  theme={props.theme} />
        </div>
        <div>
          <NavBtn value='apps' 
                  url='/apps' 
                  iconUrl={btnIconApps}
                  theme={props.theme} />
        </div>
      </div>
      <div className='sidebar-text'>©2020 TestTaskApp</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme
  }
};

export default connect(mapStateToProps, null)(withRouter(Sidebar));