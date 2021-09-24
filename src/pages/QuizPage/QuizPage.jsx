import React from 'react';
import './QuizPage.css';
import Navigation from '../../components/Navigation/Navigation';
import QuizForm from '../../components/QuizForm/QuizForm';


class QuizPage extends React.Component {
    state = {
    }
    render() {
        return(
            <main className="QuizPage">
                <nav className="Navigation">
                    <Navigation setUserInState={this.props.setUserInState}/>
                </nav>
                <h1>Plant Picker</h1>
                <QuizForm />
            </main>
        )
    }

}

export default QuizPage;