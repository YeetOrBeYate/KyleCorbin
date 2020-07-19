import React from 'react';
import NavBarcomp from "./comp/NavBar"
import FooterBar from "./comp/FooterBar"
import Home from './comp/Home'
import Portfolio from './comp/Portfolio'
import Contact from './comp/Contact'
import ProjectPage from "./comp/ProjectPage"
import {Container } from 'reactstrap';
import {Route,Switch} from "react-router-dom"
import {updateDoodle} from "./Util/Utils"


import './App.css';
import "./Animations/page.css"

function App() {

  return (
    <div className="App">
      <NavBarcomp/>
      <div className="containFlex">
        <div className="display" onClick={()=>updateDoodle()}>
        <css-doodle>{`
          :doodle {
            @grid: 6x4;
            background: #0a0c27;
            width:100%;
            height:100%
          }
          background: rgba(120, 137, 232, @rand(.9));
          transition: .2s ease @rand(200ms);
          transform: rotate(@rand(360deg));
          clip-path: polygon(
            @rand(100%) 0, 100% @rand(100%), 0 @rand(100%)
          );
        `}  
        </css-doodle>
        </div>
        <Container className="themed-container" fluid="sm">
          <Switch>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/project/:id" component={ProjectPage}/>
            <Route path='/' component={Home}/>
          </Switch>
        </Container>
        <div className="display" onClick={()=>updateDoodle()}>
        <css-doodle>{`
            :doodle {
              @grid: 6x4;
              background: #0a0c27;
              width:100%;
              height:100%
            }
            background: rgba(120, 137, 232, @rand(.9));
            transition: .2s ease @rand(200ms);
            transform: rotate(@rand(360deg));
            clip-path: polygon(
              @rand(100%) 0, 100% @rand(100%), 0 @rand(100%)
            );
        `}  
        </css-doodle>
        </div>
      </div>
      <FooterBar/>
    </div>
  );
}

export default App;
