import React from 'react';
import ShoppingApplication from './components/ShoppingApplication'
import Route from './components/Router/Route'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ShoppingApplication>
          <Route />
          <h1>this is app</h1>
        </ShoppingApplication>
      </div>
    </BrowserRouter>
  );
}

export default App;
