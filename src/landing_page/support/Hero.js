import React from 'react'

function Hero() {
    return (  
 
         <section className='container-fluid' id="suportHero">
            <div className=' p-5  mb-5' id='supportWrapper'>
               <h3>Support Portal</h3>
               <a href='' style={{color:"white"}}> Track Tickets </a>
            </div>
            <div className='row p-5  m-5 '>
                <div className='col-6 p-5 '>
                    <h1 className='fs-5'>Search for answer or browse help topics to create a ticket</h1>
                   <input placeholder= " Eg: how do I activate F&O"/> <br/>
                   <div className='links mt-4'>
                   <a href=''style={{color:"white"}} >Track account opening </a>
                   <a href=''style={{color:"white"}}>Track segment activation </a>
                   <a href=''style={{color:"white"}}>Intraday marginsKite user manual </a>
                   </div>
                </div>
                <div className='col-6 p-5'>
                    <h1>Featured</h1>
                    <ol>
                        <li><a href=''style={{ color:"white"}}>Current Takeovers and Delisting - January 2024 </a> </li>
                       <li><a href=''style={{  color:"white"}}> Latest INtraday leverage - MIS & CO</a> </li>
                    </ol>
                    
                </div>

            </div>

         </section>
        
    );
}

export default Hero;