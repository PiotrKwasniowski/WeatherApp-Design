import '../App.css';
import Weather from './Weather';
import Cloudly from './assets/cloudly.png';
import { useState, useEffect } from 'react';

function Phone() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <div className={`Background ${animate ? 'animate' : ''}`}>
            <div className='Circle'>
                <h1>London</h1>
                <p>Sun with occasional clouds</p>
                <img className='MainPhoto' src={Cloudly}/>
            </div>
            <h1 className='MainTemp'>24°</h1>
            
            <div className='Data'>
                <div className='Column'>
                    <p className='title'>UV</p>
                    <p className='numbers'>4</p>
                </div>
                <div className='Column marg'>
                    <p className='title'>% Rain</p>
                    <p className='numbers' >5%</p>
                </div>
                <div className='Column marg'>
                    <p className='title'>AQ</p>
                    <p className='numbers' >22</p>
                </div>
            </div>
            <Weather/>
        </div>
    );
}

export default Phone;
