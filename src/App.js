//regular code without scroll feature

// import React from 'react';
// import Header from './components/header/header';
// import Carousels from './components/carousels/carousels';
// import Footer from './components/footer/footer';
// //import Home from 
// import Help from './components/help/help';
// import Services from './components/services/services';
// import Procedure from './components/procedure/procedure';
// import Recommendations from './components/recommendations/recommendations';
// import About from './components/about/about';
 

// function App() {
//   return (
//     <>
//      <Header/>
//      {/* <Carousels/> */}
  
//     <Switch>
     
//     {/* <Route exact path='/'/><Home/> */}
//       <Route path='/carousels' component={Carousels} exact/>
//       <Route path='/help' component={Help} exact/>
//       <Route path='/recommendations' component={Recommendations} exact/> 
//       <Route path='/services' component={Services} exact/>
//       <Route path='/about' component={About} exact/>
//       <Route path='/procedure' component={Procedure} exact/>
//    </Switch>
//     <Route path='/footer' component={Footer} exact/>
//     </>
//   );
// }

// export default App;

//--------------------------------------

// scrollable code

import React from 'react';
import Header from './components/header/header';
import Carousels from './components/carousels/carousels';
import Footer from './components/footer/footer';
import Services from './components/services/services';
import Recommendations from './components/recommendations/recommendations';
import About from './components/about/about';
import Procedure from './components/procedure/procedure';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination'
import ReactPageScroller from 'react-page-scroller';
import Help from './components/help/help';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    console.log(number);
    //console.log('pagesss', handleBeforePageChange)
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 7; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pagination.Item>,
      );
    }

    return [...pageNumbers];
  };

  render() {
     //const pagesNumbers = this.getPagesNumbers();

    return (     
      <>
        <Header />
        <Switch>
        <Route exact path='/'> 
      <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
        <Carousels id="page-height"/>
        <Help id="page-height"/>
        <Recommendations id="page-height"/> 
        <Services id="page-height"/>
        <About id="page-height"/>
        <Procedure id="page-height"/>
      </ReactPageScroller>

      </Route> 
      
       <Route path='/carousels' component={Carousels} exact/> 
       <Route path='/help' component={Help} exact/>
       <Route path='/recommendations' component={Recommendations} exact/> 
       <Route path='/services' component={Services} exact/>
       <Route path='/about' component={About} exact/>
       <Route path='/procedure' component={Procedure} exact/>
    </Switch> 
       <Footer/>   
       
      </>
    );
  }
}


// put id in each fragment with vh height 
        // <Pagination className="pagination-additional-class" bsSize="large">
        //   {pagesNumbers}
        // </Pagination> 