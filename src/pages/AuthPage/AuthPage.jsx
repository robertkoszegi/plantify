import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';



export default class AuthPage extends React.Component {
    state = {
    };
  
    render() {
      return (
        <main className="AuthPage">
          <div>
            <h3 
              onClick={() => this.setState({ showLogin: !this.state.showLogin })}
            >
            </h3>
          </div>
            <LoginForm setUserInState={this.props.setUserInState} />
            <SignUpForm setUserInState={this.props.setUserInState} />
        </main>
      );
    }
  }
  