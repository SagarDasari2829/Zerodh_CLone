import React from 'react'

function RightSection({  
 imageURL,
  productName,
  productDescription,
  kiteConnect,
  
}) {
    return ( 
      <div className="container mt-5">
        <div className="row">
            <div className="col-6 mt-5  t text-muted " >
                <h1  style={{marginTop:"10rem"}}>{productName}</h1>
                <p style={{width:"25vw", marginTop: "1rem"}}>{productDescription}  
                </p>
               
               <a href='' style={{textDecoration:"none", marginRight:"1rem" }}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href='' style={{textDecoration:"none", marginRight:"1rem" }}>{kiteConnect} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              

            </div>
            <div className="col-6">
                <img src={imageURL} />
            </div>
        </div>

      </div>
     );
}

export default RightSection;