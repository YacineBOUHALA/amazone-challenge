import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';


export function basketTotal(basket) {
  let total = 0;
  for (let i = 0; i < basket.length; i++) {
    total = total + basket[i].price;
  }
  return total.toFixed(2);
}


function Subtotal() {
  const navigate = useNavigate()
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value)=>(
            <>
                <p>
                    Subtotal ({basket?.length}):
                    <strong> {basketTotal(basket)} $</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox'/> Cette Commande contien un cadeau
                </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'f'}
        
        />
      <button onClick={e => navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
