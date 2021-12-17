import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Project1Details.css";
import Navegation from './../../../Navegation/Navegation';


const Project1Details = () => {
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
        <h2 className="text-center mt-3 mb-4 typeDelivery">Project 1</h2>
        <Slider {...settings}>
          <div className="col-sm-12 mt-3">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/HVdnzTK/Screenshot-83.png                "
                alt=""
              />
            </div>
          </div>

          <div className="col-sm-12 mt-3">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/GQzs3vb/Screenshot-84.png                "
                alt=""
              />
            </div>
          </div>

          <div className="col-sm-12 mt-3">
            <div>
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/8XyDpCF/Screenshot-85.png                "
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 mt-3">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/rmJ6X0K/Screenshot-86.png                "
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 mt-3 ">
            <div>
             
              <img
                className="img-fluid"
                src="https://i.ibb.co/VJdHQkD/Screenshot-87.png                "
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 mt-3">
            <div>
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/6trvqkf/Screenshot-89.png                "
                alt=""
              />
            </div>
          </div>
          
          <div className="col-sm-12 mt-3">
            <div>
            
              <img
                className="img-fluid"
                src="https://i.ibb.co/44LNdqN/Screenshot-88.png                "
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
export default Project1Details;