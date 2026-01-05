import React from 'react'

function Brokarage() {
    return (  
        <div className='container '>
            <div className='row border-top'>
                <div className='col-8 mt-5'>
                 <h3 className='mt-5 text-center'> <a href='' style={{textDecoration:"none"}}>Brokerage calcultor</a> </h3>
                    <ul className='p-4 mt-4 text-muted ' style={{marginLeft:"5rem"}}>

                        <li>Call & and RMS auto-squareoff. Additionl charges of ₹50 +GST per order </li> <br></br>
                        <li>Digital contract notes will be sent via e-mail</li> <br></br>
                        <li>Physical copies of contract note , if required, shall be charged ₹20 per contract note.Courier charges apply.</li> <br></br>
                        <li>For NRI account (non-PIS) 0.5% or ₹100 per executed order for equity(whichever is lower).</li> <br></br>
                       <li>For NRI account (PIS) 0.5% or ₹200 per executed order for equity(whichever lower)</li>    <br></br>
                       <li>if the account is in debit balance, any order palced will be charged ₹40 per executed order instead of ₹20 per executed order.</li>  <br></br>                
                    </ul>

                </div>
                <div className='col-4 mt-5'>
                   <h3 className='mt-5'><a href='' style={{textDecoration:"none"}}>List of charges</a></h3>
                </div>
            </div>
        </div>
    );
}

export default Brokarage;