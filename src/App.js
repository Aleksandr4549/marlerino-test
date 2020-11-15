import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import OffersPage from './components/OffersPage/OffersPage';
import SettingsbarContainer from './components/SettingsBar/SettingsbarContainer';
import AppsPage from './components/AppsPage/Apps/AppsPage';
import './App.scss';

function App({theme}) {
  return (
    <div className={theme === 'dark' ? 'app app_dark' : 'app'}>
        <Sidebar />
        <div className='app__content'>
          <SettingsbarContainer />
          <Route exact path={['/', '/offers']} render={() => <OffersPage />} />
          <Route exact path={'/apps'} render={() => <AppsPage />} />
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme
  }
};

export default connect(mapStateToProps, null)(App);