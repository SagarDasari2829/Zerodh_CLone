import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h1 className="mt-3">The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-4 mt-5">
          <img src="media/images/smallcaseLogo.png"/>
          <p className="text-small text-muted mt-3"> Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"50%"}}/>
          <p className="text-small text-muted mt-3"> Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"50%"}}/>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
         </div>

         <div className="col-4 p-4 mt-5">
          <img src="media/images/sensibullLogo.svg"/>
          <p className="text-small text-muted mt-3"> Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png"/>
          <p className="text-small text-muted mt-3"> Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"60%"}}/>
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
         </div>
         <button className="p-2 btn btn-primary fs-5 mt-4" style={{width:"25%", margin: "0 auto"}}>Signup now</button>
      </div>
        
    </div>
  );
}

export default Universe;
