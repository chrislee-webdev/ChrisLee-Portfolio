// FOOTER-COMPONENT

import React from "react";

function Footer() {
    return(
        <footer>
            <div>
                <a href="https://github.com/chrislee-webdev" ><img src={require("../../assets/logo/GitHub_Logo_White.png")}  alt="GitHub" className="logoImages"></img></a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/christopher-lee-08a6ab7/" ><img src={require("../../assets/logo/LI-In-Bug.png")} alt="LinkedIn" className="logoImages"></img></a>
            </div>

            <div>
            <a href="https://www.linkedin.com/in/christopher-lee-08a6ab7/" ><img src={require("../../assets/logo/twitter2021.png")} alt="LinkedIn" className="logoImages"></img></a>
            </div>
        </footer>
    );
}

export default Footer;