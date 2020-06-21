import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

export  default function Navbar (){
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
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
                    <Link to="/shoppingcart">Cart</Link>
                </li>
                <li>
                    <Link to = "/login">Login</Link>
                </li>

            </ul>
        </div>

    )
}
