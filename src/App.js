import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel name="Nome 1" />
      <Carousel name="Nome 2" />
      <Carousel name="Nome 3" />
    </div>
  );
}

export default App;
