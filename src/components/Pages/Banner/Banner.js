import React from "react";
import Navegation from "./../Navegation/Navegation";
import "./Banner.css";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
// import Particles from "react-tsparticles";







const Banner = () => {

  
  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
    <div>
          {/* <Particles
          
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "white",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 0.5,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 3000,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    /> */}

      <div className="main_banner">
        <Navegation></Navegation> <br /> <br /> <br />
        <div className="second-div">
          <div className="container p-3">
            <div className="row">
              <div className=" mb-sm-5 col-sm-12 col-md-6 col-lg-6">
                <Fade left className="main_info mt-sm-5">
                  <div className="mt-5">
                    <strong className="hello">Hello I'm</strong>{" "}
                    <h3 className="m-0">Sourov Paul</h3>
                    <h4 className="name">Front-End Web Developer</h4>
                   
                    <Typewriter
                      options={{
                        strings: ["I am ready to create any website you wish.",
                         "I can make professional design animation responsive SEO  friendly website for you."],
                        autoStart: true,
                        delay: 75,
                        loop: true,
                      }}
                    />
                    <Link
                      className="nav-link borderCv"
                      to="/Sourov-Paul-MREN-Stack-Developer Resume.pdf"
                      download
                      target="_blank"
                    >
                      Download Resume/CV
                    </Link>
                    <div className="socialIcon">
                      <a className="social-icon" href="https://www.facebook.com/Sourov.Paul.Web.Developer">
                        {" "}
                        <i className="fab fa-facebook facebook"></i>
                      </a>

                      <a className="social-icon" href="https://www.linkedin.com/in/sourov-paul-169668150">
                        {" "}
                        <i className="fab fa-linkedin-in linkedin"></i>
                      </a>

                      <a className="social-icon" href="https://github.com/Sourov-Paul">
                        {" "}
                        <i className="fab fa-github github"></i>
                      </a>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className=" rounded col-sm-12 col-md-6 col-lg-6">
                <Fade right className="">
                  <img
                    className="img-fluid newIMG"
                    src="https://i.ibb.co/bzcR9pJ/profile-image.jpg"
                    alt=""
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
