// NAV-COMPONENT

import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav({ currentPage, handlePageChange}) {


    return (
        <header>
            <h1 className="mx-2">Christopher Lee</h1>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="about" onClick={() => handlePageChange('About')}>About me</a>
                    </li> 

                    <li className="mx-2">
                        <span onClick={() => handlePageChange('Contact')}>Contact</span>  
                    </li>

                    <li className="mx-2">
                        <span onClick={() => handlePageChange('Resume')}>Resume</span>
                    </li>

                    <li className="mx-2">
                        <span onClick={() => handlePageChange('Portfolio')}>Portfolio</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
} 

export default Nav;