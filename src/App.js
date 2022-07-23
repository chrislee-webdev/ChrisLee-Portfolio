// APP.JS

import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ProjectImages from './components/ProjectImages';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <ProjectImages></ProjectImages>
        <About></About>
      </main>
    </div>
  );
}

export default App;
