export default function WishListItem(props) {
    return (
        <div className="WishLineItem">
            <img src={`${props.wishLineItems.item.image}`} style={{width: 100}} /><br />
            {props.wishLineItems.item.name}<br />
            {props.wishLineItems.item.sunCond}<br />
            {props.wishLineItems.item.waterFreq}<br />
            Pet Friendly: {props.wishLineItems.item.petFriendly ? 'Yes' : 'No'}<br />
            {props.wishLineItems.item.price}<br />
            <button className="detailButton" onClick={()=>{props.handleAddToCart(props.wishLineItems.item)}}>Add to cart</button>
            <button className="detailButton" onClick={() => props.handleAddToWishListDatabase()}>Save WishList</button>

            {/* <button onClick={() => props.removeWish()}> Delete</button>  */}
        </div>
    )
}