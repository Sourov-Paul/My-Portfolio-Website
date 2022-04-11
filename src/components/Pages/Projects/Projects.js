import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Pulse from 'react-reveal/Pulse';



const Projects = () => {
    return (
      <div className="" id='projects'>  
        <div   className="container">
          <h2 className='text-center bolded'>My Projects</h2>
        <div class="row row-cols-1 row-cols-md-3 mt-5 g-4 projectas">
           {/* ====================================== */}
           <div class="col">
          <Pulse>
            <div class="card">
              <div className="ui-card ">
                <img
                  className="img-fluid"
                  src="https://i.postimg.cc/HkWSbwfK/Screenshot-165.png"
                  alt=""
                />
                <div className="description">
                  <p className="project-detail-short">
                  This website is used only front-end.
                  You Want to see my Project please click any button.
                  </p>
                  <a className="m-2" href="https://amazing-liskov-d0791e.netlify.app/">
                    Live Demo
                  </a>
                  <Link to="/project5">Details</Link>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                {/* <h5 class="card-title">Project 5</h5> */}
                <p class="card-text">
                <ul>
                  <li>This website was created by React-Router-V6.</li>
                  <li>This is an educational website.</li>
                  <li>Fully responsive and user friendly.</li>
                  <li>Some animations have been used on this website</li>
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
                    href="https://silly-fermat-0208b6.netlify.app/"
                  >
                    Live Demo
                  </a>
                  <Link to="/project1">Details</Link>
                </div>
              </div>

              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                {/* <h5 class="card-title">Project 1</h5> */}
                <p class="card-text">
                <ul>
                  <li>Use register and login authentication.</li>
                  <li>The email address verification code is sent to verify your email.</li>
                  <li>Added Payment System.</li>
                  <li>Added Admin Control Dashboard. </li>
                  <li>Users can review my website.</li>
                  <li>Admin will be able to add new admin</li>
                  <li>Firebase tokens have been used for admin verification</li>
                </ul>
                </p>
              </div>
            </div>
            </Pulse>
          </div>
           {/* ====================================== */}
           <div class="col">
          <Pulse>
            <div class="card">
              <div className="ui-card ">
                <img
                  className="img-fluid"
                  src="https://i.postimg.cc/3RmKF0F2/Screenshot-152.png"
                  alt=""
                />
                <div className="description">
                  <p className="project-detail-short">
                  This website is used only front-end.
                  You Want to see my Project please click any button.
                  </p>
                  <a className="m-2" href="https://friendly-ramanujan-39d91c.netlify.app/">
                    Live Demo
                  </a>
                  <Link to="/project4">Details</Link>{" "}
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                {/* <h5 class="card-title">Project 4</h5> */}
                <p class="card-text">
                <ul>
                  <li><b>This website has been used in React Route V6</b></li>
                  <li>This website is for users to find the best Foods.</li>
                  <li><b>Using Local Storage</b></li>
                  <li>The email address verification code is sent to verify your email</li>
                  <li>Use Privet Route and admin Route.</li>
                  <li>Using Animation. </li>
                  <li>Firebase tokens have been used for admin verification</li>
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
                    href="https://first-delivery-97194.web.app"
                  >
                    Live Demo
                  </a>
                  <Link to="/project2">Details</Link>{" "}
                </div>
              </div>{" "}
              <div class="card-body">
                <h5 class="card-title">Project 4</h5>
                {/* <h5 class="card-title">Project 2</h5> */}
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
                <h5 class="card-title">Project 5</h5>
                {/* <h5 class="card-title">Project 3</h5> */}
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
         

          <div class="col">
          <Pulse>
            <div class="card">
              <div className="ui-card ">
                <img
                  className="img-fluid"
                  src="https://i.postimg.cc/fRNZCgt2/Screenshot-193.png"
                  alt=""
                />
                <div className="description">
                  <p className="project-detail-short">
                  This website is used only front-end.
                  You Want to see my Project please click any button.
                  </p>
                  <a className="m-2" href="https://majestic-semifreddo-d06171.netlify.app">
                    Live Demo
                  </a>
                  <Link to="/project6">Details</Link>{" "}
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Project 6</h5>
                {/* <h5 class="card-title">Project 3</h5> */}
                <p class="card-text">
                <ul>
                  <li>This website was created by front end only.</li>
                  <li>Use Animation and good looking.</li>
                  
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