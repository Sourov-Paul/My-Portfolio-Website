import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Projects from '../AllProjectComponent/Projects/Projects';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Service from '../Service/Service';
import SkillRateing from '../Skills/SkillRateing/SkillRateing';
import Skills from '../Skills/Skills';
import Timeline from '../Timeline/Timeline';
import './Home.css';



const Home = () => {
    return (
        <>
<Header/>
<Banner/>
<Skills/>
<SkillRateing/>
<Projects/>
<Service/>
<Timeline/>
<Footer/>

        </>
    );
};

export default Home;