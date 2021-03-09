// react router that would switch each click to the component
// import React from 'react';
// import Header from './components/header/header';
// import Carousels from './components/carousels/carousels';
// import Footer from './components/footer/footer';
// import Services from './components/services/services';
// import Recommendations from './components/recommendations/recommendations';
// import About from './components/about/about';
// //import Contact from './components/contact/contact';
//  import { Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <>
//     <Header/>
//     <Switch>
    
//       <Route path='/carousels' component={Carousels} exact/>
//       <Route path='/recommendations' component={Recommendations} exact/> 
//       <Route path='/services' component={Services} exact/>
//       <Route path='/about' component={About} exact/>

//     {/* <Contact/> */}
//    </Switch>
//     <Footer/>
//     </>
//   );
// }

// export default App;

//--------------------------------------

/// old code with just rendering 

import React from 'react';
import Header from './components/header/header';
import Carousels from './components/carousels/carousels';
import Footer from './components/footer/footer';
import Services from './components/services/services';
import Recommendations from './components/recommendations/recommendations';
//import Contact from './components/contact/contact';
import About from './components/about/about';
//import Pager from 'react-bootstrap/Pager';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination'
//import PageItem from 'react-bootstrap/PageItem'
import ReactPageScroller from 'react-page-scroller';
  import { Route } from 'react-router-dom';

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
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pagination.Item>,
      );
    }

    return [...pageNumbers];
  };

  render() {
    // const pagesNumbers = this.getPagesNumbers();

    return (
      <>

         <Header/>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
    
       <Route path='/carousels' component={Carousels} exact/>
       <Route path='/recommendations' component={Recommendations} exact/> 
       <Route path='/services' component={Services} exact/>
       <Route path='/about' component={About} exact/>
        <Footer/>
        </ReactPageScroller>
        {/* <Pagination className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pagination> */}
       
      </>
    );
  }
}


// function App() {
//   return (
//     <>
//     <Header/>
//     <Carousels/>
//     <Services/>
//     <Recommendations/>

//     {/* <Contact/> */}
//     <Footer/>
//     </>
//   );
// }

// export default App;