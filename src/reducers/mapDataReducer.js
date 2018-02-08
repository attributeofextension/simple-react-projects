import {FETCH_MAP_DATA} from '../actions/types';

export default function mapDataReducer(state = "",action) {
  switch(action.type) {
    case FETCH_MAP_DATA:
      return action.payload;
    default:
      return state;
  }
}