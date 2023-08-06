import React, { useEffect, useState } from 'react'
import './Header.css'
import PageviewIcon from '@mui/icons-material/Pageview';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../src/assets/Amazon-Logo.png'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {auth} from './firebase'


function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const location = useLocation();
  const [isLoginPage, setIsLoginpage] = useState(false);

  const handleAuthentication = () =>{
    if(user){
      console.log(user)
      auth.signOut()
    }
  }
  return (
    <>
   
      <div className='header'>
        <Link to='/'>
          <img className='header_logo' src={logo}/>
        </Link>
        
        <div className='header_search'>
          <input className='header_searchInput' type='text'/>
          {/*logo*/}
          <PageviewIcon className='header__searchIcon'/>
        </div>
        <div className='header_nav'>
          <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className='header__option'>
                <span className='header__optionLineOne' >Hello {user ? user.email : 'Guest'}</span>
                <span className='header__optionLineTwo'> {user ? 'sign Out': 'sign In'}</span>
            </div>
          </Link>
        
          <div className='header__option'>
              <span className='header__optionLineOne'>Returnes </span>
              <span className='header__optionLineTwo'>& Orders</span>
          </div>
          <div className='header__option'>
              <span className='header__optionLineOne'>Your</span>
              <span className='header__optionLineTwo'>Prime</span>
          </div>
          <div className='header__optionBasket'>
            <Link to='/checkout'>
              <ShoppingCartIcon className='logo__panier'/>
              </Link>
              <span className='header__optionLineTwo header__BasketCount'>{basket?.length}</span>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Header
