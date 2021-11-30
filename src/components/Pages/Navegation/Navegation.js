import React from 'react';

import "./Navegation.css"



const Navegation = () => {

    return (
      <div className="">
            <nav className="fixed-top navbar navbar-expand-lg navbar-dark background-clr">
        <div className="container">
          <a className="navbar-brand" href="/home">SP Developer</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
             
              
              <li className="nav-item">
                <a className="nav-link " href="#service">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a href="https://form.jotform.com/213322330020432" className="nav-link ">Contact</a>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
      </div>
    );
};

export default Navegation;