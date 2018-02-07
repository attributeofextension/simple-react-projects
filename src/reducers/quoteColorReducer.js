import {FETCH_RANDOM_QUOTE_COLOR} from '../actions/types';

export default function quoteColorReducer(state = "#fff",action) {
  switch(action.type) {
    case FETCH_RANDOM_QUOTE_COLOR:
      return action.payload;
    default:
      return state;
  }
}