import React from "react";
import Navegation from "./../../../Navegation/Navegation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Project4Details = () => {
  return (
    <div className="main_div ">
      <Navegation></Navegation>
      <div className="bg-color">
        <div className="slider d-block">
          <div className="rotator">
            <div className="items">
              <img
                height="fixed-content"
                src="https://i.postimg.cc/50dNk3ry/Screenshot-152.png"
                alt=""
              />
            </div>

            <div className="items">
              <img
                src="https://i.postimg.cc/Y96qcFc3/Screenshot-153.png"
                alt=""
              />
            </div>

            <div className="items">
              <img
                src="https://i.postimg.cc/NFbsFwj2/Screenshot-154.png"
                alt=""
              />
            </div>
            <div className="items">
              <img
                src="https://i.postimg.cc/wxkT0DQx/Screenshot-155.png"
                alt=""
              />
            </div>

            <div className="items">
              <img
                src="https://i.postimg.cc/4yGvZpYN/Screenshot-157.png"
                alt=""
              />
            </div>

            <div className="items">
              <img
                src="https://i.postimg.cc/SxR6ySx8/Screenshot-158.png"
                alt=""
              />
            </div>

            <div className="items">
              <img
                src="https://i.postimg.cc/tRdtkvc1/Screenshot-160.png"
                alt=""
              />
            </div>
            <div className="items">
              <img
                src="https://i.postimg.cc/mDfCN7NN/Screenshot-161.png"
                alt=""
              />
            </div>
            <div className="items">
              <img
                src="https://i.postimg.cc/GhcP5J0X/Screenshot-162.png"
                alt=""
              />
            </div>
            <div className="items">
              <img
                src="https://i.postimg.cc/QMWcTf5d/Screenshot-163.png"
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
                <a target="blank" href="https://friendly-ramanujan-39d91c.netlify.app">
                  Live Link
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://github.com/Sourov-Paul/food-resturent-client"
                >
                  Front-Code
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://github.com/Sourov-Paul/food-resturent-server"
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
};

export default Project4Details;
