import React, { useEffect, useState } from 'react'
import './Payement.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Header from './Header'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import {basketTotal}   from './Subtotal'
import axios from 'axios' 

const Payment = () => {
    const [{basket, user, fullTotal}, dispatch] = useStateValue()
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(null)
    const [Processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)
    const navigate = useNavigate()

    const stripe = useStripe();
    const element = useElements();
    useEffect(()=>{
        const getClientSecret = async () =>{
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${basketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        //getClientSecret();
    }, [basket])

    const handleSabmit = async e => {
        e.preventDefautl();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: element.getElement(CardElement)
            }
          }).then(({PaymentIntent}) =>{
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            navigate('/order')
          })
    }

    const handleChange = e => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "");

    }
  return (
    <>
        <Header/>
        <div className='payment'>
            <div className='container'>
                <h1> Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Adresse de livraison:</h3>
                </div>
                <div className='payment__adress'>
                    <p>{user?.email}</p>
                    <p>2 rue pablo picasso</p>
                    <p>94000, créteil</p>
                </div>

            </div>
            <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>revoir les éléments et la livraison</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                title= {item.title}
                                image= {item.image}
                                price= {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment méthod</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSabmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payement__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={basketTotal(basket)}
                                displayType='text'
                                thousandSeparator={true}
                                prefix='$'
                            
                            />
                            <button disabled={Processing || disabled || succeeded }>
                                <span>{Processing ? <p>Processing</p> :  "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>

            </div>
            </div>
        
        </div>
    </>
  )
}

export default Payment
