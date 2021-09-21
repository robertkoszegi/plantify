
export default function OrderLineItem(props) {
    return (
        <div className="OrderLineItem">
            <div>{props.lineItem.item.name}</div>
        </div>
    )
}