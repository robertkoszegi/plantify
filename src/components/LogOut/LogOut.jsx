import React from "react";

class LogOut extends React.Component {
  logout = () => {
    localStorage.removeItem("token");
    this.props.setUserInState(null);
  };

  render() {
    return (
      <div className="UserLogOut">
        <button className="logoutButton" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default LogOut;
