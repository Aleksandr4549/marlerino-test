import uuid from 'react-uuid';

const CREATE_NEW_OFFER = 'CREATE_NEW_OFFER';
const CHANGE_OFFER = 'CHANGE_OFFER';

const initialState = {
  offers: []
};

const offersReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_NEW_OFFER:
      return {
        ...state, 
        offers: [
          ...state.offers, 
          {
            id: uuid(), 
            name: action.name, 
            offerURL: action.url, 
            networkName: action.networkName || ' ',
            date: new Date().toLocaleDateString()
          }
        ]
      };
    case CHANGE_OFFER:
        return {
            ...state,
            offers: state.offers.map(offer => offer.id === action.payload.id ? {...action.payload} : offer)
        };
    default: 
      return state;
  }
};

export const createNewOffer = (name, url, networkName) => ({type: CREATE_NEW_OFFER, name, url, networkName});

export const changeOffer = (id, name, url, networkName, date) => {
    return {
        type: CHANGE_OFFER, 
        payload: {
            id, 
            name, 
            url, 
            networkName, 
            date
        }
    }
};

export default offersReducer;