import React from 'react'

function Header() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4 float-start' >
                    <img src="media/images/indiamaplogo.jpg" alt="india map" style={{ width: "30%", height: "auto" }} className="img-fluid"/>
                </div>
                <div className='col-7 mt-5' style={{color: "green",fontWeight:"bold"}}>
                    
                    <h1>DISASTER ALERT PORTAL</h1>
                </div>
                <div className='col-1'>
                <img src="media/images/emblemLOGO.png" alt="india map" style={{ width: "70%", height: "auto" }} className="img-fluid"/>
                </div>
            </div>
        </div>
     );
}

export default Header;