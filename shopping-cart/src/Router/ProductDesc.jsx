import React from 'react'
import data from "../utils/data.json"
const ProductDesc = (props) => {
    let {id} = props.match.params
    let item = data.find(item=>item.id===Number(id))

    if(!item) {
       return <div>No item found</div>
    }
    return (
        <div className="prod-item">
            <div>{item.name}</div>
            <img src={item.img} alt={item.name} />
            <div>Price: {item.price}</div>
            <button>ADD TO CART</button>
            <div>
                { item.categories.join(",") }
            </div>

            <style jsx>
            {`
                .prod-item{
                    width: 200px;
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 30px;
                    margin: 10px;
                }
            `}
            </style>
        </div>
    )
}

export default ProductDesc
