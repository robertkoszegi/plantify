import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import WishList from '../../components/WishList/WishList'
import WishListHistory from '../../components/WishListHistory/WishListHistory'
import './WishListPage.css'


class WishListPage extends React.Component {
    state ={
        wishList:[]
    }

    //Future features to enable, wishlist does not sustain through reload as of now
    //   removeWish = async () => {
    //       try{
    //           let fetchResponse = await fetch("/api/wishlist",{
    //               method:"POST",
    //               headers: {"Content-Type": "application/json"},
    //             // body: JSON.stringify({wishLineItems: this.state.wishLineItems})
    //       })
    //       let serverResponse = await fetchResponse.json()
    //       this.setState({wishLineItems: []})
    //       }catch(err){
    //           console.log("Error:", err)
    //       }
    //   }    
      async componentDidMount(){
          try{
            let jwt = localStorage.getItem('token')

              let fetchWishListResponse = await fetch('/api/wishlist',{headers: {'Authorization': 'Bearer ' + jwt}})
              let wishlist = await fetchWishListResponse.json();
              if (!fetchWishListResponse.ok) throw new Error("Could not fetch wishlist")
              this.setState({ wishList: wishlist})
            //   this.setState({ wishLineItems: wishlist})
          } catch(err){ 
              console.error('Error:', err)
          }
      }
      
      render() {
        // let wishlistHistory = this.state.wishList.map(i => <p> {i.wishLineItems.item.name}</p>)
         return(
            <main className="WishListPage">
                <nav className="Navigation">
                    <Navigation setUserInState={this.props.setUserInState}/>
                </nav>
                <h1>WishListPage</h1>
                <WishList wishList={this.state.wishList} removeWish={this.removeWish} wishLineItems={this.props.wishLineItems} handleAddToWishListDatabase={this.props.handleAddToWishListDatabase} handleAddToCart={this.props.handleAddToCart}/>
                <WishListHistory wishList={this.state.wishList} />
            </main>
        )
    }

}

export default WishListPage;