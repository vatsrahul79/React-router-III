import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
    return (
        <div className="prod-item">
            <Link to={`/product/${props.id}`}>{props.name}</Link>
            <img src={props.img} alt={props.name} />
            <div>Price: {props.price}</div>
            <button onClick={()=>props.handleClick(props.id)}>ADD TO CART</button>
            

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

export default ProductItem
