import React from 'react';
import Card from 'react-bootstrap/Card';
import './procedure.scss';

const Procedure = ()=> {
    return (
   <Card className="procedure">
    <Card.Body>
        <h2>The Procedure</h2>
        <ul>
        <li>Contact me by phone, text or email.</li>
        <li>After the initial contact with a new client, I set up a time to visit their home.</li>
        <li>During the tour I discuss the expectations from the clean and any areas of special focus allowing me to customize their clean so it will be perfect each time I come.</li>
        <li>After reviewing the home, I estimate the amount of time needed for the cleaning.  Most of my cleans are either 3 or 4 hours.</li>
        <li>Many of my clients are either once a week or once every other week plus a couple are once a month.  The client will decide how often the cleanings will be completed. </li>
        <li>Based on the open space on my calendar we set up a cleaning schedule.</li>
        <li>I request that someone from the house be there at the first cleaning to answer my questions and indicate special needs.</li>
        <li>When I still have my supplies out after the first cleaning, I want someone to review what I did and to point out anything I may have missed or didn’t do to their satisfaction.</li>
        <li>I always remember that I am working for someone and I need to clean what they want not what I want.</li>
        </ul>
    </Card.Body>
    </Card>     
    )
}


export default Procedure;

