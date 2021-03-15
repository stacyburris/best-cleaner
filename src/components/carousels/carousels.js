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
import Info from '../info/info';
//import Help from '../help/help';
//import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
    <Carousel.Caption>
      <div id="welcome-header">
    <h1 id="header">Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
      <Button href="/footer" variant="secondary" size="sm">
      Contact
    </Button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img id="images"
      className="d-block w-100"
      src={livingRoom}
      alt="Best Cleaner"
    />
    <Carousel.Caption>
    <div id="welcome-header">
    <h1 id="header">Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
      <Button href="/footer" variant="secondary" size="sm">
      Contact
    </Button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img id="images"
      className="d-block w-100"
      src={bathroom2}
      alt="Best Cleaner"
    />
    <Carousel.Caption>

    <div id="welcome-header">
    <h1 id="header">Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
      <Button href="/footer" variant="secondary" size="sm">
      Contact
    </Button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
    <img id="images"
      className="d-block w-100"
      src={kitchen}
      alt="Best Cleaner"
    />
    <Carousel.Caption>
    <div id="welcome-header">
    <h1 id="header">Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
      <Button href="/footer" variant="secondary" size="sm">
      Contact
    </Button>
    </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img id="images"

      className="d-block w-100"
      src={bedroom}
      alt="Best Cleaner"
    />
    <Carousel.Caption>
    <div id="welcome-header">
    <h1 id="header">Best Cleaner</h1>
      <p>Your free time wasn't made for housework</p>
      <Button href="/footer" variant="secondary" size="sm">
      Contact
    </Button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div>
<Info id="page-height"/>
</div>

{/* <div>
     <Help id="page-height"/>
</div> */}

</>
    );

}


export default Carousels;



