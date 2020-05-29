import React from 'react';
import NavBarcomp from "./comp/NavBar"
import FooterBar from "./comp/FooterBar"
import Home from './comp/Home'
import Portfolio from './comp/Portfolio'
import Contact from './comp/Contact'
import ProjectPage from "./comp/ProjectPage"
import {Container } from 'reactstrap';
import {Route,Switch} from "react-router-dom"

import './App.css';

function App() {




  return (
    <div className="App">
      {/* <css-doodle>{`
      :doodle {
        @grid: 5x5;
        @size:99vmax;
        grid-gap: 1px;
      }
      width: @rand(5%, 100%);
      background: #26c6da;
      `}    
    </css-doodle> */}
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
      <div className="holder">
        holder
      </div>
    </div>
  );
}

export default App;
