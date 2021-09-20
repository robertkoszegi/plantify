import React from 'react';
import SignUpForm from '../../components/SingUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';



class AuthPage extends React.Component {
    state = {
        showLogin: true,
    }


    render() {
        return(
            <main className="WishListPage">
                
                <h1>Authentication</h1>
                <LoginForm />LoginForm
                <SignUpForm />SignUpForm
            </main>
        )
    }

}

export default AuthPage;