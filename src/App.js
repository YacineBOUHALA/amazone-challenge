import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout.js'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login  from './Login';

function App() {
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
