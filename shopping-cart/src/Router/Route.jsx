import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Product from './Product'
import Cart from './Cart'
import FAQ from './FAQ'
import Login from './Login'
import ContactUS from './ContactUS'
import ProductDesc from './ProductDesc'

function Dummy() {
    return (
        <h1>this is dummy component</h1>

    )
}

export default function DashboardRoutes(props) {
    const {app} = props
    return (
        <div>
            <Switch>
                <Route path='/' exact render={(props) =><Home {...props} app={app} />}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/contactus' component={ContactUS}></Route>
                <Route path='/product/:id' component={ProductDesc}></Route>
                <Route path='/shoppingcart' render={(props) =><Cart {...props} app={app} />}></Route>
                <Route path='/faq' component={FAQ}></Route>
                <Route path='/login'  render={(props) =><Login {...props} app={app} />}></Route>
            </Switch>
        </div>

    )
}
