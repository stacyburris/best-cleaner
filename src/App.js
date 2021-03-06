import React from 'react';
import Header from './components/header/header';
import Carousels from './components/carousels/carousels';
import Footer from './components/footer/footer';
import Services from './components/services/services';
import Recommendations from './components/recommendations/recommendations';
//import Contact from './components/contact/contact';


function App() {
  return (
    <>
    <Header/>
    <Carousels/>
    <Services/>
    <Recommendations/>

    {/* <Contact/> */}
    <Footer/>
    </>
  );
}

export default App;
