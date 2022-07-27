// NAV-COMPONENT

import React from "react";

function Nav({ currentPage, handlePageChange}) {


    return (
        <header>
            <h1 className="mx-2">Christopher Lee</h1>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About me</a>
                    </li> 

                    <li className="mx-2">
                        <span onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</span>  
                    </li>

                    <li className="mx-2">
                        <span onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >Resume</span>
                    </li>

                    <li className="mx-2">
                        <span onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
} 

export default Nav;