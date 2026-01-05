import React from 'react'

function Pricing() {
    return ( 
     <div className='container mt-5 mb-5 '>
     <div className='row mt-5'>
        <div className='col-4 mt-5 mr-5'>
           <h2> Unbeatable Pricing </h2>
           <p className='mt-4 text-muted'>
            We pioneered the concept of discount broking and price
            transparency in india. Flat fees and no hidden charges
            
           </p>

           <a style={{textDecoration: "none"}} href=''> See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>


        </div>
           <div className='col-2'></div>
           <div className='col-6 mt-5'>
            <div className='row '>
                <div className='col-6 text-center' style={{border: "1px solid grey",height:"13rem", width:"20rem",padding:"2rem"  }}>
                    <h1 className='fs-1'>₹0</h1>
                    <p> Free equity delivery and Direct mutual funds </p>
                </div>
                <div className='col-6 text-center mb-5' style={{border: "1px solid grey" ,height:"13rem", width:"20rem" , padding:"2rem"}}>
                    <h1> ₹20</h1>
                    <p>Intreday and F&O</p>
                </div>
            </div>
           </div>
        </div>

     </div>
     );
}

export default Pricing;