import React from 'react'
import './AboutUs.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck } from '@fortawesome/free-solid-svg-icons';
function AboutUs() {
  return (
    <section className="about" id="about">

    <div className="image">
        <img src="images/about-img.jpg" alt=""/>
    </div>

    <div className="content">
        <span>about us</span>
        <h3 className="title">Every day is a chance to become better</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quia accusamus dicta inventore nobis obcaecati vero odio, id dolorum. Consequatur ex, aperiam deserunt nostrum perferendis illum unde ipsa? Consequatur, distinctio?</p>
        <div className="box-container">
            <div className="box">
                <h3><FontAwesomeIcon  icon={faCheck} color={'red'}/> body and mind</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
            </div>
            <div className="box">
                <h3><FontAwesomeIcon  icon={faCheck} color={'red'}/> healthy life</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
            </div>
            <div className="box">
                <h3><FontAwesomeIcon  icon={faCheck} color={'red'}/> strategies</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
            </div>
            <div className="box">
                <h3><FontAwesomeIcon  icon={faCheck} color={'red'}/> workout</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
            </div>
        </div>
        <a href="#" className="btn" >read more</a>
    </div>

</section>
  )
}

export default AboutUs