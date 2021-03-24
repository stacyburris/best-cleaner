import React from 'react';
import Header from './components/header/header';
import Carousels from './components/carousels/carousels';
import Footer from './components/footer/footer';
import Services from './components/services/services';
import Recommendations from './components/recommendations/recommendations';
import About from './components/about/about';
import Procedure from './components/procedure/procedure';
import 'bootstrap/dist/css/bootstrap.min.css';
import Help from './components/help/help';
import './App.scss';
import './App.css';

function App() {

    return (
    <>
    <Header/>
    <Carousels/>
    <Help/>
    <Recommendations/>
    <Services/>
    <About/>
    <Procedure/>
    <Footer/>

    
    {/* <Switch>
      <Route path='/carousels' component={Carousels} exact/>
      <Route path='/help' component={Help} exact/>
      <Route path='/recommendations' component={Recommendations} exact/> 
      <Route path='/services' component={Services} exact/>
      <Route path='/about' component={About} exact/>
      <Route path='/procedure' component={Procedure} exact/>
  </Switch> 
    <Route path='/footer' component={Footer} exact/> */}
    </>
  );  
  

}

export default App;






