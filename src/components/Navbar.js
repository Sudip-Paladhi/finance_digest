import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          {/* Logo Image */}
          <Link to="/">
            <img 
              src="https://www.financedigest.com/wp-content/uploads/2016/11/fdigestlogo2-1.png" 
              alt="Blog Logo" 
              className="h-8" // Adjust the height as needed
            />
          </Link>
  
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/finance" className="text-white">Finance</Link>
            <Link to="/technology" className="text-white">Technology</Link>
            <Link to="/about-us" className="text-white">About Us</Link>
            <Link to="/login" className="text-white">Login</Link>
          </div>
  
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <span className="text-white">☰</span>
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <Link to="/" className="block text-white">Home</Link>
            <Link to="/finance" className="block text-white">Finance</Link>
            <Link to="/technology" className="block text-white">Technology</Link>
            <Link to="/about-us" className="block text-white">About Us</Link>
            <Link to="/login" className="block text-white">Login</Link>
          </div>
        )}
      </nav>
    );
  };
  
  export default Navbar;