import { connect } from 'react-redux';

import Settingsbar from './Settingsbar/Settingsbar';
import { changeTheme, changeLanguage } from '../../redux/reducers/app-reducer';
import sunIcon from '../../assets/icons/sunIcon.svg';
import moonIcon from '../../assets/icons/moonIcon.svg';

const SettingsbarContainer = ({theme, language, changeTheme, changeLanguage}) => {
  return (
    <Settingsbar iconUrl={theme === 'dark' ? sunIcon : moonIcon} 
                 theme={theme} language={language} 
                 changeTheme={changeTheme} />
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme,
    language: state.app.language
  }
} 

export default connect(mapStateToProps, {changeTheme, changeLanguage})(SettingsbarContainer);