// NAV-COMPONENT

import React from "react";

function Nav() {

    const projectList = [
        {
            name: "portfolio",
            description: "Projects that I have worked on"
        }
    ]

    function portfolioSelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h1 className="mx-2">Christopher Lee</h1>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="about">About me</a>
                    </li> 

                    <li className="mx-2">
                        <a href="mx-2">Contact</a>  
                    </li>

                    <li className="mx-2">
                        <a href="mx-2">Resume</a>
                    </li>

                    {projectList.map((portfolio) => (
                        <li
                            className="mx-2"
                            key={portfolio.name}
                        >
                            <span onClick={portfolioSelected} >
                                {portfolio.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
} 

export default Nav;