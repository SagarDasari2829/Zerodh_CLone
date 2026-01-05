import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5   p-4  ">
      <div className="row">
        <div className="col-5 mt-5">
          <img src={imageURL} />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-5" >
          <h1 className="fs-3 mb-4 ">{productName}</h1>
          <p style={{width:"20vw"}}>{productDescription}</p>
          <div className="mt-2">
          <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo {""}
             <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
             </a>
          <a href={learnMore} style={{marginLeft:"2rem", textDecoration:"none"}}>Learn More {""}
                         <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          </div>

        <div className="mt-3 mb-5">
          <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href={appStore} style={{marginLeft:'1rem'}}>
            <img src="media/images/appStoreBadge.svg" />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
