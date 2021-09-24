import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import LogOut from '../../components/LogOut/LogOut'

export default class Navigation extends React.Component{
  state={
    activeCategory:''
  }
render(){
  return (
    <div className="navigationContent">
      <Link to="/home"> Plants </Link>
      <Link to="/quiz"> Take the plant quiz! </Link>
      <Link to="/wishlist"> WishList </Link>
      {/* Recommendations will eventually be added to database to sustain through user model */}
      <Link to="/recommendations"> Recommended for you </Link>
      <Link to="/order"> Your Order </Link>
      <LogOut user={this.props.user} setUserInState={this.props.setUserInState}/>
    </div>
  );
}
}