import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navegation from '../Navegation/Navegation';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import SkillRateing from '../SkillRateing/SkillRateing';
import Skills from '../Skills/Skills';
import Timeline from '../Timeline/Timeline';

const Home = () => {
    return (
        <div>
            <Navegation></Navegation>
           <Banner></Banner>
           <Skills></Skills>
           <SkillRateing></SkillRateing>
           <Projects></Projects>
           <Service></Service>
            <Timeline></Timeline>
            <Footer></Footer>
        </div>
    );
};

export default Home;