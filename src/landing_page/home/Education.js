import React from 'react'

function Education() {
    return ( 
        <div className='container mt-5 '>

        <div className='row mt-5'> 
         <div className='col-6 mt-3'>
            <img src="media/images/education.svg" style={{width:"80%", marginRight:"5rem"}}/>
         </div>
         <div className='col-6 mt-5'>
            <h1 className='mt-5 fs-2'> Free and open market Education </h1>
            <p className='mt-5  text-muted'>Varsity, the largest online stock market eduction book in the world 
                Covering everything from the basics to advanced trading.
            </p>
            <a href=''>  <i class="fa-solid fa-arrow-right-long"></i>Versity</a>

             <p className='mt-5 text-muted mb-5'>Varsity, the largest online stock market eduction book in the world 
                Covering everything from the basics to advanced trading.
            </p>
            <a href=''> TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
         </div>
        </div>
        </div>
       
     );
}

export default Education;