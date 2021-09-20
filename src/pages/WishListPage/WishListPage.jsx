import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import WhishList from '../../components/WishList/WhishList'


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
                <WhishList />
            </main>
        )
    }

}

export default WishListPage;