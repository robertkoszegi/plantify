import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import WishList from '../../components/WishList/WishList'


class WishListPage extends React.Component {

    render() {
        return(
            <main className="WishListPage">
                <nav className="Navigation">
                    <Navigation />
                </nav>
                <h1>WishListPage</h1>
                <WishList wishLineItems={this.props.wishLineItems}/>
            </main>
        )
    }

}

export default WishListPage;