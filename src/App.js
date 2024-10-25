import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store'; // Create this file next
import Navbar from './components/Navbar';
import Home from './components/Home';
import Finance from './components/Finance';
import Technology from './components/Technology';
import AboutUs from './components/AboutUs';
import LoginButton from './components/LoginButton';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<LoginButton />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
