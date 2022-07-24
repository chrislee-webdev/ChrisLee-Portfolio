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

  // AskBCS said I don't need to set the below useStates to false
  // const [resumeSelected, setResumeSelected] = useState(false);
  // const [portfolioSelected, setPortfolioSelected] = useState(false);

   return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        // resumeSelected={resumeSelected}
        // setResumeSelected={setResumeSelected}
        // portfolioSelected={portfolioSelected}
        // setPortfolioSelected={setPortfolioSelected}
      >
      </Nav>
      <main>

        <About></About>

        <ContactForm></ContactForm>

        <Resume></Resume>

        <Portfolio></Portfolio>
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

// Moved the original code to the bottom to try and get the page to render properly

// {!contactSelected ? (
//   <About></About>
// ) : (
//   <>
//   <ContactForm></ContactForm>
//   <Resume></Resume>
//   <Portfolio></Portfolio>
//   </>
// )}