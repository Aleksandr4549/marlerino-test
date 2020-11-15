import { useState } from 'react';
import { connect } from 'react-redux';

import Select from './Select/SelectForm';
import arrow from '../../../../assets/icons/arrowDownLight.svg';
import './selectForm.scss';

const SelectContainer = ({type, selectTitle, networks, offers, onSelectHandler}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSelect = (value) => {
    onSelectHandler(value);
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  if (type === 'network') {
    return <Select values={networks} 
                   title={selectTitle || 'Choose a network'} 
                   iconUrl={arrow} 
                   onSelectHandler={onSelect}
                   isOpen={isOpen}
                   toggleIsOpen={toggleIsOpen}
                   isBurger='false' />
  }

  if (type === 'offer') {
    return <Select values={offers} 
                   title={selectTitle || 'High rated first'} 
                   iconUrl={arrow} 
                   onSelectHandler={onSelect}
                   isOpen={isOpen}
                   toggleIsOpen={toggleIsOpen}
                   isBurger='false' />
  }
};

const mapStateToProps = (state) => {
  return {
    networks: state.networks.networks,
    offers: state.offers.offers
  }
};

export default connect(mapStateToProps, {})(SelectContainer);