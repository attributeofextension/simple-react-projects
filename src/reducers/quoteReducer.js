import {FETCH_RANDOM_QUOTE} from '../actions/types';

export default function quoteReducer(state = {},action) {
  switch(action.type) {
    case FETCH_RANDOM_QUOTE:
      return action.payload;
    default:
      return state;
  }
}