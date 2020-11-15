//редюсер с общими настройками для приложения
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const CHANGE_THEME = 'CHANGE_THEME';

const initialState = {
  language: 'en',
  theme: 'light'
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_LANGUAGE:
      return {...state, language: action.payload};
    case CHANGE_THEME:
      return {...state, theme: state.theme === 'light' ? 'dark' : 'light'};
    default: 
      return state;
  }
};

export const changeLanguage = (language) => ({type: CHANGE_LANGUAGE, payload: language});
export const changeTheme = () => ({type: CHANGE_THEME});

export default appReducer;