// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Navegation from './components/Pages/Navegation/Navegation';






const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/home" element={<Home></Home>} />
                    <Route path="/navegation" element={<Navegation></Navegation>} />
                    
                    <Route path="/about" element={<About></About>} />
                
                    
                </Routes>
            </Router>
        </div>
    );
};

export default App;