import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Project2Details.css";
import Header from "../../../Header/Header";


const Project2Details = () => {
 

  return (

    <div className="main_div ">
      <Header></Header>
      <div className="bg-color">
        <div className="slider d-block">
          <div className="rotator">
            <div className="items">
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/LrX6Pn8/Screenshot-93.png"
                alt=""
              />
            </div>
       

            <div className="items">
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/rsMSQ3c/Screenshot-92.png"
                alt=""
              />
            
          </div>

            <div className="items">
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/PGZ2KPs/Screenshot-94.png"
                alt=""
              />
           
          </div>
            <div className="items">
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/7N7vYgp/Screenshot-95.png"
                alt=""
              />
            </div>
    
            <div className="items">
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/f0q3fbL/Screenshot-96.png"
                alt=""
              />
       
          </div>
            <div className="items">
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/4M4MNj2/Screenshot-98.png"
                alt=""
              />
           
          </div>
          
            <div className="items">
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/ryHhmks/Screenshot-99.png"
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
                <a target="blank" href="https://first-delivery-97194.web.app/">
                  Live Link
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://github.com/Sourov-Paul/Assignment-11-client-site"
                >
                  Front-Code 
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://github.com/Sourov-Paul/Assignment-11-Server-site"
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
export default Project2Details;