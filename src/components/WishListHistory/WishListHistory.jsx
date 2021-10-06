export default function WishListHistory(props) {
    return (
        <div className="WishListHistory">
            {props.wishList.map(w => w.wishLineItems.map( x =>
            <div> 
                {x.item.name}
                {x.item.price}
            </div>
            
            ))}
        </div>
    )
}