import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Background from '../images/background.jpg';
//import Card from 'react-bootstrap/Card';
import './recommendation.scss';

const Recommendations = ()  => {

    return (
    <Carousel fade >
    <Carousel.Item>
         <img id="carousel-size"
        className="d-block w-100"
        src={Background}
        alt="First slide"
        />
        <Carousel.Caption>
        <h3 className="Carousel-caption">What Clients say about me...</h3>
        <p>"This is a letter of recommendation for my friend, Nancy Best. We’ve known each other for about two years, and she has some remarkable qualities: she has integrity – she’s honest. When she says she’s going to do something, she does it and she’s someone I feel like I can really depend on. She creates a peaceful atmosphere around her and is very kind, even to my cat… who is not. It’s difficult to convey how important her work is to her. She really believes in her business, she’s been cleaning for about ten years, and she takes pride in seeing the results of her hard work (and her clients’ enjoyment of it as well). She works really hard but is efficient. For example, last year she stepped in and took charge when I was having a difficult “downsizing” crisis. We organized years of paperwork, she handled all the donations, and helped me actually organize my apartment. She’s a real problem-solver and go-getter. Trust me, I know. If I were hiring someone to clean my home and handle my possessions, I would want it to be someone like Nancy. She’s careful, discreet, and she’s very organized"</p>
        <br/>
         <p>- Anne. Seattle, WA</p> 
    
{/* <Card>
  <Card.Header>What Clients say about me...</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        "This is a letter of recommendation for my friend, Nancy Best. We’ve known each other for about two years, and she has some remarkable qualities: she has integrity – she’s honest. When she says she’s going to do something, she does it and she’s someone I feel like I can really depend on. She creates a peaceful atmosphere around her and is very kind, even to my cat… who is not. It’s difficult to convey how important her work is to her. She really believes in her business, she’s been cleaning for about ten years, and she takes pride in seeing the results of her hard work (and her clients’ enjoyment of it as well). She works really hard but is efficient. For example, last year she stepped in and took charge when I was having a difficult “downsizing” crisis. We organized years of paperwork, she handled all the donations, and helped me actually organize my apartment. She’s a real problem-solver and go-getter. Trust me, I know. If I were hiring someone to clean my home and handle my possessions, I would want it to be someone like Nancy. She’s careful, discreet, and she’s very organized" {' '}
      </p>
      <footer className="blockquote-footer">
        <cite title="Source Title">Anne. Seattle, WA</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>  */}
</Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img id="carousel-size"
        className="d-block w-100"
        src={Background}
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>What Clients say about me...</h3>
        <p>"I highly recommend Nancy who has been our house cleaner for over 5 years. She is trustworthy, prompt and dependable - something we highly value as a family. She is flexible and cleans our home with our two girls running (and crawling) around. We've also used her for our rentals for move-in/move-out cleaning - does a great job. Highly recommend Nancy Best!"</p>
        <br/>
        <p>- Jim. Seattle, WA</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img id="carousel-size"
        className="d-block w-100"
        src={Background}
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>What Clients say about me...</h3>
        <p>"I highly recommend Nancy Best who has been my housecleaner for a year. She is bonded, licensed, does a thorough job and is totally dependable and flexible. Nancy cleans homes with and without kids and pets. Her detailed cleaning leaves everything in its place and organized. She communicates with her clients to understand and fulfill their needs."
</p>
<br/>
        <p>- Tom. Seattle, WA</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img id="carousel-size"
        className="d-block w-100"
        src={Background}
        alt="Fourth slide"
        />

        <Carousel.Caption>
        <h3>What Clients say about me...</h3>
        <p>"Nancy Best has been cleaning our home twice a month for a little over a year. I interviewed 8+ house cleaners, having been a house cleaner myself back in high school and college -- I knew the standards I wanted to set, and I wanted to ensure I found someone that embraced the same standards that I hold. Nancy is responsive, kind, hardworking, and organized. She texts me a few days before she is scheduled to come and clean, which I love. She also has great pricing. I would highly recommend her for your housecleaning needs."</p>
        <br/>
        <p>- Diane. Seattle, WA</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
            );

}

export default Recommendations;
