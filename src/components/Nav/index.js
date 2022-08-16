// NAV-COMPONENT

import React from "react";

function Nav({ currentPage, handlePageChange}) {


    return (
        <header>
            <h1 className="mx-2">Christopher Lee</h1>

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="/#" onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >Home</a>
                    </li> 

                    {/* <li className="mx-2">
                        <span onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</span>  
                    </li> */}

                    <li className="mx-2">
                        <span onClick={() => handlePageChange('Skills')}
                        className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
                        >Skills</span>
                    </li>

                    <li className="mx-2">
                        <span onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</span>
                    </li>

                    <li>
                        <a href="mailto:leechrs1@gmail.com">Email</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
} 

export default Nav;