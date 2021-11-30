import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Pulse from 'react-reveal/Pulse';



const Projects = () => {
    return (
      <div>
      
  <Pulse>
          
<div className="row container m-auto project1 ">
    <h3 className="website1">Project 1</h3>
    <div className="col-sm-12 col-md-4 col-lg-4"><img className=" text-center img-fluid" src="https://i.ibb.co/fxVfz7y/website1.png" alt="" /></div>
    <div className="col-sm-12 col-md-4 col-lg-4 texx">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quae distinctio aspernatur corporis, facilis alias libero.</div>
    <div className="col-sm-12 col-md-4 texx col-lg-4 mt-sm-3">
        <a className="websiteLink"  href="https://happy-shopping-camera.web.app">Live Demo</a>
        <Link className="moreDetails" to="">Details</Link>
        </div>
</div>
  </Pulse>
  <Pulse>
<div className="row container m-auto mt-5 project2">
    <h3 className="website2">Project 2</h3>
    <div className="col-sm-12 col-md-4 col-lg-4"><img className=" text-center img-fluid" src="https://i.ibb.co/KXTgrLC/website2.png" alt="" /></div>
    <div className="col-sm-12 col-md-4 col-lg-4 texx">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quae distinctio aspernatur corporis, facilis alias libero.</div>
    <div className="col-sm-12 col-md-4 texx col-lg-4 mt-sm-3">
        <a className="websiteLink"  href="https://first-delivery-97194.web.app">Live Demo</a>
        <Link className="moreDetails" to="">Details</Link>
        </div>
       
</div>
</Pulse>
<Pulse>
<div className="row container m-auto mt-5 project3">
    <h3 className="website3">Project 3</h3>
    <div className="col-sm-12 col-md-4 col-lg-4"><img className=" text-center img-fluid" src="https://i.ibb.co/gSccF8J/website3.png" alt="" /></div>
    <div className="col-sm-12 col-md-4 col-lg-4 texx">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quae distinctio aspernatur corporis, facilis alias libero.</div>
    <div className="col-sm-12 col-md-4 texx col-lg-4 mt-sm-3">
        <a className="websiteLink"  href="https://health-care-882d2.web.app/">Live Demo</a>
        <Link className="moreDetails" to="">Details</Link>
        </div>
</div>
</Pulse>
      </div>
    );
};

export default Projects;