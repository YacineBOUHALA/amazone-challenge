import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout.js';
import Payment from './Payment.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51Nc6mpKLlG5oRVG9B0F3lAYt9b5JPVK5HxGrO3hxCk7FUUW1JrA8fkYZXLzztzZeVbF38cLwUV5vvFL4rV1IjQ0a00gBz3FHN6"
);

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run ones when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('the user isd >>>', authUser);

      if (authUser) {
        //hs is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        //user loggged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Elements stripe={promise}><Payment /></Elements>} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
