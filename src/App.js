import React from 'react';
import { Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button outline={true} color="primary">
        heres a reactstrap button
      </Button>
      <Button outline={false} color="primary">
        heres a reactstrap button
      </Button>
    </div>
  );
}

export default App;
