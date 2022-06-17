import React from 'react'
import './Trainers.scss'
function Trainers() {
  return (
    
<section className="trainers" id="trainers">

<h1 className="heading"> <span>expert trainers</span> </h1>

<div className="box-container">

    <div className="box">
        <img src="images/trainer-1.jpg" alt=""/>
        <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-pinterest"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>
    </div>

    <div className="box">
        <img src="images/trainer-4.jpg" alt=""/>
        <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-pinterest"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>
    </div>

    <div className="box">
        <img src="images/trainer-3.jpg" alt=""/>
        <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-pinterest"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>
    </div>

   

</div>

</section>
    )
}

export default Trainers