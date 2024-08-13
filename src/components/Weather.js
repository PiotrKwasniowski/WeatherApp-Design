import '../App.css';
import DayData from './DayData';
import Cloudly from './assets/cloudly.png'
import Rainy from './assets/rainy.png'
import Sunny from './assets/sunny.png'


function Weather() {
    return (
      <div className="weatherContainer">
        <div className="DayWeather" style={{ marginLeft: '60px' }}>
          <DayData temp="21" img={Cloudly} />
          <p className="Day">Tomorrow</p>
        </div>
        <div className="DayWeather">
          <DayData temp="18" img={Rainy} />
          <p className="Day">Monday</p>
        </div>
        <div className="DayWeather">
          <DayData temp="26" img={Sunny} />
          <p className="Day">Tuesday</p>
        </div>
        <div className="DayWeather">
          <DayData temp="24" img={Sunny} />
          <p className="Day">Wednesday</p>
        </div>
      </div>
    );
  }
  
  export default Weather;