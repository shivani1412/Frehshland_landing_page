import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Item from "./components/Items";
//import Seasonal from "./components/seasonal";
import Impact from "./components/Impact";
import Newsletter from "./components/newsletter";
import Prices from "./components/prices";
import Footer from "./components/footer";
import Product from "./components/Products";


function App() {
  return (
    <>
      <div>
     
        <Routes>
          <Route path="/product-detail" element={<Product />} />
          {/* Your existing components go here */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

// Create a separate component for the "/" route content
function Home() {
  return (
    <>
    <Header/>
    <Item />
    <Impact />
    <Newsletter />
    <Prices />
      

    
    </>
  );
}

export default App;
