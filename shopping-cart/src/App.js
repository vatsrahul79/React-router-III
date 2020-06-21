import React from 'react';
import ShoppingApplication from './Router/ShoppingApplication'
import Route from './Router/Route'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ShoppingApplication/>
      </div>
    </BrowserRouter>
  );
}

export default App;
