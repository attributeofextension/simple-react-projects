import React, { Component } from 'react';
import './RandomQuoteGenerator.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FaTwitter from 'react-icons/lib/fa/twitter';


class RandomQuoteGenerator extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchRandomQuoteColor(this.props.quoteColor);
    this.props.fetchRandomQuote(this.props.quote);
  }
  componentWillReceiveProps(nextProps) {
  }
  render() {
    const quoteColor = this.props.quoteColor;
    document.body.style.backgroundColor = quoteColor;

    const authorURI = encodeURIComponent(' -' + this.props.quote.author);
    const contentURI = encodeURIComponent('"' + this.props.quote.content + '"');
    return (
        <div className="card">
          <div className="card-content" style={{color:quoteColor}}>
            <p>{this.props.quote.content}</p>
            <h6>&mdash;{this.props.quote.author}</h6>
          </div>
          <div class="card-action">
              <a class="waves-effect waves-light btn" 
                style={{backgroundColor:quoteColor}}
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${contentURI}${authorURI}"`} 
                target="_blank"
                >
                <FaTwitter style={{fontSize:20}} />
              </a>
              <button class="waves-effect waves-light btn right" 
                      style={{backgroundColor:quoteColor}}
                      onClick={()=>{ this.props.fetchRandomQuote(this.props.quote);
                                     this.props.fetchRandomQuoteColor(quoteColor);
                                   }
                      }
              >New Quote
              </button>
          </div>
        </div>
    );
  }
}
function mapStateToProps(state) {
  return { quote : state.quote,
           quoteColor: state.quoteColor };
}
export default connect(mapStateToProps,actions)(RandomQuoteGenerator);