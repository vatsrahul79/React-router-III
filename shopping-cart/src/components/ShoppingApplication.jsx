import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class ShoppingApplication extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <Navbar/>
                <div>
                {this.props.children}
                </div>
               
                <Footer/>
            </div>
        )
    }
}

export default ShoppingApplication