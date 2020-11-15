import uuid from 'react-uuid';

const CREATE_NEW_NETWORK = 'CREATE_NEW_NETWORK';
const CHANGE_NETWORK = 'CHANGE_NETWORK';

const initialState = {
  networks: [
    {
        id: uuid(),
        name: 'name',
        postbackURL: 'https://test.com',
        offerURLTemplate: '{offer_url}?clickid={clickid}',
        date: new Date().toLocaleDateString()
      }
  ]
};

const networksReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_NEW_NETWORK:
      return {
        ...state, 
        networks: [
          ...state.networks, 
          {
            id: uuid(),
            name: action.name, 
            postbackURL: action.url, 
            offerURLTemplate: '{offer_url}?clickid={clickid}',
            date: new Date().toLocaleDateString()
          }
        ]
      };
    case CHANGE_NETWORK:
      return {
        ...state,
        networks: state.networks.map(network => network.id === action.payload.id ? {...action.payload} : network)
      };
    default: 
      return state;
  }
};

export const createNewNetwork = (name, url) => ({type: CREATE_NEW_NETWORK, name, url});

export const changeNetwork = (id, name, postbackURL, offerURLTemplate, date) => {
  return {
      type: CHANGE_NETWORK, 
      payload: {
          id, 
          name, 
          postbackURL, 
          offerURLTemplate, 
          date
      }
  }
};

export default networksReducer;