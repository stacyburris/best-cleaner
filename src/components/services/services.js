import React from 'react';
//import Card from 'react-bootstrap/Card';
//import CardDeck from 'react-bootstrap/CardDeck';
//import 'bootstrap/dist/css/bootstrap.min.css';

///////////////////////////////////////////////////
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
//import Button from '@material-ui/core/Button';
//import Clean from '../images/clean.jpg';
import './services.scss';
//import { makeStyles } from '@material-ui/core/styles';
//import ArrowRightIcon from '@material-ui/icons/ArrowRight';
//import Icon from '@material-ui/core/Icon';
//style={{height: 1000}}

export default function Services(){
  //const classes = useStyles();
  return (
<div className="services">
          <div class="service-container">
            {/* <Grid id="grid"> */}
            <div class="flip-card">
              <div id="flip-card-inner">
                <div id="flip-card-front">
                  <Typography variant="h5" component="h2">
                    <h2>Living Room</h2>
                  </Typography>     
                </div>
              
                <div id="flip-card-back">
                  <Grid item xs={12}>
                    <Card className="root" variant="outlined">
                      <CardContent class="backContent">
                        <Typography className="question" color="textSecondary" gutterBottom>
                        <h2>Included in a cleaning</h2>
                        <ul>
                          <li>Dust all accessible surfaces</li>
                          <li>Vacuum rugs, carpets, upholstered sofas and chairs</li>
                          <li>Wipe baseboards and window sills</li>
                          <li>Clean mirrors</li>
                          <li>Empty trash bins</li>
                          <li>Dust furniture and wall hangings</li>
                          <li>Sanitize floors</li>
                        </ul>
                      </Typography>

                      </CardContent>
                    </Card>
                  </Grid>
                </div>
              </div>
            </div>
          
        <div class="flip-card">
        <div id="flip-card-inner">
          <div id="flip-card-front">
            <Typography variant="h5" component="h2">
               <h2>Bathroom</h2>
                  </Typography> 
            </div>
            <div id="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography className="question" color="textSecondary" gutterBottom>
                    <h2>Included in a cleaning</h2>
                        <ul>
                          <li>Clean the toilet</li>
                          <li>Scrub shower, bath and sink</li>
                          <li>Clean cabinet exteriors, mirrors and fixtures</li>
                          <li>Wipe switches and handles</li>
                          <li>Empty trash bins</li>
                          <li>Vacuum and wash floors </li>
                        </ul>
                  </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </div>
        </div>
 
        <div class="flip-card">
        <div id="flip-card-inner">
          <div id="flip-card-front">
           
                  <Typography variant="h5" component="h2">
               <h2>Extras</h2>
                  </Typography> 
            </div>
        
            <div id="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography className="question" color="textSecondary" gutterBottom>
                    <h2>Included in a cleaning</h2>
                        <ul>
                          <li>Inside of refrigerator</li>
                          <li>Laundry</li>
                          <li>Make beds</li>
                          <li>Inside of kitchen cabinets</li>
                          <li>Stock supplies</li>
                          <li>Organize closets and cupboards</li>
                        </ul>
                  </Typography>
           
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </div>
        </div>
             {/* </Grid> */}
    
      
     
        {/* <Grid id="grid"> */}
     
        <div class="flip-card">
        <div id="flip-card-inner">
          <div id="flip-card-front">
            <Typography variant="h5" component="h2">
               <h2>Bedrooms</h2>
                  </Typography> 
          
            </div>
         
            <div id="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography className="question" color="textSecondary" gutterBottom>
                    <h2>Included in a cleaning</h2>
                        <ul>
                          <li>Dust surfaces</li>
                          <li>Wipe baseboards and window sills</li>
                          <li>Clean mirrors</li>
                          <li>Make the bed (Please leave fresh linens out if you would like them changed)</li>
                          <li>Vacuum carpet and mop floors</li>
                        </ul>
                  </Typography>
 
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </div>
        </div>
     
        <div class="flip-card">
        <div id="flip-card-inner">
          <div id="flip-card-front">
            <Typography variant="h5" component="h2">
               <h2>Kitchen</h2>
                  </Typography> 
         
            </div>
           
            <div id="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography className="question" color="textSecondary" gutterBottom>
                   
                        <h2>Included in a cleaning</h2>
                        <ul>
                          <li>Wash dishes or load dishwasher</li>
                          <li>Dust surfaces</li>
                          <li>Wipe exterior of kitchen cupboards, oven and fridge</li>
                          <li>Clean microwave interior and exterior</li>
                          <li>Wipe switches and handles</li>
                          <li>Wipe countertops </li>
                          <li>Clean the sink</li>
                          <li>Put away clean dishes</li>
                          <li>Take out garbage and recycling</li>
                          <li>Vacuum and wash floors</li>
                        </ul>
                  </Typography>
                
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </div>
        </div>
        
        <div class="flip-card">
        <div id="flip-card-inner">
          <div id="flip-card-front">
            <Typography variant="h5" component="h2">
               <h2>Blank</h2>
                  </Typography> 
         
            </div>
          
            <div id="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography className="question" color="textSecondary" gutterBottom>
                   
                        <h2>Included in a cleaning</h2>
                        <ul>
                          <li>Wash dishes or load dishwasher</li>
                          <li>Dust surfaces</li>
                          <li>Wipe exterior of kitchen cupboards, oven and fridge</li>
                          <li>Clean microwave interior and exterior</li>
                          <li>Wipe switches and handles</li>
                          <li>Wipe countertops </li>
                          <li>Clean the sink</li>
                          <li>Put away clean dishes</li>
                          <li>Take out garbage and recycling</li>
                          <li>Vacuum and wash floors</li>
                        </ul>
                  </Typography>
              
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </div>
        </div>
     
        {/* </Grid>  */}
      </div>
      </div>
  )
}



//export default Services;


//<img alt="card content" src={Clean} />







// option 2 with bootstrap for service cards with info on front side
// const Services = ()  => {

//     return(

// <CardDeck>

//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
 
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
// </CardDeck>
//     )

// }

// export default Services;