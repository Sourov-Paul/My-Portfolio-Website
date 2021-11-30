import React from 'react';
import './Skills.css'
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';


const Skills = () => {


 
    let counter=0;
    setInterval(()=>{
        if(counter===70){
            clearInterval()
        }
        else{
            counter +=1;
            document.getElementById('number').innerHTML= counter+"%"
        }
      
    },[50])

// ====================
    let counter2=0;
    setInterval(()=>{
        if(counter2===80){
            clearInterval()
        }
        else{
            counter2 +=1;
            document.getElementById('number2').innerHTML= counter2+"%"
        }
      
    },[45])
    // =======================
    let counter3=0;
    setInterval(()=>{
        if(counter3===75){
            clearInterval()
        }
        else{
            counter3 +=1;
            document.getElementById('number3').innerHTML= counter3+"%"
        }
      
    },[50])
    // =======================
    let counter4=0;
    setInterval(()=>{
        if(counter4===85){
            clearInterval()
        }
        else{
            counter4 +=1;
            document.getElementById('number4').innerHTML= counter4+"%"
        }
      
    },[40])






    return (
      <Fade down className='skill-section'>
          <Spin className="">
          <h2 className="text-center">My Skills</h2>
          </Spin>
      <div className='main_skill_div '>
         
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <div id="number"></div>
              <span className="back_end">Back-End</span>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div>

        {/* 22222222222222222222222 */}
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <div id="number2"></div>
              <span className="react">React</span>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor2">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className="circle2"
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>


        {/* 33333333333333333 */}
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <div id="number3"></div>
              <span className="javascript">Javascript</span>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor3">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className="circle3"
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>


        {/* 44444444444444444 */}
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <div id="number4"></div> 
              <span className="bootstrap">Bootstrap</span>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor4">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className="circle4"
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      </Fade>
    );
};

export default Skills;