import React, { Component } from 'react';
import "../../node_modules/weather-icons-master/css/weather-icons.min.css";
import WeatherIcons from 'react-weathericons';


class WeatherIcon extends Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date() };
    this.isDayTime = this.isDayTime.bind(this);
  }
  isDayTime() {
    const hour = this.state.time.getHours();
    if( hour < 6 || hour >= 18 ) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const dayTime = this.isDayTime();
    const classValue = getIconClass(this.props.code,dayTime);
    return <i className={classValue} style={this.props.iconStyle}/>;
  }
}
export default WeatherIcon;

function getIconClass(id,dayTime) {
	var classValue = "";
  switch(id){
    //Thunderstorms
		case 200: classValue = "wi-thunderstorm";break;//thunderstorm with light rain   
    case 201: classValue = "wi-thunderstorm";break;//thunderstorm with rain
    case 202: classValue = "wi-thunderstorm";break;//thunderstorm with heavy rain
    case 210: classValue = "wi-thunderstorm";break;//light thunderstorm
    case 211: classValue = "wi-thunderstorm";break;//thunderstorm
    case 212: classValue = "wi-thunderstorm";break;//heavy thunderstorm
		case 221: classValue = "wi-thunderstorm";break;//ragged thunderstorm
    case 230: classValue = "wi-thunderstorm";break;//thunderstorm with light drizzle
    case 231: classValue = "wi-thunderstorm";break;//thunderstorm with drizzle
    case 232: classValue = "wi-thunderstorm";break;//thunderstorm with heavy drizzle
    //Drizzle
		case 300: classValue = dayTime?"wi-day-sprinkle":"wi-night-sprinkle";break;//light intensity drizzlew
		case 301: classValue = dayTime?"wi-day-sprinkle":"wi-night-sprinkle";break;//drizzle
		case 302: classValue = "wi-sprinkle";break;//heavy intensity drizzle rain
		case 310: classValue = dayTime?"wi-day-sprinkle":"wi-night-sprinkle";break;//light intensity drizzle rain
		case 311: classValue = dayTime?"wi-day-sprinkle":"wi-night-sprinkle";break;//drizzle rain
		case 312: classValue = "wi-sprinkle";break;//heavy intensity drizzle rain
		case 313: classValue = dayTime?"wi-day-showers":"wi-night-showers";break;//shower rain and drizzle
		case 314: classValue = dayTime?"wi-day-showers":"wi-night-showers";break;//heavy shower rain and drizzle
		case 321: classValue = dayTime?"wi-day-sprinkle":"wi-night-sprinkle";break;//shower drizzle
		//Rain
		case 500: classValue = dayTime?"wi-day-showers":"wi-night-showers";break;//light rain
		case 501: classValue = "wi-showers";break;//moderate rain
		case 502: classValue = "wi-rain";break;//heavy intensity rain
		case 503: classValue = "wi-rain";break;//very heavy rain
		case 504: classValue = "wi-rain";break;//extreme rain
		case 511: classValue = "wi-rain";break;//freezing rain
		case 520: classValue = dayTime?"wi-day-showers":"wi-night-showers";break;//light intensity shower rain
		case 521: classValue = dayTime?"wi-day-showers":"wi-night-showers";break;//shower rain
		case 522: classValue = "wi-rain";break;//heavy intensity shower rain
		case 531: classValue = "wi-rain-wind";break;//ragged shower rain
		//Snow
		case 600: classValue = dayTime?"wi-day-snow":"wi-night-snow";break;//light snow
		case 601: classValue = "wi-snow";break;//snow
		case 611: classValue = "wi-snow";break;//heavy snow
		case 612: classValue = dayTime?"wi-day-rain-mix":"wi-night-rain-mix";break;//shower sleet
		case 615: classValue = dayTime?"wi-day-rain-mix":"wi-night-rain-mix";break;//light rain and snow
		case 616: classValue = "wi-rain-mix";break;//rain and snow
		case 620: classValue = dayTime?"wi-day-rain-mix":"wi-night-rain-mix";break;//light shower snow
		case 621: classValue = "wi-rain-mix";break;//shower snow
		case 622: classValue = "wi-rain-mix";break;//heavy shower snow
		//Atmosphere
		case 701: classValue = "wi-alien";break;//mist
		case 711: classValue = "wi-smoke";break;//smoke
		case 721: classValue = dayTime?"wi-day-haze":"wi wi-night-alt-partly-cloudy";break;//haze
		case 731: classValue = "wi-sandstorm";break;//sand,dust whirls
		case 741: classValue = dayTime?"wi-day-fog":"wi-night-fog";break;//fog
		case 751:	classValue = "wi-sandstorm";break;//sand
		case 761: classValue = "wi-dust";break;//dust
		case 762: classValue = "wi-volcano";break;//volcanic ash
		case 771: classValue = "wi-storm-warning";break;//squalls
		case 781: classValue = "wi-tornado";break;//tornado
		//Clear
		case 800: classValue = dayTime?"wi wi-day-sunny":"wi wi-night-clear";break;//clear sky
		//Clouds
		case 801: classValue = dayTime?"wi-day-cloudy":"wi-night-cloudy";break;//few clouds
		case 802: classValue = dayTime?"wi-day-cloudy":"wi-night-cloudy";break;//scattered clouds
		case 803: classValue = dayTime?"wi-day-cloudy":"wi-night-cloudy";break;//broken clouds
		case 804: classValue = dayTime?"wi-day-overcast":"wi-night-cloudy";break;//overcast clouds
		//Extreme
		case 900: classValue = "wi-tornado";break;//tornado
		case 901: classValue = "wi-storm-warning";break;//tropical storm
		case 902: classValue = "wi-hurricane-warning";break;//hurricane/cyclone
		case 903: classValue = "wi-snowflake-cold";break;//cold
		case 904: classValue = "wi-hot";break;//hot
		case 905: classValue = dayTime?"wi-day-light-wind":"wi-windy";break;//windy
		case 906: classValue = dayTime?"wi-day-hail":"wi-night-alt-hail";break;//hail
		//Additional
		case 951: classValue = "wi-wind-beaufort-0";break;//calm
		case 952: classValue = "wi-wind-beaufort-2";break;//light breeze
		case 953: classValue = "wi-wind-beaufort-3";break;//gentle breeze
		case 954: classValue = "wi-wind-beaufort-4";break;//moderate breeze
		case 955: classValue = "wi-wind-beaufort-5";break;//fresh breeze
		case 956: classValue = "wi-wind-beaufort-6";break;//strong breeze
		case 957: classValue = "wi-wind-beaufort-7";break;//high wind, near gale
		case 958: classValue = "wi-wind-beaufort-8";break;//gale
		case 959: classValue = "wi-wind-beaufort-9";break;//severe gale
		case 960: classValue = "wi-wind-beaufort-10";break;//storm
		case 961: classValue = "wi-wind-beaufort-11";break;//violent storm
		case 962: classValue = "wi-wind-beaufort-12";break;//hurricane/cyclone
		default: classValue = "Invalid Weather Id";  
  }
	return "wi " + classValue;
}
