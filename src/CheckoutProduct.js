import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    function removeFromBasket (){
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt={title} /> {/* Modification : Ajouter un attribut alt */}
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'> {/* Modification : Utiliser une div pour contenir les étoiles */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon  />
            ))}
        </div>
        <button className='remove__button' onClick={removeFromBasket}>Remove from basket</button>
      </div>
     
    </div>
  );
}

export default CheckoutProduct;
