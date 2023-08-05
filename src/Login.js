import React, { useState } from 'react'
import './Login.css'
import logo from '../src/assets/logoLogin.jpg'
import {Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';


function Login() {
    const navigate = useNavigate ();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth=>{
            navigate('/')
        }).catch(error=>alert(error.message))
        // somme fansy firebase
    }

    const register = e =>{
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            console.log(auth);
            if(auth){
                navigate ('/')
            }
        }).catch(error => alert(error.message))
        // somme fansy firebase

    }

  return (
    <div className='login'>
        <Link to='/'>
        
            <img  className='login__logo' src={logo}/>
        </Link>
            <div className='login___container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign-in</button>
                </form>
                <p>
                En créant un compte, vous acceptez les conditions générales de vente d’Amazon. Veuillez consulter notre notice Protection de vos Informations Personnelles, notre notice Cookies et notre notice Annonces publicitaires basées sur vos centres d’intérêt.
                </p>

                <button onClick={register} className='login___registrationButton'>Create your Amaezon Account</button>
                
            </div>
       

    </div>
  )
}

export default Login
