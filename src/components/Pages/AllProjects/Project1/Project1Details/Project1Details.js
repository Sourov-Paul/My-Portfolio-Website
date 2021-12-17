import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Project1Details.css";
import Navegation from './../../../Navegation/Navegation';


const Project1Details = () => {


  return (
    <div className="main_div ">
      <Navegation></Navegation>

      <div className="bg-color">
        <div className="slider d-block">
          <div className="rotator">
            <div className="items">
              <img src="https://i.ibb.co/HVdnzTK/Screenshot-83.png" alt="" />
            </div>
            <div className="items">
              <img src="https://i.ibb.co/GQzs3vb/Screenshot-84.png" alt="" />
            </div>
            <div className="items">
              <img src="https://i.ibb.co/8XyDpCF/Screenshot-85.png" alt="" />
            </div>
            <div className="items">
              <img src="https://i.ibb.co/rmJ6X0K/Screenshot-86.png" alt="" />
            </div>
            <div className="items">
              <img src="https://i.ibb.co/VJdHQkD/Screenshot-87.png" alt="" />
            </div>
            <div className="items">
              <img src="https://i.ibb.co/6trvqkf/Screenshot-89.png " alt="" />
            </div>
            <div className="items">
              <img src="https://i.ibb.co/44LNdqN/Screenshot-88.png" alt="" />
            </div>
            <div className="items">
              <img src="https://i.ibb.co/nnmGZNm/Screenshot-127.png" alt="" />
            </div>
            <div className="items">
              <img src="https://i.ibb.co/2sngTWZ/Screenshot-128.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="project1-DETAILS ">
        <div className="row ">
          <div className="col">
            <ul className="p1-details">
              <li>
                <a target="blank" href="https://happy-shopping-camera.web.app/">
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
  );
  }
export default Project1Details;