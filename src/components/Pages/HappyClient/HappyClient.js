import React from 'react';
import './HappyClient.css';




const HappyClient = () => {

    
    setTimeout(function(){
       const odometer= document.getElementById('odometer')
       odometer.innerHTML = 10;//ending number
    }, 2000);
   
    return (
        <div className='happyClient d-flex'>
           
            <div id="odometer" className="odometer"> 

            </div> <span className="plus">+</span>
            
           
        </div>
    );
};

export default HappyClient;