import React from 'react'
import FloodChart from '../../components/FloodChart';
import Heatmap from './Heatmap';

function Hero2() {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                
                 <FloodChart />
                 
            </div>
            <div className='row mt-5'>
                <Heatmap />
            </div>
        </div>
     );
}

export default Hero2;