import './TwitchTracker.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TwitchTracker extends Component {
  constructor(props) {
    super(props);

    const streams = [
      "ESL_SC2", 
      "OgamingSC2", 
      "cretetion", 
      "freecodecamp", 
      "storbeck", 
      "habathcx", 
      "RobotCaleb", 
      "noobs2ninjas"
    ];

    this.state = { streams: streams,
                   scope: "ALL" };
    this.renderContent = this.renderContent.bind(this);
    this.toggleScope = this.toggleScope.bind(this);
  }
  
  componentDidMount() {
    if(this.props.twitch.length < 1) {
      this.state.streams.forEach((stream) => this.props.fetchTwitchData(stream));
    }
  }
  toggleScope(scope) {
    console.log(scope);

    this.setState({scope:scope});
  }
  renderContent() {
    const arr = this.props.twitch.filter((channel) => {
      switch(this.state.scope) {
        case "ONLINE": 
          return channel.online;
        case "OFFLINE":
          return !channel.online;
        default:
          return true;
      }
    });
    if(this.state.scope === "ALL" ) {
      arr.sort((a,b)=> {
        if(a.online && !b.online) { return -1 }
        else if( !a.online && b.online ) { return 1 }
        else { return 0 }
      })
    }    

    return arr.map((channel) => {
      
      let wrapper = "";
      let text = "";
      if(channel.online) {
        wrapper = "twitch-li";
        text = channel.description;
      } else {
        wrapper = "twitch-li twitch-li-offline";
        text = "Offline";
      }
      console.log(wrapper);
      return (
        <div key={channel.channel} className={wrapper}>
          <div className="row valign-wrapper" style={{padding:10}}>
            <div className="col s1 left">
              <img src={channel.logo} />
            </div>
            <div className="col s2">
              <a href={channel.link} target="_blank">{channel.channel}</a>
            </div>
            <div className="col s8 right text-white" style={{textAlign:"center"}}>
              {this.trimStr(text,60)}
            </div>
          </div>
        </div>
      );
    });
  }

  trimStr(str,num) {
	  if(str === null) {
      return "Offline";
    }
    
    if(str.length <= num) {
		  return str;
	  } if(str.length > num ) {
	    return str.slice(0,num-3) + "...";
	  }
  }
  renderButtons() {
    switch(this.state.scope) {
      case "ONLINE":
        return ( 
        <div>
          <a className="twitch-nav" href="#" onClick={(e)=>this.toggleScope("ALL")}>All</a>
	        <a className="twitch-nav twitch-nav-active" href="#" onClick={(e)=>this.toggleScope("ONLINE")}>Online</a>
	        <a className="twitch-nav" href="#" onClick={(e)=>this.toggleScope("OFFLINE")}>Offline</a>
        </div>
        );
      case "OFFLINE":
        return ( 
        <div>
          <a className="twitch-nav" href="#" onClick={(e)=>this.toggleScope("ALL")}>All</a>
	        <a className="twitch-nav" href="#" onClick={(e)=>this.toggleScope("ONLINE")}>Online</a>
	        <a className="twitch-nav twitch-nav-active" href="#" onClick={(e)=>this.toggleScope("OFFLINE")}>Offline</a>
        </div>
        );
      default:
        return ( 
        <div>
          <a className="twitch-nav twitch-nav-active" href="#" onClick={(e)=>this.toggleScope("ALL")}>All</a>
	        <a className="twitch-nav" href="#" onClick={(e)=>this.toggleScope("ONLINE")}>Online</a>
	        <a className="twitch-nav" href="#" onClick={(e)=>this.toggleScope("OFFLINE")}>Offline</a>
        </div>
        );
    }
  }

  render() {    
    


    return (
      <div className="container twitch">
        <div className="twitch-header">
          <h3>Twitch Streamers</h3>
          { this.renderButtons() }
        </div>
          
          {this.renderContent()}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { twitch : state.twitch };
}

export default connect(mapStateToProps,actions)(TwitchTracker);