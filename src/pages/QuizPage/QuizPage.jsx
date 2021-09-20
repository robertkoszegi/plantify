import React from 'react';
import './QuizPage.css'
import Navigation from '../../components/Navigation/Navigation';
import QuizForm from '../../components/QuizForm/QuizForm';


class QuizPage extends React.Component {
    state = {

    }


    render() {
        return(
            <main className="QuizPage">
                <nav className="Navigation">
                    <Navigation />
                </nav>
                <h1>QuizPage</h1>
                <QuizForm />QuizForm
            </main>
        )
    }

}

export default QuizPage;