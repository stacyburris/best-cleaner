import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './about.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {

//     <img id="images"
//     className="d-block w-100"
//     src={secondKitchen}
//     alt="First slide"
//   />
// </Fade>  </Fade>  </Fade>  </Fade>
return (
    // <section id="about">
      <Container>
       
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            
              <div className="about-image">
             
                <img id="profile" 
                className="d-block w-100"
                src="https://via.placeholder.com/200"
                alt="" />
              </div>
          
          </Col>
          <Col md={6} sm={12}>
          
              <div className="about">
                <p>I am a licensed and bonded professional House Cleaner.  My business has been operating in the greater Seattle area for 10 years.  My cleanings are done in homes with or without pets and kids. Using my excellent organizational skills, I pick up misplaced items and put them where they belong and tidy up shelves and furniture as I dust and clean.
                </p>
                <p>It is important for me to take the time to listen and understand your needs and customize a professional cleaning that you'll be completely satisfied with every time. I conduct myself as a professional and a friend with each of my clients.  
                </p>
                <p>Respect for my client’s belongs and property is top priority. As an individual I am honest and reliable and an efficient worker. When I arrive, I come with my own cleaning supplies and equipment.
                </p>
              </div>    
           
          </Col>
        </Row>
      </Container>
    // </section>
  );
};


export default About;

