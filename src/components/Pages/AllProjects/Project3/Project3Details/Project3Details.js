import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navegation from './../../../Navegation/Navegation';


const Project3Details = () => {
 
  
  return (

    <div className="main_div ">
      <Navegation></Navegation>
      <div className="bg-color">
        <div className="slider d-block">
          <div className="rotator">
            <div  className="items">
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/HBb0Kk8/Screenshot-100.png"
                alt=""
              />
            </div>
       

            <div  className="items">
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/R9DvWK2/Screenshot-101.png"
                alt=""
              />
          </div>

            <div  className="items">
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/6rF7b7q/Screenshot-102.png"
                alt=""
              />
          </div>
            <div  className="items">
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/kKc8p9W/Screenshot-103.png"
                alt=""
              />
           
          </div>
            <div  className="items">
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/4KzmMQm/Screenshot-104.png"
                alt=""
              />
        
          </div>
            <div  className="items">
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/rkQN8R4/Screenshot-105.png"
                alt=""
              />
            </div>
       
          
       
            <div  className="items">
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/17rM2kx/Screenshot-106.png"
                alt=""
              />
    
          </div>
         
  
      </div>
    </div>
  </div>
  <section className="project1-DETAILS ">
        <div className="row ">
          <div className="col">
            <ul className="p1-details">
              <li>
                <a target="blank" href="https://vigorous-franklin-91c743.netlify.app/">
                  Live Link
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://github.com/Sourov-Paul/Assignment-12-clint-site"
                >
                  Front-Code
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://github.com/Sourov-Paul/Assignment-12-Server-Site"
                >
                  Server-Code
                </a>
              </li>
            </ul>
          </div>
          <div className="col"></div>
        </div>
      </section>
  </div>
  )
  }
export default Project3Details;