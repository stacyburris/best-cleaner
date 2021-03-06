import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import livingRoom from '../images/livingRoom.jpg';
import bathroom from '../images/Bathroom.jpg';
import bedroom from '../images/bedroom.jpg';
import kitchen from '../images/kitchen.jpg';
import secondKitchen from '../images/kitchen2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const Carousels = ()  => {


return (
<>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondKitchen}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={livingRoom}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1>Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bathroom}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1>Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
    </Carousel.Caption>
  </Carousel.Item>
<Carousel.Item>
    <img
      className="d-block w-100"
      src={kitchen}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1>Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bedroom}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1>Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</>
    );
}


export default Carousels;



