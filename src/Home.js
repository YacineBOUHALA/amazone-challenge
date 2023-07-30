import React from 'react'
import "./Home.css"
import background from "./assets/background.jpg"
import Product from './Product'
import leanProductImage from './assets/LeanProduct.jpg'
import batter from './assets/batteur.jpg'
import alexa from './assets/alexa.jpg'
import smartWatch from './assets/smartWatch.jpg'
import ps5 from './assets/ps5.jpg'
import iphone from './assets/iphne.jpg'
import Header from './Header'

export default function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
        <div className='home__container'>
            <img className='back_image' src= {background} alt=''/>
            <div className='home__row'>
                <Product id='0' title='the Lean start' price={19.99}  image={leanProductImage} rating={3} />
                <Product id='1' title='batteur pour cuisine a domicile' price={299.99}  image={batter} rating={5} />
                
            </div>
            <div className='home__row'>
                <Product id='2' title='smart watch ' price={99.99}  image={smartWatch} rating={5} />
                <Product id='3' title='Amazon Alexa' price={56.99}  image={alexa} rating={4} />
                <Product id='4' title='PS5  by Amazon' price={399.98}  image={ps5} rating={5} />

            </div>
            <div className='home__row'>
                 <Product id='5' title='Iphone14 pro max' price={1400.00}  image={iphone} rating={5} />
            </div>
        </div>
      
    </div>
    </>
  )
}
