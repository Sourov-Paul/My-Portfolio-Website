import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
      

<footer> 
        <div className="container">



            <div className="main_footer">

                <div className="row ">
                    <div className="cmt1 col-sm-12 col-md-4 col-lg-4 sm-mt-5 mt-3">
                        <h2 className="location_icon"><i className="location fas fa-map-marker-alt"></i></h2>
                        <address className="address">
                            <span> <b>Address: </b> Kalihati,Tangail</span> <br />
                            <span> <b>Email: </b>sourovpaul583@gmail.com</span> <br />
                            <span> <b>Phone: </b>+8801643-559826</span>
            </address>
                    </div>
                    <div className="cmt2 col-sm-12 col-md-4 col-lg-2">
                        <h2 className="company_name">Company</h2>
                        <a className="link1" href="#">About </a> <br/>
                        <a className="link1" href="#">Project</a> <br/>
                        <a className="link1" href="#">Our Team</a> <br/>
                        <a className="link1" href="#">Terms Conditions</a> <br/>
                        <a className="link1" href="#">Submit Listing</a> <br/>
                    </div>


                    <div className="cmt4 col-sm-12 col-md-4 col-lg-4">
                        <h2 className="qoick_links">QUICK Links</h2>
                        <p className="infork">
                          
                           </p>
                    </div>
                </div>
            </div>
        </div>


        <div className="social_icons pe-5 d-flex flex-row-reverse">

            <i className="m-2 youtube fab fa-youtube"></i>
            <i className="m-2 linkedin fab fa-linkedin"></i>
            <i className="m-2 instagram fab fa-instagram-square"></i>
            <i className="m-2 facebook fab fa-facebook"></i>

        </div>
        </footer>

    );
};

export default Footer;