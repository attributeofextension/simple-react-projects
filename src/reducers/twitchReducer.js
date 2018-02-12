import {FETCH_TWITCH_DATA} from '../actions/types';

export default function twitchReducer(state=[],action) {
  switch(action.type) {
    case FETCH_TWITCH_DATA:
      return state.concat([action.payload]);
    default:
      return state;
  }
}