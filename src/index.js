import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Products from './products';
import Navbar from './navbar';
import Projects from './projects';
import Client from './clients';
import Why from './why';
import Knowledge  from './knowledge';
import Contact from './contact';
import Footer from './footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar />
    <Home />
    <Products />
    <Projects />
    <Client />
    <Why />
    <Knowledge />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
