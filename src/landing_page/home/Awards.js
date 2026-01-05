import React from 'react'

function Awards() {
    return ( 
      <div className='container mt-5'>
         <div className='row'>
             <div className='col-6 p-3'>
                <img src='media/images/largestBroker.svg' alt='Awards Image'/>
             </div>
             <div className='col-6 p-3 mt-3'> 
                <h1 className='fs-3'><b>Largest stck broker in India</b> </h1>
                <p className='mt-2'>2+ million Zerodha clients contribute to over 15% of all retail order 
                    volumes in india daily by trading and investing in :</p>
                  
                   

                   <div className='row mt-5'>
                        <div className='col-6'>
                <ul>
                    
                    <li> 
                        <p>Futures and Options</p>
                    </li>
                     <li> 
                        <p>Commodity derivatives</p>
                    </li>
                     <li> 
                        <p>Currency derivatives</p>
                    </li>
                    
                 </ul>
                   </div>
                <div className='col-6'>
                    <ul>
                    
                    <li> 
                        <p>Stocks & IPOs</p>
                    </li>
                     <li> 
                        <p>Direct mutual funds </p>
                    </li>
                     <li> 
                        <p>Bonds and Govt.Securities</p>
                    </li>
                 </ul>
                 
                </div>
                </div>
                <img src='media/images/pressLogos.png'  alt='Loge Images' className='mt-3' style={{width:"80%"}}/>

                
             </div>
         </div>
      </div>
     );
}

export default Awards;