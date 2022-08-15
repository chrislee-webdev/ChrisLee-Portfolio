import React, { useState } from "react";
import Nav from "../Nav";
import About from "../Home";
// import Contact from "../Contact"
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Footer from "../Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <About />;
      }
      // if (currentPage === 'Contact') {
      //   return <Contact />;
      // }
      if (currentPage === 'Skills') {
        return <Skills />;
      }
      return <Portfolio />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <main>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <footer>
          <Footer></Footer>
        </footer>
      </main>

    );
  }
  