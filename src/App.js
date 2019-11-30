import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel name="Nome 1" img1="01" img2="02" img3="03"/>
      <Carousel name="Nome 2" img1="02" img2="03" img3="02"/>
      <Carousel name="Nome 3" img1="03" img2="01" img3="02"/>
      <Footer />
    </div>
  );
}

export default App;
