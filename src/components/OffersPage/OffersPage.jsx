import { connect } from 'react-redux';

import Promo from './Promo/Promo';
import FormsContainer from './Forms/FormsContainer';
import SheetsContainer from './Sheets/SheetsContainer';
import './offersPage.scss';

const OffersPage = ({theme}) => {
  return (
    <div className='offers-page'>
      <div className='offers-page_block'>
        <Promo theme={theme} />
        <FormsContainer type='network' />
        <SheetsContainer type='network' />
      </div>
      <div className='offers-page_block'>
        <FormsContainer type='offer' />
        <SheetsContainer type='offer' />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme
  }
}

export default connect(mapStateToProps, null)(OffersPage);