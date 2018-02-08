import quotes from '../resources/quotes';
import quoteColors from '../resources/quoteColors';
import { FETCH_RANDOM_QUOTE, FETCH_RANDOM_QUOTE_COLOR, SEARCH_WIKIPEDIA } from './types';
import {makeWikipediaURL} from './helpers';
import axios from 'axios';

const wikipediaAPIBaseURL = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=";

//Random Quote Generator
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
//Wikipedia Search
export const searchWikipedia = (term) => {
  return async (dispatch) => {
    const res = await axios.get(`${wikipediaAPIBaseURL}${makeWikipediaURL(term)}`);
    let sorted = [];
    for(let i = 0; i < res.data[1].length; i++) {
      sorted.push({title: res.data[1][i],
                   caption: res.data[2][i],
                   link: res.data[3][i]
                  });
    }

    dispatch({type: SEARCH_WIKIPEDIA, payload: sorted });
  }
}