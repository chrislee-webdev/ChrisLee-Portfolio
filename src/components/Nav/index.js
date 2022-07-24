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

                    <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Portfolio</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
} 

export default Nav;