import '../App.css';


function DayData(props) {
  return (
    <div className="dayContainer">
        <img className='Weather-icon' src={props.img} alt='Weather'/>
        <h1 className='TempStats'>{props.temp}°</h1>
    </div>
  );
}

export default DayData;