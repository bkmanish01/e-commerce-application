import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from 'react-router-dom';
import Product from "./components/Product";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* <Navbar /> */}



      {/* <Routes>
        <Route exact path="/products/:id" element={<Product />} />
      </Routes> */}

      <Routes>
        <Route exact path="/" element={ <Navbar />} /> 
        <Route exact path="/home" element={ <Home />} /> 
        <Route path="/about" element={ <About /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={ <Cart />} />
        <Route exact path="/signup" element={ <Register />} />
        <Route exact path="/login" element={ <Login />} />
      </Routes>
      {/* <Cart /> */}
    </>
  );
}

export default App;
