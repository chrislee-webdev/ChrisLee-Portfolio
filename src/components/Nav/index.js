// NAV-COMPONENT

import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        projectList = [],
        setCurrentProjects,
        currentProjects,
        contactSelected,
        setContactSelected
    } = props;

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
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a href="about" onClick={() => setContactSelected(false)}>About me</a>
                    </li> 

                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>  
                    </li>

                    <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Resume</span>
                    </li>

                    {projectList.map((portfolio) => (
                        <li
                            className={`mx-2 ${
                                currentProjects.name === portfolio.name && !contactSelected &&
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