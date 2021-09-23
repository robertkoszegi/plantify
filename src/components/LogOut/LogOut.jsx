import React from "react";

class LogOut extends React.Component {
  //Logging out is as simple as removing the token from localstorage and resetting the user to null in state
  logout = () => {
    //we use removeItem on the localStorage to remove the token currently being held there
    localStorage.removeItem("token");

    //we use the setUserInState prop from the App components methods to change the Apps user state to null
    this.props.setUserInState(null);
  };

  render() {
    return (
      <div className="UserLogOut">
        {/* use props to fill information if its not null */}
        <button className="logoutButton" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default LogOut;
