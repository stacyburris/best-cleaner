import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import clean from '../images/clean.png';
import './help.scss';
import Recommendations from '../recommendations/recommendations';

const Help = () => {

return (
  <>
      <Container id="help-container">
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
              <div className="help">
                <h2>How I Can Help</h2>
                <p>Imagine you have worked all day and finally make it home looking forward to relaxing for the evening. Instead when you walk in the door you see the sink full of dirty dishes, filthy clothes are left around the house, the bed is not made, the shower is beginning to smell and look like mold and the floors are covered with dirt.  The last thing you want to do is pull out your rubber gloves and a sponge to clean the floor or the vacuum cleaner to get the dirt off of the carpets and furniture. Instead what you need is a professional cleaning! There is no better feeling then coming home from work and walking into a beautiful, fresh-smelling, sparkling clean home. Now you can eat dinner and relax on the couch or work on a special hobby you enjoy. With all your responsibilities you should be able to enjoy your free time. A cleaning visit from Best Cleaner is exactly what you deserve.
                </p>
<br/>
              </div>    
          </Col>
           <Col md={6} sm={12}>
              <div className="clean">
             
                <img id="profile" 
                className="d-block w-100"
                src={clean}
                alt="" />
              </div>
          </Col>
        </Row>
      </Container>
<div>
  <Recommendations/>
</div>
</>
  );
};


export default Help;

