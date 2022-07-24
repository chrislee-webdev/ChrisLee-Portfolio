// PORTFOLIO-COMPONENT

import React from "react";

function Portfolio() {

    return (
        <section className="my-5">
            <h2>Portfolio</h2>
            <div className="flex-row">
                <div>
                <p>Project name</p>
                <img
                    src={require("../../assets/images/image1.jpg")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </div>
                <div>
                <p>Project name</p>
                <img
                    src={require("../../assets/images/project2.jpg")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                
                </div>
                <div>
                <p>Project name</p>
                <img
                    src={require("../../assets/images/project3.jpg")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </div>
                <div>
                <p>Project name</p>
                <img
                    src={require("../../assets/images/project4.jpg")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </div>
                <div>
                <p>Project name</p>
                <img
                    src={require("../../assets/images/project5.jpg")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </div>
                <div>
                <p>Project name</p>
                <img
                    src={require("../../assets/images/project6.jpg")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                    
                />
                </div>
            </div>
        </section>
    )
}

export default Portfolio;