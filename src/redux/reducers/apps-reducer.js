import { appsAPI } from '../../api/apps-api';
import { recursiveFilter } from '../../utils/recursiveFilter';

const SET_APPS = 'SET_APPS';
const INCREMENT_COUNT_PAGE = 'INCREMENT_COUNT_PAGE';
const SELECT_FILTER = 'SELECT_FILTER';
const APPLY_FILTERS = 'APPLY_FILTERS';
const SEARCH = 'SEARCH';

const initialState = {
  countPage: 1,
  apps: [],
  filteredApps: [],
  filters: [{keyName: 'gender', value: 'all'}, {keyName: 'species', value: 'all'}]
};

const appsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_APPS:
      return {...state, apps: [...state.apps, ...action.payload], filteredApps: [...state.apps, ...action.payload]};
    case INCREMENT_COUNT_PAGE:
      return {...state, countPage: ++state.countPage};
    case SELECT_FILTER:
      return {
        ...state, 
        filters: state.filters.map(filter => {
          return filter.keyName === action.payload.keyName ? {...filter, value: action.payload.value} 
                                                                 : filter
        })
      };
    case APPLY_FILTERS:
      return {...state, filteredApps: recursiveFilter(state.apps, state.filters)};
    case SEARCH:
      return {
        ...state, 
        filteredApps: state.filteredApps.filter(app => app.name.toLowerCase().includes(action.payload.toLowerCase()))
      };
    default: 
      return state;
  }
};

const setApps = (apps) => ({type: SET_APPS, payload: apps});

export const incrementCountPage = () => ({type: INCREMENT_COUNT_PAGE});

const selectFilter = (keyName, value) => ({type: SELECT_FILTER, payload: {keyName, value}}); 

export const search = (value) => ({type: SEARCH, payload: value}); 

export const applyFilters = (keyName, value) => {
  return (dispatch) => {
    dispatch(selectFilter(keyName, value));
    dispatch({type: APPLY_FILTERS});
  }
};

export const applySearch = (value) => {
  return (dispatch) => {
    dispatch({type: APPLY_FILTERS});
    dispatch(search(value));
  }
};

export const getApps = (countPage = 1) => {
  return async (dispatch) => {
    const {data: {results}} = await appsAPI.getCharsets(countPage);
    dispatch(setApps(results));
    dispatch(incrementCountPage());
  }
};


export default appsReducer;