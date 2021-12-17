import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navegation from './../../../Navegation/Navegation';


const Project3Details = () => {
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
        <h2 className="text-center mt-3 mb-4 typeDelivery">Project 3</h2>
        <Slider {...settings}>
          <div className="col-sm-12 mt-3">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/HBb0Kk8/Screenshot-100.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-sm-12 mt-3">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/R9DvWK2/Screenshot-101.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-sm-12 mt-3">
            <div>
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/6rF7b7q/Screenshot-102.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 mt-3">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/kKc8p9W/Screenshot-103.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 mt-3 ">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/4KzmMQm/Screenshot-104.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 mt-3">
            <div>
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/rkQN8R4/Screenshot-105.png"
                alt=""
              />
            </div>
          </div>
          
          <div className="col-sm-12 mt-3">
            <div>
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/17rM2kx/Screenshot-106.png"
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
export default Project3Details;