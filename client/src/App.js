import React from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Router path="/" component={Landing} />
        <div className="container">
          <Route path ="/" component ={Register} />
          <Route path = "/" component= {Login} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
