import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [showcart,setshowcart]=useState(false);
  const showCartHandler=()=>{
    setshowcart(true);
  }
  const hideCartHandler = () => {
    setshowcart(false)
  }
 
  return (
    <div>
      
      {showcart && <Cart onCloseCart={hideCartHandler}/> }
      
      <Header onCart={showCartHandler} />
      <Meals />
    </div>
  );
}

export default App;
