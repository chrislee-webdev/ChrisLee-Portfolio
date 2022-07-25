// PORTFOLIO-COMPONENT

import React from "react";

function Portfolio() {

    return (
        <section className="my-5">
            <h2 className="portfolioHeader">Portfolio</h2>
            <div className="flex-row projectList">

                <div className="projectInfo">
                    <a href="https://intelligent-fromage-55037.herokuapp.com/">
                <img
                    src={require("../../assets/images/budget-tracker.png")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </a>
                <p>Budget Tracker</p>
                <a href="https://github.com/chrislee-webdev/pwa-budget-tracker">GitHub Repo</a>
                </div>

                <div className="projectInfo">
                <a href="https://chrislee-webdev.github.io/password-generator/">    
                <img
                    src={require("../../assets/images/password-generator.png")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </a>
                <p>Password Generator</p>
                <a href="https://github.com/chrislee-webdev/password-generator">GitHub Repo</a>
                </div>

                <div className="projectInfo">
                <a href="https://chrislee-webdev.github.io/workday-scheduler/">    
                <img
                    src={require("../../assets/images/workday-scheduler.png")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </a>
                <p>Workday Scheduler</p>
                <a href="https://github.com/chrislee-webdev/workday-scheduler">GitHub Repo</a>
                </div>

                <div className="projectInfo">
                <a href="https://young-taiga-91229.herokuapp.com/">
                <img
                    src={require("../../assets/images/note-taker.png")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </a>
                <p>Note Taker</p>
                <a href="https://github.com/chrislee-webdev/note-taker">GitHub Repo</a>
                </div>

                <div className="projectInfo">
                <a href="https://chrislee-webdev.github.io/weather-dashboard/">   
                <img
                    src={require("../../assets/images/weather-dashboard.png")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
                </a>
                <p>Weather Dashboard</p>
                <a href="https://github.com/chrislee-webdev/weather-dashboard">GitHub Repo</a>
                </div>

                <div className="projectInfo">
                <a href="https://github.com/chrislee-webdev/readme-generator">
                <img
                    src={require("../../assets/images/code-refactor.png")}
                    alt="Project Example"
                    className="img-thumbnail mx-1"                    
                />
                </a>
                <p>Code Refractor</p>
                <a href="https://github.com/chrislee-webdev/urban-octo-challenge">GitHub Repo</a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;