import React from "react";
import Navegation from "./../Navegation/Navegation";
import "./Banner.css";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';







const Banner = () => {
  return (
    <div>
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
                      <a href="https://www.facebook.com/Sourov.Paul.Web.Developer">
                        {" "}
                        <i className="fab fa-facebook facebook"></i>
                      </a>

                      <a href="https://www.linkedin.com/in/sourov-paul-169668150">
                        {" "}
                        <i className="fab fa-linkedin-in linkedin"></i>
                      </a>

                      <a href="https://github.com/Sourov-Paul">
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
                    src="https://scontent.fdac134-1.fna.fbcdn.net/v/t1.6435-9/106781412_632055637659137_4843157035784025073_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEC-RstWb9vAW6C7lFKAnAaU7rbx9hgNoxTutvH2GA2jERktAIznm2vqTmpwxL3a-wGOr3FpuaWXJRWuqNwS6wY&_nc_ohc=MB3yZ6gpm5AAX-W6lZi&_nc_ht=scontent.fdac134-1.fna&oh=73023afa18a192f10a81fc4e17d02bdd&oe=61CBDE35"
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