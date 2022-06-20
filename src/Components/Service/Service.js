import React from "react";
import "./Service.css";
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Wobble from 'react-reveal/Wobble';

const Service = () => {
  return (
    <div id="service" className="mb-5">
      <Wobble><h2 className="text-center">Service</h2></Wobble>
    
      <div className="main-service container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
          <div className="col">
           <Fade left>
           <div className="card h-100 main-card">
              <h5 className="text-center">
                <i className="fas fa-laptop-code laptop"></i>
              </h5>
              <h4 className="text-center">Work Procedure</h4>
              <div className="card-body">
                <p className="card-text some-text-color">
                 
                  <span className="firdtLetter">I </span>will do your work very
                  seriously. You will not be disappointed in my work. I will
                  complete your work on time.I think anyone will be not
                  disappointed with my work.
                </p>
              </div>
            </div>
           </Fade>
          </div>
          <div className="col">
           <Jump>
           <div className="card h-100 main-card card2">
              <h5 className="text-center">
                <i className="fas fa-toolbox"></i>
              </h5>
              <h4 className="text-center">Works Tools</h4>
              <div className="card-body">
                <p className="card-text some-text-color some-text-color2">
                 
                  <span className="firdtLetter">T</span>hese tools and libraries
                  I use for VS code, bootstrap, animation, Material UI, Tailwind
                  css, Heroku, etc.
                </p>
              </div>
            </div>
           </Jump>
          </div>
          <div className="col">
           <Fade right>
           <div className="card h-100 main-card">
              <h5 className="text-center">
                <i className="fas fa-palette"></i>
              </h5>
              <h4 className="text-center">Quality</h4>
              <div className="card-body">
                <p className="card-text some-text-color">
                 
                  <span className="firdtLetter">T</span>hese tools and libraries
                  I use for VS code, bootstrap, animation, Material UI, Tailwind
                  css, Heroku, etc.
                </p>
              </div>
            </div>
           </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
