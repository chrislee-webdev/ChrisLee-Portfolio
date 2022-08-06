// ABOUT-COMPONENT

import React from "react";

function About() {
    return (
        <section className="my-5">
            <h2 id="about">About me</h2>
            <img src={require("../../assets/images/profilePhoto2.jpeg")} alt="Profile"></img>
            <p>
            Hi! Thanks for taking the time to view my portfolio.
            </p>

            <p>My name is Chris Lee and I reside in Bloomington, Minnesota, just outside of Minneapolis. Though originally from New York, I have spent the majority of my life in Minnesota. I graduated from the University of Minnesota - Twin Cities with a degree in Psychology. I have spen the good amount of my professional career working in retail and sales. The last five years, I have worked as a at-home daycare provider with my fiance. This was an incredibly rewarding experience being a part of the lives of babies and watching them grow.</p>

            <p>
             Over the years, I have had an interest in web development but never really knew where to start nor did I have the confidence to learn such amazing new skills. At first I dabbled with free courses online and even signed up for a self-paced online program. During that time, I found that I really loved what I was learning, though by no means was it easy. Creating something that users can see on their web browsers with a few lines of code reminded me of building Legos as a child. When the pandemic came, my fiance and I re-evaluated what we wanted to do, what we wanted to get out of our careers and ultimately what we wanted to provide for our own children. So in February of 2022, I decided to enroll in the University of Minnesota - Twin Cities Online Bootcamp and I haven't looked back since. 
            </p>
        </section>
    );
}

export default About;