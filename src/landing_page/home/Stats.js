import React from 'react'

function Stats() {
    return ( 
        <div className='container mt-3 p-3 mb-5'>
            <div className='row p-3'>
                <div className='col-6 mt-5 '>

                    <h1 className=' mb-5 fs-2'> <b>Trust with confidence </b></h1>

                    <h2 className='mt-4 mb-3 fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore Customers trust Zerodha with ₹3.5+
                        lakh crore wroth of equity investments.
                    </p>

                    <h2 className='mt-4 mb-3 fs-4'> No Spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam,"gamification", or annoying push notifications. 
                        High quilty apps that you use at your pace , the way you like .
                    </p>

                    <h2 className='mt-4 mb-3 fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem Our investments in 
                        30+ fintech startups offer you tailored services specific to 
                        your needs
                    </p>
                    
                    <h2 className='mt-4 mb-3 fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just
                        facilitate transaction, but actively help you do better with
                        your Money
                    </p>
                     



                </div>
                <div className='col-6 mt-5'>
                     <img src='media/images/ecosystem.png' alt='Ecosystem Image' style={{width: "85%", marginLeft:"5rem"}}/>
                     <div   className ='text-center mb-5' style={{marginLeft:"3rem",}}>
                        <a href='' style={{textDecoration: "none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' style={{marginLeft: "2rem", textDecoration: "none"}}>try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                     </div>
                </div>

            </div>

        <img src='media/images/pressLogos.png'  alt='Loge Images' className='mt-3' style={{width:"60%", marginLeft:"10rem"}}/>
        </div>
     );
}

export default Stats;