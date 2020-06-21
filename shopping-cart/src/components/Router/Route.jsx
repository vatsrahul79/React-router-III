import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

function Dummy() {
    return (
        <h1>this is dummy component</h1>

    )
}

export default function DashboardRoutes() {
    return (
        <div>
            <Route path='/' component={Dummy}></Route>
            <Route path='/about' component={Dummy}></Route>
            <Route path='/footer' component={Dummy}></Route>
            <Route path='/navbar' component={Dummy}></Route>
            <Route path='/product' component={Dummy}></Route>
            <Route path='/shoppingcart' component={Dummy}></Route>
            <Route path='/faq' component={Dummy}></Route>
            <Route path='/login' component={Dummy}></Route>
        </div>

    )
}
