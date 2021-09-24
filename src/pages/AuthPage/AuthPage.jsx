import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";



export default class AuthPage extends React.Component {
    state = {
    //   showLogin:false ,
    };
  
    render() {
      return (
        <main className="AuthPage">
          <div>
            <h3
              onClick={() => this.setState({ showLogin: !this.state.showLogin })}
            >
              {/* {this.state.showLogin ? "SIGN UP" : "LOG IN"} */}
            </h3>
          </div>
          {/* Another ternary operator! */}
          {/* If showLogin is true, show the login form. If false, show the signup form */}
          {/* {this.state.showLogin ? ( */}
            <LoginForm setUserInState={this.props.setUserInState} />
          {/* ) : ( */}
            <SignUpForm setUserInState={this.props.setUserInState} />
          {/* ) */}
          {/* } */}
        </main>
      );
    }
  }
  