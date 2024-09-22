// import React from 'react'

// function Header() {
//     return ( 
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-4 float-start' >
//                     <img src="media/images/indiamaplogo.jpg" alt="india map" style={{ width: "30%", height: "auto" }} className="img-fluid"/>
//                 </div>
//                 <div className='col-7 mt-5' style={{color: "green",fontWeight:"bold"}}>
                    
//                     <h1>DISASTER ALERT PORTAL</h1>
//                 </div>
//                 <div className='col-1'>
//                 <img src="media/images/emblemLOGO.png" alt="india map" style={{ width: "70%", height: "auto" }} className="img-fluid"/>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Header;




// import React from 'react';

// function Header() {
//   return (
//     <header className="py-4" style={{ background: "linear-gradient(90deg, #2980b9, #6dd5fa, #ffffff)" }}>
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Left: India Map */}
//           <div className="col-md-2 text-start">
//             <img src="media/images/indiamaplogo.jpg" alt="India map" className="img-fluid" style={{ width: "70px" }} />
//           </div>

//           {/* Center: Title */}
//           <div className="col-md-8 text-center">
//             <h1 className="display-6 text-dark" style={{ fontWeight: "bold" }}>DISASTER ALERT PORTAL</h1>
//           </div>

//           {/* Right: Emblem */}
//           <div className="col-md-2 text-end">
//             <img src="media/images/emblemLOGO.png" alt="India emblem" className="img-fluid" style={{ width: "70px" }} />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;




// import React from 'react';

// function Header() {
//   return (
//     <header className="bg-dark text-light py-4">
//       <div className="container text-center">
//         <img src="media/images/indiamaplogo.jpg" alt="India map" className="rounded-circle" style={{ width: "100px" }} />
//         <h1 className="mt-3">DISASTER ALERT PORTAL</h1>
//         <p className="lead">Stay informed and prepared.</p>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React from 'react';

function Header() {
  return (
    <header className="py-4" style={{ background: "linear-gradient(90deg, #2980b9, #6dd5fa, #ffffff)" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left: India Map */}
          <div className="col-md-2 text-start">
            <img 
              src="media/images/indiamaplogonew.png" 
              alt="India map" 
              className="img-fluid" 
              style={{ width: "70%", backgroundColor: "transparent" }} 
            />
          </div>

          {/* Center: Title */}
          <div className="col-md-8 text-center">
            <h1 className="display-6 text-dark" style={{ fontWeight: "bold" }}>DISASTER ALERT PORTAL</h1>
          </div>

          {/* Right: Emblem */}
          <div className="col-md-2 text-end">
            <img src="media/images/emblemLOGO.png" alt="India emblem" className="img-fluid" style={{ width: "70px" }} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
