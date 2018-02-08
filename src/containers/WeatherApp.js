import "./WeatherApp.css";
import React, { Component } from 'react';
import WeatherIcon from '../components/WeatherIcon';
import { connect } from 'react-redux';
import * as actions from '../actions';


class WeatherApp extends Component {
  constructor(props){
    super(props);

    this.state = { geoSuccess: false,
                   tempUnit: "celsius" };

    this.toggleTemp = this.toggleTemp.bind(this);
  }
  
  
  componentDidMount() {
    if("geolocation" in navigator ) {
      this.setState({geoSuccess: true });
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords; 
        this.props.fetchWeather(latitude,longitude);
        this.props.fetchMapData(latitude,longitude);
      });
    } else {
      this.setState({geoSucess: false });
    }
  }
  toggleTemp() {
    switch(this.state.tempUnit) {
      case "celsius":
        return this.setState({tempUnit: "fahrenheit"});
      case "fahrenheit":
        return this.setState({tempUnit: "celsius"});
      default:
        return this.setState({tempUnit:"celsius"});
    }
  }
  kToC(K) {
    return Math.round(K - 273.15);
  }
  kToF(K) {
    return Math.round(K * (9/5) - 459.67);
  }
  render() {
    if(!this.state.geoSuccess) {
      return <div>Turn on Geolocation to use this app</div>
    }
    if(!this.props.mapData || !this.props.weather.weather) {
      return <div>Loading...</div>;
    }
    let temp = 0;
    let unit = '';
    switch(this.state.tempUnit) {
      case "celsius":
        temp = this.kToC(this.props.weather.main.temp);
        unit = "C ";
        break;
      case "fahrenheit":
        temp = this.kToF(this.props.weather.main.temp);
        unit = "F ";
        break;
    }

    return (
      <div className="card weather-app" style={{backgroundColor: "#2196F3",color:"#FFEB3B"}}>
        <div className="card-content" style={{textAlign:"center"}}>
          <h3>Local Weather</h3>
          <p>{this.props.mapData}</p>
          <WeatherIcon code={this.props.weather.weather[0].id} iconStyle={{fontSize:150,marginBottom:30,marginTop:50}} />
          <p>{temp}&deg; 
          <a href="#" onClick={(e)=>this.toggleTemp()} className="temp-unit">{unit}</a>
           and {this.props.weather.weather[0].main}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather, mapData: state.mapData };
}
export default connect(mapStateToProps,actions)(WeatherApp);