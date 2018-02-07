import quotes from '../resources/quotes';
import quoteColors from '../resources/quoteColors';
import { FETCH_RANDOM_QUOTE, FETCH_RANDOM_QUOTE_COLOR } from './types';

export const fetchRandomQuote = (oldQuote) => {
  return (dispatch) => {
    let newQuote = oldQuote;
    while(newQuote.content === oldQuote.content) {
      const i = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[i];
    }
    dispatch({ type: FETCH_RANDOM_QUOTE, payload: newQuote });
  }
}
export const fetchRandomQuoteColor = (oldColor) => {
  return (dispatch) => {
    let newColor = oldColor;
    while(newColor === oldColor) {
      const i = Math.floor(Math.random() * quoteColors.length);
      newColor = quoteColors[i];
    }
    dispatch({ type: FETCH_RANDOM_QUOTE_COLOR, payload: newColor });
  }
}