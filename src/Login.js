import React from 'react'
import './Login.css'
import logo from '../src/assets/logoLogin.jpg'
import {Link} from "react-router-dom";


function Login() {

  return (
    <div className='login'>
        <Link to='/'>
        
            <img  className='login__logo' src={logo}/>
        </Link>
            <div className='login___container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>
                    <h5>Password</h5>
                    <input type='password'/>
                    <button className='login__signInButton'>Sign-in</button>
                </form>
                <p>
                En créant un compte, vous acceptez les conditions générales de vente d’Amazon. Veuillez consulter notre notice Protection de vos Informations Personnelles, notre notice Cookies et notre notice Annonces publicitaires basées sur vos centres d’intérêt.
                </p>

                <button className='login___registrationButton'>Create your Amaezon Account</button>
                
            </div>
       

    </div>
  )
}

export default Login
