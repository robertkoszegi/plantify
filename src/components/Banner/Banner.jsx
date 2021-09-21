import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

function Banner(props) {
    return (
      <div className="Banner">
        
          <h1 className="bannerText">Need help finding your perfect plant?</h1><br />
          <h1 className="bannerLine"> Try our <Link to='/quiz'>Plant-Picker,</Link> let's make this easy. </h1>
        
        <img src="./banner.jpg" alt="" />
      </div>
    );
  }
  
  // Must export the component's function (or class)
  export default Banner;
  