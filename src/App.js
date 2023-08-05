import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout.js'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login  from './Login';
import { useEffect } from 'react';
import {auth} from './firebase'
import {useStateValue} from './StateProvider'

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() =>{
    //will only run ones when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('the user isd >>>', authUser)

      if(authUser){
        //hs is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //user loggged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  //const location = useLocation();
  //const isLoginPage = location.pathname === '/login';
  return (
    <BrowserRouter>
      {/* BEM */}
      <div className="app">
      <Routes>
       
          
        </Routes>
          {/* header */}
          {/*<Header />*}
        
        {/* body */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
