import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Project2Details.css";
import Navegation from './../../../Navegation/Navegation';


const Project2Details = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (

    <div className="main_div ">
      <Navegation></Navegation>
    <div className="second_div pb-5 mt-5">
      <div className="container row">
        <h2 className="text-center mt-3 mb-4 typeDelivery">Project 2</h2>
        <Slider {...settings}>
          <div className="col-sm-12 mt-3">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/LrX6Pn8/Screenshot-93.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-sm-12 mt-3">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/rsMSQ3c/Screenshot-92.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-sm-12 mt-3">
            <div>
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/PGZ2KPs/Screenshot-94.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 mt-3">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/7N7vYgp/Screenshot-95.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 mt-3 ">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/f0q3fbL/Screenshot-96.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 mt-3">
            <div>
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/4M4MNj2/Screenshot-98.png"
                alt=""
              />
            </div>
          </div>
          
          <div className="col-sm-12 mt-3">
            <div>
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/ryHhmks/Screenshot-99.png"
                alt=""
              />
            </div>
          </div>
         
        </Slider>
      </div>
    </div>
  </div>
  )
  }
export default Project2Details;