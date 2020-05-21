import React from 'react';
import NavBarcomp from "./comp/NavBar"
import FooterBar from "./comp/FooterBar"
import Home from './comp/Home'
import Portfolio from './comp/Portfolio'
import Contact from './comp/Contact'
import ProjectPage from "./comp/ProjectPage"
import {Container } from 'reactstrap';
import {Route,Switch, Router} from "react-router-dom"

import './App.css';

function App() {




  return (
    <div className="App">
      <NavBarcomp/>
      <Container className="themed-container" fluid="sm">
        <Switch>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/project/:id" component={ProjectPage}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Container>
      <FooterBar/>
    </div>
  );
}

export default App;
