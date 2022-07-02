import { useState } from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import CheckoutScreen from './screens/CheckoutScreen';


function App() {
  const [sideToggle, setSideToggle]= useState(false);

  return (
    <Router>
      <Navbar click={()=>setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)} />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen click={()=>setSideToggle(true)}/>} />
          <Route exact path="/checkout" element={<CheckoutScreen />} />
        </Routes>
    </Router>
  );
}

export default App;
