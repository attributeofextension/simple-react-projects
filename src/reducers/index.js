import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';
import quoteColorReducer from './quoteColorReducer';

export default combineReducers({
  quote: quoteReducer,
  quoteColor: quoteColorReducer
});