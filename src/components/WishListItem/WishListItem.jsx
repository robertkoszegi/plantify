

export default function WishListItem(props) {
    return (
        <div className="WishLineItem">
            <div>{props.wishLineItems.item.name}</div>
            <div>{props.wishLineItems.item.sunCond}</div>
            {/* sunCond needs mapping to since it is an array */}
            <div>{props.wishLineItems.item.waterFreq}</div>
            <div>{props.wishLineItems.item.price}</div>
            <button onClick={() => props.removeWish()}> Delete</button> 
        </div>
    )
}