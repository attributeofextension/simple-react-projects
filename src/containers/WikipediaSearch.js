import "./WikipediaSearch.css";
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class WikipediaSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.handleChange = this.handleChange.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent() {
    
    return this.props.searchResults.map((result) => {
      return (<a href={result.link} target="_blank" key={result.link}>
                <li className="panel">
                  <h5>{result.title}</h5>
                  <p>{result.caption}</p>
                </li>
              </a>      
      );
    })
  }
  
  handleChange(term) {
    this.setState({term: term });
    const throttled = _.throttle( () => { this.props.searchWikipedia(this.state.term) }, 300);
    throttled();
  }
  render() {
    return (
    <div className="wiki-search">
      <div className="control-box">
        <a className="random-link" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Click here for a random article</a>
        <div className="input-field">
          <input type="text" className="validate" onChange={(e)=> this.handleChange(e.target.value) }/>
          <label className="label">Search Term</label>
        </div>
        <p>Enter search term to begin Wikipedia search</p>
      </div>
      <div className="container">
        <ul>
          {this.renderContent()}
        </ul>
      </div>
    </div>
    );
  }
}
function mapStateToProps(state) {
  return { searchResults: state.wikiSearchResults };
}

export default connect(mapStateToProps,actions)(WikipediaSearch);