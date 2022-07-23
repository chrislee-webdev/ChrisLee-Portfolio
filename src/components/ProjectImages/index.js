// PROJECTIMAGES-COMPONENT

import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers'
import image from "../../assets/images/image1.jpg"

function ProjectImages(props) {
    const currentProjects = {
        name:"portfolio",
        description:"Projects I have worked on"
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentProjects.name)}</h1>
            <p>{currentProjects.description}</p>
            <div>
                <img
                    src={image}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    )
}

export default ProjectImages;