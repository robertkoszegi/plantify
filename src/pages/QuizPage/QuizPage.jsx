import React from 'react';
import Navigation from '../../components/Navigation/Navigation';


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
            </main>
        )
    }

}

export default QuizPage;