import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';
import quoteColorReducer from './quoteColorReducer';
import wikiSearchResultsReducer from './wikiSearchResultsReducer';

export default combineReducers({
  quote: quoteReducer,
  quoteColor: quoteColorReducer,
  wikiSearchResults : wikiSearchResultsReducer
});