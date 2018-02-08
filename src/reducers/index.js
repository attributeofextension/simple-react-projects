import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';
import quoteColorReducer from './quoteColorReducer';
import wikiSearchResultsReducer from './wikiSearchResultsReducer';
import weatherReducer from './weatherReducer';
import mapDataReducer from './mapDataReducer';

export default combineReducers({
  quote: quoteReducer,
  quoteColor: quoteColorReducer,
  wikiSearchResults : wikiSearchResultsReducer,
  weather: weatherReducer,
  mapData: mapDataReducer
});