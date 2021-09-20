import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


function Navigation(props) {
    return (
      <div className="Navigation">
        <Link to="/home"> Plants </Link>
        <Link to="/quiz"> Take the plant quiz! </Link>
        {/* User AUTH will affect what shows, we'll need some conditionals */}
        <Link to="/wishlist"> WishList </Link>
        <Link to="/recommendations"> Recommended for you </Link><br />
        {/* Do we have a login page? */}
      </div>
    );
  }
  
  // Must export the component's function (or class)
  export default Navigation;
  