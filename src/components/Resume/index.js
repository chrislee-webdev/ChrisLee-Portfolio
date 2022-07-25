// RESUME-COMPONENT

import React from "react";

function Resume() {
    return(
        <section className="my-5">
            <h2>Resume</h2>

            <h4>Proficiencies</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Mobile-first responsive web design</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React</li>
            </ul>
            <div>
                Download my resume 
                <a href={require("../../assets/2021_Resume.pdf")} download className="download">here</a>
            </div>
        </section>  
    )
}

export default Resume;