import React from 'react';
import Banner from '../Banner/Banner';
import Navegation from '../Navegation/Navegation';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navegation></Navegation>
           <Banner></Banner>
           <Skills></Skills>
           <Service></Service>
           <Projects></Projects>
        
    

        </div>
    );
};

export default Home;