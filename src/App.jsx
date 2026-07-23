import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from './pages/home/home'
import Collection from "./pages/collection/collection";
import Fabrics from "./pages/fabrics/fabrics";
import Craftsmanship from "./pages/craftsmanship/craftsmanship";
import Occasion from "./pages/occasions/occasions";
import Heritage from "./pages/heritage/heritage";
import Cart from "./pages/cart/cart";
import CollectionProducts from "./pages/collectionProducts/collectionProducts";
import Checkout from "./pages/checkout/checkout";
import Profile from "./pages/profile/profile";
import Product from "./pages/product/product";
import Login from "./pages/login/login"
import Signup from "./pages/signup/signup";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";

function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/fabrics" element={<Fabrics />} />
        <Route path="/craftsmanship" element={<Craftsmanship />} />
        <Route path="/occasion" element={<Occasion />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/collection/:handle" element={<CollectionProducts />}
        /> */}
        <Route path="/collection/:handle" element={<CollectionProducts />} />

        <Route path="/occasion/:handle" element={<CollectionProducts />} />
        <Route path="/fabrics/:handle" element={<CollectionProducts />} />
        <Route path="/product/:handle" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />


      </Routes>

      <Footer />
    </>
  )
}

export default App
