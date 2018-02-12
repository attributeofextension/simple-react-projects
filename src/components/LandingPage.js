import './LandingPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container">
      <div style={{width:600, margin:'auto',textAlign:"center"}}>
        <h3><i className="material-icons">school</i> Welcome!</h3>
        <p>These projects are designed to demonstrate my skills as a React front-end developer. The whole site has been constructed using React, React-Router and Redux. Below is a list of projects (click on the panel to visit the project route). You can also access any project by clicking the dropdown menu Projects on the Navbar above.</p>
      </div>
      <div className="row">

        <div className="col s4">  
        <Link to="/weatherapp" className="landing-link">
        <div className="card landing-panel green" style={{textAlign:"left"}}>
          <div className="card-content">
            <span className="card-title" style={{color:"#FFEB3B"}}>Weather App</span>
            <p>Detects user location and displays Open Weather information and Google Maps location</p>
          </div>
        </div>
        </Link>
        </div>
        
        <div className="col s4">
        <Link to="/wikipediasearch" className="landing-link">
        <div className="card landing-panel pink" style={{textAlign:"left"}}>
          <div className="card-content">
            <span className="card-title" style={{color:"#FFEB3B"}}>Wikipedia Search</span>
            <p>Searches Wikipedia for articles as the user types in a new search term</p>
          </div>
        </div>
        </Link>
        </div>

        <div className="col s4">
        <Link to="/quotegenerator" className="landing-link">
        <div className="card landing-panel blue" style={{textAlign:"left"}}>
          <div className="card-content">
            <span className="card-title" style={{color:"#FFEB3B"}}>Random Quote Generator</span>
            <p>Generates random quotes on click and allows the user to post a quote to twitter.</p>
          </div>
        </div>
        </Link>
        </div>

        <div className="col s4">
        <Link to="/twitchtracker" className="landing-link">
        <div className="card landing-panel blue" style={{textAlign:"left"}}>
          <div className="card-content">
            <span className="card-title" style={{color:"#FFEB3B"}}>Twitch.tv Tracker</span>
            <p>Makes a REST query to Twitch API and displays whether a streamer is online</p>
          </div>
        </div>
        </Link>
        </div>


      </div>
    </div>
  );
}
export default LandingPage;