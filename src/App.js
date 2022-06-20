// import logo from './logo.svg';
import { Routes,Route } from "react-router-dom";
import About from "./Components/About/About";
import Project1 from "./Components/AllProjects/Project1/Project1";
import Project2 from "./Components/AllProjects/Project2/Project2";
import Project3 from "./Components/AllProjects/Project3/Project3";
import Project4 from "./Components/AllProjects/Project4/Project4";
import Project5 from "./Components/AllProjects/Project5/Project5";
import Project6 from "./Components/AllProjects/Project6/Project6";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./NotFound/NotFound";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/navegation" element={<Header></Header>} />
        <Route path="/project1" element={<Project1></Project1>} />
        <Route path="/project2" element={<Project2></Project2>} />
        <Route path="/project3" element={<Project3></Project3>} />
        <Route path="/project4" element={<Project4></Project4>} />
        <Route path="/project5" element={<Project5></Project5>} />
        <Route path="/project6" element={<Project6></Project6>} />
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </>
  );
}

export default App;
