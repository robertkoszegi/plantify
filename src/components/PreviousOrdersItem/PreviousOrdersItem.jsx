// import ListGroup from 'react-bootstrap/ListGroup'

export default function PreviousOrdersItem(props) {
    console.log(props.order)
    let lineArray = props.order.lineItems.map(line => <li><strong>{line.item.name}</strong> <br /> {line.item.price}</li>)
    
    let formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });

    return (
        <>
            <h3>{formatter.format(Date.parse(props.order.createdAt))}</h3>
            <div>
                <ul>
                    {lineArray} <br />
                    <span>Total: ${props.order.total}</span>
                </ul>
            </div>
        </>
        
    )
}