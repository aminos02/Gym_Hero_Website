import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Banner() {
    return (
        <section className="home" id="home">
            <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y]}
            effect='fade'
      spaceBetween={20}
      grabCursor={true}
      loop={true}
      centeredSlides={true} 
      pagination= {{
          clickable: true,

        }
      }
>
      <SwiperSlide className='slide' style={{background: "url(images/home-bg-1.jpg) no-repeat"}}>
      <div className="content">
                    <span>be strong, be fit</span>
                    <h3>Make yourself stronger than your excuses.</h3>
                    <a href="#" className="btn">get started</a>
                </div>
      </SwiperSlide>
      <SwiperSlide className='slide' style={{background: "url(images/home-bg-2.jpg) no-repeat"}}>
      <div className="content">
                    <span>be strong, be fit</span>
                    <h3>Make yourself stronger than your excuses.</h3>
                    <a href="#" className="btn">get started</a>
                </div>
      </SwiperSlide>
      <SwiperSlide className='slide' style={{background: "url(images/home-bg-3.jpg) no-repeat"}}>
      <div className="content">
                    <span>be strong, be fit</span>
                    <h3>Make yourself stronger than your excuses.</h3>
                    <a href="#" className="btn">get started</a>
                </div>
      </SwiperSlide>
    </Swiper>
    </section>
    )
return (
    <section className="home" id="home">

    <div className="swiper">

        <div className="swiper-wrapper">

            <div className="swiper-slide slide" style={{background: "url(images/home-bg-1.jpg) no-repeat"}}>
                <div className="content">
                    <span>be strong, be fit</span>
                    <h3>Make yourself stronger than your excuses.</h3>
                    <a href="#" className="btn">get started</a>
                </div>
            </div>

            <div className="swiper-slide slide" style={{background: "url(images/home-bg-2.jpg) no-repeat"}}>
                <div className="content">
                    <span>be strong, be fit</span>
                    <h3>Make yourself stronger than your excuses.</h3>
                    <a href="#" className="btn">get started</a>
                </div>
            </div>

            <div className="swiper-slide slide" style={{background: "url(images/home-bg-3.jpg) no-repeat"}}>
                <div className="content">
                    <span>be strong, be fit</span>
                    <h3>Make yourself stronger than your excuses.</h3>
                    <a href="#" className="btn">get started</a>
                </div>
            </div>

        </div>

        <div className="swiper-pagination"> </div>

    </div>

</section>
  )
}

export default Banner