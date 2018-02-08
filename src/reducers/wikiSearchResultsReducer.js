import { SEARCH_WIKIPEDIA } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SEARCH_WIKIPEDIA:
      return action.payload;
    default:
      return state;
  }
}