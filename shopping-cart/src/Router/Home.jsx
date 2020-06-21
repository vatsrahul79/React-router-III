import React from 'react'
import ProductItem from '../components/ProductItem'
import data from "../utils/data.json"
const Home = (props) => {
    const {app} = props

    const handleClick = (id) => {
        let item = data.find( item=>item.id===Number(id))
        console.log(app)
        app.addToCart(item)
    }
    
    let categories = {}

    data.forEach(item=> item.categories.forEach(a=>categories[a]?categories[a]++:categories[a]=1) )

    return (
        <>
        <select>
                { Object.keys(categories).map(item=> (
                <option key={item} value={item}>{item +" " + categories[item]}</option> 
                )) }
            </select>
        <div className="home">
            
            {
                data.map(item => <ProductItem key={item.id} {...item} handleClick={handleClick} />)
            }
            <style jsx>
                {`
                    .home{
                        display: flex;
                        flex-wrap: wrap;
                        padding: 10px
                    }
                `}
                </style>
        </div>
        </>
    )
}

export default Home
