// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Navegation from './components/Pages/Navegation/Navegation';
import Project1 from './components/Pages/AllProjects/Project1/Project1';
import Project2 from './components/Pages/AllProjects/Project2/Project2';
import Project3 from './components/Pages/AllProjects/Project3/Project3';
import NotFound from './components/Pages/NotFound/NotFound';
import Project4 from './components/Pages/AllProjects/Project4/Project4';
import Project5 from './components/Pages/AllProjects/Project5/Project5';






const App = () => {
   
    return (
        <div>
           
            <Router>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/home" element={<Home></Home>} />
                    <Route path="/navegation" element={<Navegation></Navegation>} />
                    <Route path="/project1" element={<Project1></Project1>} />
                    <Route path="/project2" element={<Project2></Project2>} />
                    <Route path="/project3" element={<Project3></Project3>} />
                    <Route path="/project4" element={<Project4></Project4>} />
                    <Route path='/project5' element={<Project5></Project5>}/>
                    <Route path="/about" element={<About></About>} />
                    <Route path="*" element={<NotFound></NotFound>} />
                    
                </Routes>
            </Router>
        </div>
    );
};

export default App;