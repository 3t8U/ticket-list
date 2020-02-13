import React from 'react';
import { Link } from 'react-router-dom';

// Import the styles




function Header(props) {
  var headerStyles = {
    backgroundColor: '#43dd64',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  };
  return (
    <div style={headerStyles}>
    <h1>Help Queue</h1>
    <h2>Travis, where you @?!?!</h2>
    <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>  
    </div>
  );
}




export default Header;
