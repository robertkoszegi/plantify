import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'




export default class Navigation extends React.Component{
  state={
    activeCategory:''
  }
render(){
  return (
    <div className="navigationContent">
      <Link to="/home"> Plants </Link>
      <Link to="/quiz"> Take the plant quiz! </Link>
      {/* User AUTH will affect what shows, we'll need some conditionals */}
      <Link to="/wishlist"> WishList </Link>
      <Link to="/recommendations"> Recommended for you </Link>
      <Link to="/order"> Your Order </Link>
      <Link to='/#'><img src="./user.png" style={{width:15}} alt="" /></Link>
      {/* Do we have a login page? */}
    </div>
  );
}
}