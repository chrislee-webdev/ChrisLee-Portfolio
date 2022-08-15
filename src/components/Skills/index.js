// Skills-COMPONENT

import React from "react";

function Skills() {
    return(
        <section className="my-5">
            <h2>Technical Skills</h2>
            
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Mobile-first responsive web design</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
            </ul>
            <div>
                Download my resume 
                <a href={require("../../assets/2022-Resume.pdf")} download className="download"> here</a>
            </div>
        </section>  
    )
}

export default Skills;