import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.scss'
import React from 'react'

function Footer() {
  return (
    <section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>quick links</h3>
            <a className="links" href="#home">home</a>
            <a className="links" href="#about">about</a>
            <a className="links" href="#features">features</a>
            <a className="links" href="#pricing">pricing</a>
            <a className="links" href="#trainers">trainers</a>
            <a className="links" href="#blogs">blogs</a>
        </div>

        <div className="box">
            <h3>opening hours</h3>
            <p> monday : <i> 7:00am - 10:30pm </i> </p>
            <p> tuesday : <i> 7:00am - 10:30pm </i> </p>
            <p> wednesday : <i> 7:00am - 10:30pm </i> </p>
            <p> friday : <i> 7:00am - 10:30pm </i> </p>
            <p> saturday : <i> 7:00am - 10:30pm </i> </p>
            <p> sunday : <i> closed </i> </p>
        </div>

        <div className="box">
            <h3>opening hours</h3>
            <p> <FontAwesomeIcon  icon={faPhone} color={'red'}/>  +123-456-7890 </p>
            <p>  <FontAwesomeIcon  icon={faEnvelope} color={'red'}/> azzouzamine02@gmail.com </p>
            <p>  <FontAwesomeIcon  icon={faMap} color={'red'}/>  Algeria ,Alger </p>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-linkedin"></a>
                <a href="#" className="fab fa-pinterest"></a>
            </div>
        </div>

        <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form action="">
                <input type="email" name="" className="email" placeholder="enter your email" id=""/>
                <input type="submit" value="subscribe" className="btn"/>
            </form>
        </div>

    </div>

<div className="credit"> created by <a href="https://www.linkedin.com/in/azzouz-mohammed-el-amin-10625b17a/" target={'_blank'}><span>
     Aminos Front End Developer
     </span> 
    </a>
     | all rights reserved! </div>
</section>

  )
}

export default Footer