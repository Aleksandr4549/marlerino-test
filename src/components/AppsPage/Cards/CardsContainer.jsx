import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getApps } from '../../../redux/reducers/apps-reducer';
import Card from './Card'

const CardsContainer = ({cards, countPage, getApps}) => {
  useEffect(() => {
    if (cards.length === 0) {
      getApps()
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='cards__container'>
      {cards.length > 0 && cards.map(card => <Card key={card.id} name={card.name} imgUrl={card.image} gender={card.gender} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.appsPage.filteredApps,
    countPage: state.appsPage.countPage
  }
}

export default connect(mapStateToProps, {getApps})(CardsContainer);