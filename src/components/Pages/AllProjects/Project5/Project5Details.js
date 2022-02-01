import React from "react";
import Navegation from "./../../../Navegation/Navegation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Project5Details = () => {
  return (
    <div className="main_div ">
      <Navegation></Navegation>
      <div className="bg-color">
        <div className="slider d-block">
          <div className="rotator">
            <div className="items">
              <img
                height="fixed-content"
                src="https://i.postimg.cc/HkWSbwfK/Screenshot-165.png"
                alt=""
              />
            </div>

            <div className="items">
              <img
                src="https://i.postimg.cc/52PsgHJt/Screenshot-166.png"
                alt=""
              />
            </div>

            <div className="items">
              <img
                src="https://i.postimg.cc/ZK4jhPKR/Screenshot-167.png"
                alt=""
              />
            </div>
            <div className="items">
              <img
                src="https://i.postimg.cc/MZyt43wN/Screenshot-168.png"
                alt=""
              />
            </div>

            <div className="items">
              <img
                src="https://i.postimg.cc/NfDDGy5x/Screenshot-169.png"
                alt=""
              />
            </div>

            <div className="items">
              <img
                src="https://i.postimg.cc/6QgYsDyJ/Screenshot-170.png"
                alt=""
              />
            </div>

            <div className="items">
              <img
                src="https://i.postimg.cc/MTBtzdQc/Screenshot-171.png"
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
  );
};

export default Project5Details;
