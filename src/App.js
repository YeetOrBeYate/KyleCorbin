import React from 'react';
import NavBarcomp from "./comp/NavBar"
import FooterBar from "./comp/FooterBar"
import { Button,Container } from 'reactstrap';
import './App.css';

function App() {




  return (
    <div className="App">
      <NavBarcomp/>
      <Container className="themed-container" fluid="sm">
        contain
        <Button outline={true} color="primary">
          heres a reactstrap button
        </Button>
        <Button outline={false} color="primary">
          heres a reactstrap button
        </Button>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
        <p>yeet</p>
      </Container>
      <FooterBar/>
    </div>
  );
}

export default App;
