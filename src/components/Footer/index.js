// FOOTER-COMPONENT

import React from "react";

function Footer() {
    return(
        <footer>
            <div>
                <a href="https://github.com/chrislee-webdev" className="logoImages"><img src={require("../../assets/logo/Octocat.jpg")} width={50} height={50} alt="GitHub"></img></a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/christopher-lee-08a6ab7/" className="logoImages"><img src={require("../../assets/logo/LI-In-Bug.png")} width={50} height={50} alt="LinkedIn"></img></a>
            </div>

            <div>
            <a href="https://www.linkedin.com/in/christopher-lee-08a6ab7/" className="logoImages"><img src={require("../../assets/logo/twitter2021.png")} width={50} height={50} border-radius={50} alt="LinkedIn"></img></a>
            </div>
        </footer>
    );
}

export default Footer;