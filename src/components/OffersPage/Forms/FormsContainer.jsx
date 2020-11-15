import { connect } from 'react-redux';

import { createNewNetwork } from '../../../redux/reducers/networks-reducer';
import { createNewOffer } from '../../../redux/reducers/offers-reducer';
import NewNetworkForm from './NewNetworkForm/NewNetworkForm';
import NewOfferForm from './NewOfferForm/NewOfferForm';

const FormsContainer = ({type, createNewNetwork, createNewOffer, theme}) => {
  if (type === 'network') return <NewNetworkForm onClickHandler={createNewNetwork} theme={theme} />
  
  if (type === 'offer') return <NewOfferForm onClickHandler={createNewOffer} theme={theme} />
};

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme
  }
};

export default connect(mapStateToProps, {createNewNetwork, createNewOffer})(FormsContainer);