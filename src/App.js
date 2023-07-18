import './App.css';
import Header from './Header';
import Home from './Home'

function App() {
  return (
    //BEM
    <div className="app">
      {/*header*/}
      <Header/>
       {/*body*/}
       <Home/>
    </div>
  );
}

export default App;
