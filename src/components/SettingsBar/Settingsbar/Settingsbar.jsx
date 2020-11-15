import '../settingsbar.scss';

const SettingsBar = ({iconUrl, theme, language, changeTheme, changeLanguage}) => {
  const changeThemeHandler = () => {
    changeTheme();
  };

  return (
    <div className='settingsbar'>
      <img className='settingsbar-icon' src={iconUrl} alt='theme icon' onClick={changeThemeHandler} />
      <p className={theme === 'dark' ? 'settingsbar-text settingsbar-text_dark' : 'settingsbar-text'}>{language}</p>
    </div>
  );
};

export default SettingsBar;