import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from './pages/Home'
import SingleProduct from "./pages/SingleProduct";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' exact component={Home}/>
          <Route path="/product/:id" component={SingleProduct}/>
          <Route path='/cart/:id?' component={Cart}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
