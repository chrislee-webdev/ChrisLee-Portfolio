import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import Contact from "../Contact"
import Resume from "../Resume";
import Portfolio from "../Portfolio";
// import Footer from "../Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Portfolio />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <main>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </main>
    );
  }
  