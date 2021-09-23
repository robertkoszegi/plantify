

export default function PreviousOrdersItem(props) {
    console.log(props.order)
    let lineArray = props.order.lineItems.map(line => <li>{line.item.name} <br /> {line.item.price}</li>)
    return (
        <>
        
            <h3>{Date(props.order.createdAt)}</h3>
            <h3>item</h3>
            <div>
                <ul>
                    {lineArray} <br />
                    <span>Total: ${props.order.total}</span>
                </ul>
            </div>
        </>
        
    )
}