import React from 'react'

function Heros() {
    return ( 
        <div className='container'>
            <div className="row p-5 mt-5 border-bottom ">
                <div className='text-center'>
                    <h1 >Pricing</h1>
                <p className='text-muted mt-3'> Free equity investment and flat ₹20 traday and F&O tardes</p>
                </div>
            </div>
            <div className='row mt-5 p-2 text-center'>
                <div className='col-3   p-4'>
                    <img src='media/images/pricing0.svg' style={{width:"80%"}}/>
                    <h1>Free equity delivery</h1>
                    <p>All equity investment (NSE, BSE) are absolutely free --  ₹0 Brokerage</p>
                </div>
                <div className='col-1'></div>
                <div className='col-3 p-4'>
                     <img src='media/images/intradayTrades.svg' style={{width:"80%"}}/>
                     <h1>Intraday and F&O trades</h1>
                    <p className='mt-3'>flat Rs 20 or 00.3% (whichever is lower) per executed order on intraday trades across equity, currency and commodity trades.</p>
                </div>
                <div className='col-1'></div>
                <div className='col-3 p-4'>
                     <img src='media/images/pricingMF.svg' style={{width:"80%"}}/>
                     <h1>Free direct MF</h1>
                    <p className='mt-3'> All direct mutual found investment are absolutely free --₹0 commission & DP charges.</p>
                </div>
                <div className='col-1'></div>
           
            </div>

         <h1 className='mt-5 text-center '>Open a Zerodha account</h1>
              <p className='text-center p-3 fs-5'>Modern Platform and apps, ₹0 investment,and flat ₹20 Intreday and F&O trades</p>
              <button className="p-2 btn btn-primary fs-5" style={{width:"25%", margin: "0 auto"}}>Signup now</button>


        </div>
     );
}

export default Heros;