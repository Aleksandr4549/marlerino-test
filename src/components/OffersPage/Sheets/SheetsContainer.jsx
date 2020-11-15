import { useState } from 'react';
import { connect } from 'react-redux';

import { changeNetwork } from '../../../redux/reducers/networks-reducer';
import { changeOffer } from '../../../redux/reducers/offers-reducer';
import Sheet from './Sheet/Sheet';

const SheetsContainer = ({type, networks, offers, changeNetwork, changeOffer, theme}) => {
  const [networkTitles] = useState(['Name/ID', 'Postback URL', 'Offer URL template', 'Date']);
  const [offerTitles] = useState(['Name/ID', 'Postback URL', 'Network', 'Date']);

  if (type === 'network') {
    return <Sheet titles={networkTitles} sheetLines={networks} onChange={changeNetwork} type='network' theme={theme} />
  }
  
  if (type === 'offer') {
    return <Sheet titles={offerTitles} sheetLines={offers} onChange={changeOffer} type='offer' theme={theme} />
  }
};

const mapStateToProps = (state) => {
  return {
    networks: state.networks.networks,
    offers: state.offers.offers,
    theme: state.app.theme
  }
};

export default connect(mapStateToProps, {changeNetwork, changeOffer})(SheetsContainer);