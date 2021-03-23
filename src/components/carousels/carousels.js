import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import livingRoom from '../images/Livingroom.jpg';
import bathroom from '../images/Bathroom.jpg';
import bedroom from '../images/bedroom.jpg';
import kitchen from '../images/kitchen.jpg';
import secondKitchen from '../images/secondKitchen.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousels.scss';
import Info from '../info/info';
//import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import {Link} from 'react-scroll'; 

const Carousels = ()  => {

// style={{height: 1000}}
return (
<>
<Carousel className="details">

  <Carousel.Item>
  <img id="images"
      className="d-block w-100"
      src={secondKitchen}
      alt="Best Cleaner"
    />
    <div id="block"></div>
  </Carousel.Item>

  <Carousel.Item>
    <img id="images"
      className="d-block w-100"
      src={livingRoom}
      alt="Best Cleaner"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img id="images"
      className="d-block w-100"
      src={bathroom}
      alt="Best Cleaner"
    />
  </Carousel.Item>

<Carousel.Item>
    <img id="images"
      className="d-block w-100"
      src={kitchen}
      alt="Best Cleaner"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img id="images"

      className="d-block w-100"
      src={bedroom}
      alt="Best Cleaner"
    />
  </Carousel.Item>
</Carousel>
<div>
<Info id="page-height"/>
</div>

</>
    );

}


export default Carousels;



