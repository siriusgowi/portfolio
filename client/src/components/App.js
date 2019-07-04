import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Container from './Container';



const App = () => {

  return (
    <BrowserRouter>

        <Route exact path='/' component={Container} />

    </BrowserRouter>
  );

}


export default App;
