// ABOUT-COMPONENT

import React from "react";

function About() {
    return (
        <section className="my-5">
            
            <h2 id="home">Christopher Lee</h2>
            <img src={require("../../assets/images/profilePhoto2.jpeg")} alt="Profile"></img>
            
            <p>
            I am a full stack web developer leveraging a background in psychology to build a more intuitive user exprience. I recently earned a certificate in Full Stack Development from the University of Minnesota - Twin Cities, with newly developped skills in CSS, JavaScript, MySQL, and MERN. With each project, my goal is to find ways to best engage the user for an impactful experience. I recently applied aspects of UX and agile development in recent project. I worked on a team of five to develop a single-page MERN application that helps local dog owners engage with other dog owners. I'm excited to leverage my skills in a fast-paced, quality driven environment and team to build more better experiences on the web.    
            </p>           
        </section>
    );
}

export default About;