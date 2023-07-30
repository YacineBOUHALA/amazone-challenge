import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

function Product({id , title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue()

  console.log('basket >>>>>>>>', basket)
  const addToBasket= () =>{
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <small>{price}</small>
        </p>
        <div className='product___raiting'>
            {Array(rating).fill().map((_, i)=>(
                <p><StarIcon/></p>
            ))}
            
        </div>
      </div>
      <img src={image} alt=''/>

      <button onClick={addToBasket}>Ajouter au Panier</button>
    </div>
  )
}

export default Product
