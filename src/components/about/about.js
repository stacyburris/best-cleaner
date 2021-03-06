import React from 'react';
import { Container, Row, Col, Fade } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {

//     <img id="images"
//     className="d-block w-100"
//     src={secondKitchen}
//     alt="First slide"
//   />

return (
    <section id="about">
      <Container>
       
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade>
              <div className="about-wrapper__image">
                <img id="profile-picture" src='https://via.placeholder.com/150' alt="photo" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                </p>
                <p className="about-wrapper__info-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                </p>
                <p className="about-wrapper__info-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default About;

