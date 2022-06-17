import React from 'react'
import './Trainers.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Trainers() {
  return (
    
<section className="trainers" id="trainers">

<h1 className="heading"> <span>expert trainers</span> </h1>

<div className="box-container">

    <div className="box">
        <img src="images/trainer-1.jpg" alt=""/>
        <div className="content">
            <span>expert trainer</span>
            <h3>Albert</h3>
            <div className="share">
            <FontAwesomeIcon icon={faFacebookF}  className='icon'/>
            <FontAwesomeIcon icon={faTwitter}  className='icon'/>
            <FontAwesomeIcon icon={faPinterest}  className='icon'/>
            <FontAwesomeIcon icon={faLinkedin}  className='icon'/>
            </div>
        </div>
    </div>

    <div className="box">
        <img src="images/gym6.jpg" alt=""/>
        <div className="content">
            <span>expert trainer</span>
            <h3>Kaido</h3>
            <div className="share">
            <FontAwesomeIcon icon={faFacebookF}  className='icon'/>
            <FontAwesomeIcon icon={faTwitter}  className='icon'/>
            <FontAwesomeIcon icon={faPinterest}  className='icon'/>
            <FontAwesomeIcon icon={faLinkedin}  className='icon'/>
            </div>
        </div>
    </div>

    <div className="box">
        <img src="images/trainer-3.jpg" alt=""/>
        <div className="content">
            <span>expert trainer</span>
            <h3>Jack</h3>
            <div className="share">
            <FontAwesomeIcon icon={faFacebookF}  className='icon'/>
            <FontAwesomeIcon icon={faTwitter}  className='icon'/>
            <FontAwesomeIcon icon={faPinterest}  className='icon'/>
            <FontAwesomeIcon icon={faLinkedin}  className='icon'/>
            </div>
        </div>
    </div>

   

</div>

</section>
    )
}

export default Trainers