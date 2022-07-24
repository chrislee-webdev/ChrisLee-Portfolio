// APP.JS

import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

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
        {!contactSelected ? (
          <About></About>
        ) : (
          <ContactForm></ContactForm>
        )}

        <Resume></Resume>

        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;