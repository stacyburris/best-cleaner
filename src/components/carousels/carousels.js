import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import livingRoom from '../images/livingRoom.jpg';
//import bathroom from '../images/Bathroom.jpg';
import bathroom2 from '../images/Bathroom2.jpg';
import bedroom from '../images/bedroom.jpg';
import kitchen from '../images/kitchen.jpg';
import secondKitchen from '../images/kitchen2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousels.scss';

const Carousels = ()  => {


return (
<>
<Carousel  className="details">

  <Carousel.Item>
  <img id="images"
      className="d-block w-100"
      src={secondKitchen}
      alt="First slide"
    />
    <Carousel.Caption>
    <h1 id="header">Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img id="images"
      className="d-block w-100"
      src={livingRoom}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h1 id="header">Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img id="images"
      className="d-block w-100"
      src={bathroom2}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h1 id="header">Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
    <img id="images"
      className="d-block w-100"
      src={kitchen}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h1 id="header">Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img id="images"

      className="d-block w-100"
      src={bedroom}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h1 id="header">Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
    );
}


export default Carousels;



