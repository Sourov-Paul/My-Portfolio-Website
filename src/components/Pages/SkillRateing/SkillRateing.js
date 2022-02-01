import React from 'react';
import HappyClient from '../HappyClient/HappyClient';
import './SkillRateing.css';


const SkillRateing = () => {





    return (
        <div className='mainSkillRate'>
        <div className='container'>
			<HappyClient></HappyClient>
            <h1 className='skillShowing'>I am showing my work skills here:)</h1>

<div class="skillbar clearfix " data-percent="95%">
	<div class="skillbar-title" style={{background: "#fdcb6e"}}><span>HTML5</span></div>
	<div class="skillbar-bar" style={{background: '#ffeaa7'}}></div>
	<div class="skill-bar-percent Count">95</div>
</div> 

<div class="skillbar clearfix " data-percent="85%">
	<div class="skillbar-title" style={{background: '#2980b9'}}><span>CSS3</span></div>
	<div class="skillbar-bar" style={{background: '#3498db'}}></div>
	<div class="skill-bar-percent Count">85</div>
</div> 

<div class="skillbar clearfix " data-percent="85%">
	<div class="skillbar-title" style={{background: '#2c3e50'}}><span>Bootstrap</span></div>
	<div class="skillbar-bar" style={{background: '#2c3e50'}}></div>
	<div class="skill-bar-percent Count">85</div>
</div> 

<div class="skillbar clearfix " data-percent="80%">
	<div class="skillbar-title" style={{background: '#7158e2'}}><span>JavaScript ES6</span></div>
	<div class="skillbar-bar" style={{background: '#7d5fff'}}></div>
	<div class="skill-bar-percent Count">80</div>
</div> 

<div class="skillbar clearfix " data-percent="80%">
	<div class="skillbar-title" style={{background: '#d63031'}}><span>React.js</span></div>
	<div class="skillbar-bar" style={{background: '#ff7675'}}></div>
	<div class="skill-bar-percent Count">80</div>
</div> 

<div class="skillbar clearfix " data-percent="85%">
	<div class="skillbar-title" style={{background: '#27ae60'}}><span>Node.js</span></div>
	<div class="skillbar-bar" style={{background: '#2ecc71'}}></div>
	<div class="skill-bar-percent Single Count">85</div>
</div> 

<div class="skillbar clearfix " data-percent="96%">
	<div class="skillbar-title" style={{background: '#124e8c'}}><span>MongoDB</span></div>
	<div class="skillbar-bar" style={{background: '#4288d0'}}></div>
	<div class="skill-bar-percent Count">70</div>
</div> 

<div class="skillbar clearfix " data-percent="80%">
	<div class="skillbar-title" style={{background: '#ffa502'}}><span>Firebase</span></div>
	<div class="skillbar-bar" style={{background: '#eccc68'}}></div>
	<div class="skill-bar-percent Count">80</div>
</div> 

<div class="skillbar clearfix " data-percent="87%">
	<div class="skillbar-title" style={{background: '#00b894'}}><span>Animation</span></div>
	<div class="skillbar-bar" style={{background: '#55efc4'}}></div>
	<div class="skill-bar-percent Count">70</div>
</div> 

<div class="skillbar clearfix " data-percent="100%">
	<div class="skillbar-title" style={{background: '#e84393'}}><span>Responsive</span></div>
	<div class="skillbar-bar" style={{background: '#fd79a8'}}></div>
	<div class="skill-bar-percent Count">100</div>
</div> 

        </div>
        </div>
    );
};

export default SkillRateing;