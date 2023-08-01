import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();

  function basketTotal(){
    let total = 0;
    for(let i= 0; i < basket.length; i++){
      total = total+ basket[i].price
    }
    console.log('baket toatal',total.toFixed(2))
    return total.toFixed(2);
  }
  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value)=>(
            <>
                <p>
                    Subtotal ({basket?.length}):
                    <strong> {basketTotal()} $</strong>
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
      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
