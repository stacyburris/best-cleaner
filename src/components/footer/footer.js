import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image';
import Venmo from '../images/venmo.png';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYelp
} from '@fortawesome/free-brands-svg-icons';


//style={{height: 500}}
const Footer = () => {
  
    const [show, setShow] = useState(false);
    const target = useRef(null);

  return (

    <div className="Footer" >
      <footer>
        <hr />
        <p id="Footer">
         &copy; Best Cleaner 
         <br/>
         Nancy Best
         <br/>
        <a href="mailto:nancybest@bestcleaner.com">nancybest@bestcleaner.com</a>
        </p>
        <div>
        <a id="icon" href="https://www.facebook.com/nancy.best.731"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a id="icon" href="https://www.instagram.com/best_nancy123"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a id="icon" href="https://www.yelp.com/biz/nancy-best-seattle-4"
            className="yelp social">
            <FontAwesomeIcon icon={faYelp} size="2x" />
          </a>
        
      <a><Image className="ven-image" src={Venmo} ref={target} onClick={() => setShow(!show)} >
 
      </Image></a>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
           Qr code
          </Tooltip>
        )}
      </Overlay>
  
 
        </div>
      </footer>
    </div>
  
  );
}
  
 




export default Footer;