// NAV-COMPONENT

import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        projectList = [],
        setCurrentProjects,
        currentProjects
    } = props

    // useEffect
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentProjects.name);        
    }, [currentProjects]);

    // const [projectList] = useState([
    //     {
    //         name: "portfolio",
    //         description: "Projects that I have worked on"
    //     }
    // ])

    // const projectList = [
    //     {
    //         name: "portfolio",
    //         description: "Projects that I have worked on"
    //     }
    // ]

    // const [currentProjects, setCurrentProjects] = useState(projectList[0]);

    // function portfolioSelected(name) {
    //     console.log(`${name} clicked`)
    // }

    return (
        <header>
            <h1 className="mx-2">Christopher Lee</h1>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="about">About me</a>
                    </li> 

                    <li className="mx-2">
                        <a href="contact">Contact</a>  
                    </li>

                    <li className="mx-2">
                        <a href="resume">Resume</a>
                    </li>

                    {projectList.map((portfolio) => (
                        <li
                            className={`mx-2 ${
                                currentProjects.name === portfolio.name &&
                            'navActive'}`}
                            key={portfolio.name}
                        >
                            <span
                                onClick={() => {setCurrentProjects(portfolio)
                                }}
                            >
                                {capitalizeFirstLetter(portfolio.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
} 

export default Nav;