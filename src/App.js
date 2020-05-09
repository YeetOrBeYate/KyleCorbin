import React from 'react';
import NavBarcomp from "./comp/NavBar"
import FooterBar from "./comp/FooterBar"
import Home from './comp/Home'
import {Container } from 'reactstrap';
import {Route} from "react-router-dom"

import self from "./img/self.jpg"
import './App.css';

function App() {




  return (
    <div className="App">
      <NavBarcomp/>
      <Container className="themed-container" fluid="sm">
        <Route path='/' component={Home}/>
      </Container>
      <FooterBar/>
    </div>
  );
}

export default App;
