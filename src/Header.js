import React from 'react'
import './Header.css'
import PageviewIcon from '@mui/icons-material/Pageview';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../src/assets/Amazon-Logo.png'


function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src={logo}/>
      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        {/*logo*/}
        <PageviewIcon className='header__searchIcon'/>
      </div>
      <div className='header_nav'>
        <div className='header__option'>
            <span className='header__optionLineOne'>Hello Gueszt</span>
            <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
            <span className='header__optionLineOne'>Returnes </span>
            <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
        </div>
        <div className='header__optionBasket'>
            <ShoppingCartIcon/>
            <span className='header__optionLineTwo header__BasketCount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
