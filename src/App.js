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
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

   return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      >
      </Nav>
      <main>
        {!contactSelected ? (
          <About></About>
        ) : (
          <>
          <ContactForm></ContactForm>
          <Resume></Resume>
          <Portfolio></Portfolio>
          </>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;