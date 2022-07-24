// APP.JS

import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import ProjectImages from './components/ProjectImages';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [projectList] = useState([
    {
      name: "portfolio",
      description: "Projects I have worked on"
    }
  ]);

  const [currentProjects, setCurrentProjects] = useState(projectList[0]);

  return (
    <div>
      <Nav
        projectList={projectList}
        setCurrentProjects={setCurrentProjects}
        currentProjects={currentProjects}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      >
      </Nav>
      <main>
        {/* <ContactForm></ContactForm>
        <ProjectImages currentProjects={currentProjects}></ProjectImages>
        <About></About> */}
        {!contactSelected ? (
          <>
          <ProjectImages currentProjects={currentProjects}></ProjectImages>
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;