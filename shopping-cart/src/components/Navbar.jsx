import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

export  default function Navbar (props){
    return (
        <div>
            <ul style={{display: 'flex'}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contactus">Contact Us</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/shoppingcart">Cart [ {props.getCartItemsLength()} ]</Link>
                </li>
                <li>
                    <Link to = "/login">Login</Link>
                </li>

            </ul>
            <style jsx>
                {`
                    ul > li {
                        margin: 20px
                    }
                `}
            </style>
        </div>

    )
}
