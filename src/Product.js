import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import leanProductImage from './assets/LeanProduct.jpg'

function Product({title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <small>{price}</small>
        </p>
        <div className='product___raiting'>
            <p>{rating} <StarIcon/></p>
        </div>
      </div>
      <img src={leanProductImage} alt=''/>
      <button>Ajouter au Panier</button>
    </div>
  )
}

export default Product
