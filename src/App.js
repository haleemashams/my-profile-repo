import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  const imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfiaEE4srwVVUsQohMYWsfJcEWr2L5tdQMxYUvl3BM&s';

  // Step 1: Create a state variable for the theme
  const [theme, setTheme] = useState('gray'); // Default theme is gray

  // Step 2: Function to toggle between gray and black themes
  const toggleTheme = () => {
    setTheme(theme === 'gray' ? 'black' : 'gray');
  };

  return (
    <div className={`App ${theme}-theme`}>
      <Navbar toggleTheme={toggleTheme} />
      {/* Pass theme as a prop to CenteredImageContainer */}
      <CenteredImageContainer theme={theme} imageUrl={imageUrl} />
    </div>
  );
}

function Navbar({ toggleTheme }) {
  const navbarStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")`, // Apply the background image
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="navbar-logo">
        <a href="/">Material Kit React</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">COMPONENTS</a>
        </li>
        <li>
          <a href="/about">UPGRADE TO PRO</a>
        </li>
        <li>
          <a href="/services">DOWNLOAD</a>
        </li>
        <li className="social-icons">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        {/* Toggle button to switch between themes */}
        <li>
          <button onClick={toggleTheme} className="theme-button">
            Darkmode
          </button>
        </li>
      </ul>
    </nav>
  );
}

function CenteredImageContainer({ theme, imageUrl }) {
  const containerStyle = {
    backgroundColor: theme === 'white' ? 'black' : 'white', // Apply theme-based background color
    color: theme === 'gray' ? 'black' : 'black', // Apply theme-based text color
  };

  return (
    <div className="centered-image-container" style={containerStyle}>
      <div className="centre">
        <img
          className="centre profile-image"
          src={imageUrl}
          alt="Profile picture of Haleema shams"
        />
        <h1 className="font">Haleema Shams</h1>
        <h3 className="font">WEB DEVELOPER</h3>
        <div>
          <ul>
            <li className="social">
              <a className="ficon" href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="ficon" href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="ficon" href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
        <p className="para">
          “A Web Developer is a professional who is responsible for the design and construction of websites .<br/> They ensure that sites meet user expectations by ensuring they look good, <br/>run smoothly and offer easy access points with no loading issues between pages or error messages.”
        </p>
      </div>
    </div>
  );
}

export default App;
