import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component{
    constructor(){
        super();
        this.state ={

        }
    }
    render(){
        return(
            <div>
            <ul style={{display: 'flex'}}>
                <li>
                    Sitemap
                </li>
                <li>
                    About us
                </li>
                <li>

                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
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
}

export default Footer