import React from 'react'
import './checkout.css'
import checkoutImage from './assets/amazon-checkout.jpg'
import Subtotal from './Subtotal.js'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Header from './Header'

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <>
    <Header/>
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__add' src={checkoutImage} />
        <div>
            <h3>hello, {user?.email}</h3>
            <h2 className='checkout__title'>Your shopping basket</h2>
           
            {basket?.map((product) => (
            <CheckoutProduct
              key={2323} // Modification : Ajouter une clé unique pour chaque CheckoutProduct
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}

            {/*checkout product */}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal/>

        <h2> The sub came here</h2>

      </div>
    </div>
    </>
  )
}

export default Checkout
