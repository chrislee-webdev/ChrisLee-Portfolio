// PORTFOLIO-COMPONENT

import React from "react";
// import { capitalizeFirstLetter } from '../../utils/helpers'
// import image from "../../assets/images/image1.jpg"

function ProjectImages({props}) {

    return (
        <section>
            <h1>Portfolio</h1>
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
                    src={require("../../assets/images/image1.jpg")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                
                </div>
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
                    src={require("../../assets/images/image1.jpg")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </div>
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
                    src={require("../../assets/images/image1.jpg")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </div>
            </div>
        </section>
    )
}

export default ProjectImages;