import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Pulse from 'react-reveal/Pulse';



const Projects = () => {
    return (
      <div className="" id='projects'>  
        <div   className="container">
        <div class="row row-cols-1 row-cols-md-3 mt-5 g-4 projectas">
        <div class="col">
        <Pulse> 
            <div class="card">
              <div className="ui-card ">
                <img
                  className="img-fluid"           
                  src="https://i.ibb.co/fxVfz7y/website1.png"
                  alt=""
                />
                <div className="description">
                  <p className="project-detail-short">
                  You Want to see my Project please click any button.
                  Full MERN has been used to create the website
                  </p>
                  <a
                    className="m-2"
                    href="https://happy-shopping-camera.web.app"
                  >
                    Live Demo
                  </a>
                  <Link to="/project1">Details</Link>
                </div>
              </div>

              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text">
                <ul>
                  <li>Use register and login authentication.</li>
                  <li>Added Admin Control Dashboard. </li>
                  <li>Users can review my website.</li>
                  <li>Admin will be able to add new admin</li>
                </ul>
                </p>
              </div>
            </div>
            </Pulse>
          </div>
          <div class="col">
          <Pulse>
            <div class="card">
              <div className="ui-card  ">
                <img         
                  className="img-fluid"
                  src="https://i.ibb.co/KXTgrLC/website2.png"
                  alt=""
                />
                <div className="description">
                  <p className="project-detail-short">
                  Hey, this is my second project.
                  You Want to see my Project please click any button.
                  </p>
                  <a
                    className="m-2"
                    href="https://first-delivery-97194.web.app/"
                  >
                    Live Demo
                  </a>
                  <Link to="/project2">Details</Link>{" "}
                </div>
              </div>{" "}
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">
                <ul>
                  <li>Users just have to log in with email।</li>
                  <li>To use a product ad like Project 1 but there will be no specified admin.</li>
                  <li>All products are delivered and users can delete the order.</li>
                </ul>
                </p>
              </div>
            </div>
            </Pulse>
          </div>

          <div class="col">
          <Pulse>
            <div class="card">
              <div className="ui-card ">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/gSccF8J/website3.png"
                  alt=""
                />
                <div className="description">
                  <p className="project-detail-short">
                  This website is used only front-end.
                  You Want to see my Project please click any button.
                  </p>
                  <a className="m-2" href="https://health-care-882d2.web.app/">
                    Live Demo
                  </a>
                  <Link to="/project3">Details</Link>{" "}
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                <p class="card-text">
                <ul>
                  <li>This website is for users to find the best country doctors.</li>
                  <li>Use Privet Route.</li>
                  <li>Patients will find all the good doctors.</li>
                  <li>Can't talk to the doctor until login.</li>
                </ul>
                </p>
              </div>
            </div>
            </Pulse>
          </div>
          
        </div>
      </div>
      </div>
    );
};

export default Projects;