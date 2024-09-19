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
                <div className="col-12 d-flex justify-content-center">
                    <Heatmap />
                </div>
                
            </div>
        </div>
     );
}

export default Hero2;