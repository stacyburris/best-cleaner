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


// package.json:
// "react-page-scroller": "^2.1.0",
//"lodash": "^4.17.21",
//"prop-types": "^15.7.2",
// "react": "^16.13.1",
// "react-dom": "^16.13.1",
// "react-router-dom": "^4.3.1",

// REACT-PAGE-SCROLLER CODE:
// import React from 'react';
// import Header from './components/header/header';
// import Carousels from './components/carousels/carousels';
// import Footer from './components/footer/footer';
// import Services from './components/services/services';
// import Recommendations from './components/recommendations/recommendations';
// import About from './components/about/about';
// import Procedure from './components/procedure/procedure';
// //import Info from './components/info/info';
// import 'bootstrap/dist/css/bootstrap.min.css';
// //import Pagination from 'react-bootstrap/Pagination'
// //import ReactPageScroller from 'react-page-scroller';
// import Help from './components/help/help';
// import { Switch, Route } from 'react-router-dom';
// import './App.scss';
// import './App.css';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { currentPage: null };
//   }

//   handlePageChange = number => {
//     this.setState({ currentPage: number });
//   };

//   handleBeforePageChange = number => {
//     console.log(number);
//     //console.log('pagesss', handleBeforePageChange)
//   };

//   getPagesNumbers = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= 5; i++) {
//       pageNumbers.push(
//         <Pagination.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
//           {i}
//         </Pagination.Item>,
//       );
//     }

//     return [...pageNumbers];
//   };

//   render() {
//      //const pagesNumbers = this.getPagesNumbers();

//     return (     
//       <>
//         <Header />
//         <Switch>
//         <Route exact path='/'> 
//       <ReactPageScroller
//           pageOnChange={this.handlePageChange}
//           onBeforePageScroll={this.handleBeforePageChange}
//           customPageNumber={this.state.currentPage}
//         >
       
//         <Carousels id="page-height"/>
//         {/* <Info id="page-height"/> */}
//         {/* <Help id="page-height"/> */}
//         <Recommendations id="page-height"/>
//         <Services id="page-height"/>
//         <About id="page-height"/>
//         <Procedure id="page-height"/>
//       </ReactPageScroller>

//       </Route> 
      
//        <Route path='/carousels' component={Carousels} exact/> 
//        <Route path='/help' component={Help} exact/>
//        <Route path='/recommendations' component={Recommendations} exact/> 
//        <Route path='/services' component={Services} exact/>
//        <Route path='/about' component={About} exact/>
//        <Route path='/procedure' component={Procedure} exact/>
//     </Switch> 
//        <Footer/>   
       
//       </>
//     );
//   }
// }



