import React from 'react'
import "./Home.css"
import background from "./assets/background.jpg"
import Product from './Product'
import leanProductImage from './assets/LeanProduct.jpg'

export default function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='back_image' src= {background} alt=''/>
            <div className='home__row'>
                <Product title='the Lean start' price={19.99}  image={leanProductImage} rating={5} />
                <Product/>
                
            </div>
            <div className='home__row'>
                <Product/>
                <Product/>
                <Product/>

            </div>
            <div className='home__row'>
                <Product/>
            </div>
        </div>
      
    </div>
  )
}
