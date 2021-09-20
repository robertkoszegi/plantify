import React from 'react';
import Navigation from '../../components/Navigation/Navigation';


class WishListPage extends React.Component {
    state = {

    }


    render() {
        return(
            <main className="WishListPage">
                <nav className="Navigation">
                    <Navigation />
                </nav>
                <h1>WhishListPage</h1>
            </main>
        )
    }

}

export default WishListPage;