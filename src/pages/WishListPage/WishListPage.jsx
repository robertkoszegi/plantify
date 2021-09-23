import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import WishList from '../../components/WishList/WishList'


class WishListPage extends React.Component {
    state={
        wishHistory:[]
    }
  
    handleAddToWishListDatabase = async () => {
        try{
            let jwt = localStorage.getItem('token')

            this.setState({ wishLineItems: this.props.wishLineItems})
           
          let fetchResponse = await fetch("api/wishlist",{
            method: "POST",
            headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
            body: JSON.stringify({wishLineItems: this.props.wishLineItems}),
          })
          let serverResponse = await fetchResponse.json()
          console.log("Success:", serverResponse)
          //Flagged
          this.setState({wishLineItems:[]})
          } catch(err){
              console.log(err.message)
            console.log("Error:", err)
          }
      }
    //   removeWish = async () => {
    //       try{
    //           let fetchResponse = await fetch("/api/wishlist",{
    //               method:"POST",
    //               headers: {"Content-Type": "application/json"},
    //                 // body: JSON.stringify({wishLineItems: this.state.wishLineItems})
    //       })
    //       let serverResponse = await fetchResponse.json()
    //       console.log("Success:", serverResponse )
    //       this.setState({wishLineItems: []})
    //       }catch(err){
    //           console.log("Error:", err)
    //       }
    //   }    
      async componentDidMount(){
          try{
            let jwt = localStorage.getItem('token')

              let fetchWishListResponse = await fetch('/api/wishlist',{
                  headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt}})
              let wishlist = fetchWishListResponse.json();
              if (!fetchWishListResponse.ok) throw new Error("Could not fetch wishlist")
              this.setState({ wishHistory: wishlist})
            //   this.setState({ wishLineItems: wishlist})
          } catch(err){ 
              console.error('Error:', err)
          }
      }
    render() {
        return(
            <main className="WishListPage">
                <nav className="Navigation">
                    <Navigation />
                </nav>
                <h1>WishListPage</h1>
                <WishList wishLineItems={this.props.wishLineItems}/>
                <button onClick={() => this.handleAddToWishListDatabase()}>Save WishList</button>
            </main>
        )
    }

}

export default WishListPage;