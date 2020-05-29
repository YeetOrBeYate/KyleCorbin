import React from 'react';
import NavBarcomp from "./comp/NavBar"
import FooterBar from "./comp/FooterBar"
import Home from './comp/Home'
import Portfolio from './comp/Portfolio'
import Contact from './comp/Contact'
import ProjectPage from "./comp/ProjectPage"
import {Container } from 'reactstrap';
import {Route,Switch} from "react-router-dom"

import {useSelector,useDispatch} from 'react-redux'

import './App.css';

function App() {

  
  const dispatch = useDispatch()

  const Portfoliostore = useSelector(state=>state.Projects)

  const updateDoodle=()=>{
    let doodle = document.querySelector('css-doodle');

    doodle.update();
  }




  return (
    <div className="App">
      <NavBarcomp/>
      <div style={{height:'420px'}} onClick={()=>updateDoodle()}>
        <css-doodle>{`
            :doodle {
              @grid: 18 ;
              background: #0a0c27;
              width:100%;
              height:100%
            }
            --hue: calc(180 + 1.5 * @row * @col);
            background: hsl(var(--hue), 50%, 70%);
            margin: -.5px;
            transition: @r(.5s) ease;
            clip-path: polygon(@pick(
              '0 0, 100% 0, 100% 100%',
              '0 0, 100% 0, 0 100%',
              '0 0, 100% 100%, 0 100%',
              '100% 0, 100% 100%, 0 100%'
            ));
          `}  
          </css-doodle>
      </div>
        <div className="containFlex">
          <div className="test">
          {/* <css-doodle>{`
            :doodle {
              @grid: 18 ;
              background: #0a0c27;
              width:100%;
              height:100%
            }
            --hue: calc(180 + 1.5 * @row * @col);
            background: hsl(var(--hue), 50%, 70%);
            margin: -.5px;
            transition: @r(.5s) ease;
            clip-path: polygon(@pick(
              '0 0, 100% 0, 100% 100%',
              '0 0, 100% 0, 0 100%',
              '0 0, 100% 100%, 0 100%',
              '100% 0, 100% 100%, 0 100%'
            ));
          `}  
          </css-doodle> */}
          </div>
          <Container className="themed-container" fluid="sm">
            <Switch>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/project/:id" component={ProjectPage}/>
              <Route path='/' component={Home}/>
            </Switch>
          </Container>
          <div className="test">
          {/* <css-doodle>{`
            :doodle {
              @grid: 18 ;
              background: #0a0c27;
              width:100%;
              height:100%
            }
            --hue: calc(180 + 1.5 * @row * @col);
            background: hsl(var(--hue), 50%, 70%);
            margin: -.5px;
            transition: @r(.5s) ease;
            clip-path: polygon(@pick(
              '0 0, 100% 0, 100% 100%',
              '0 0, 100% 0, 0 100%',
              '0 0, 100% 100%, 0 100%',
              '100% 0, 100% 100%, 0 100%'
            ));
          `}  
          </css-doodle> */}
          </div>
        </div>
      <FooterBar/>
    </div>
  );
}

export default App;
