import './Reviews.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Reviews() {
  return (
    <section className="review">

    <div className="information">
        <span>Reviews</span>
        <h3>what our clients says</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas praesentium asperiores fugiat, excepturi odit obcaecati a voluptatibus earum quisquam?</p>
        <a href="#" className="btn">read more</a>
    </div>
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        effect="fade"
        className='review-slider'
        spaceBetween={20}
        // grabCursor={true}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
      >



            <SwiperSlide
          className="slide"
        >
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quo.</p>
                <div className="user">
                    <img src="images/pic-1.png" alt=""/>
                    <div className="info">
                        <h3>john deo</h3>
                        <span>designer</span>
                    </div>
                    <i className="fas fa-quote-left"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide
          className="slide"
        >
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quo.</p>
                 <div className="user">
                     <img src="images/pic-2.png" alt=""/>
                     <div className="info">
                         <h3>john deo</h3>
                         <span>designer</span>
                     </div>
                     <i className="fas fa-quote-left"></i>
                 </div>
            </SwiperSlide>
                
            <SwiperSlide
          className="slide"
        >
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quo.</p>
                 <div className="user">
                     <img src="images/pic-3.png" alt=""/>
                     <div className="info">
                         <h3>john deo</h3>
                         <span>designer</span>
                     </div>
                     <i className="fas fa-quote-left"></i>
                 </div>
            </SwiperSlide>
                
            <SwiperSlide
          className="slide"
        >
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quo.</p>
                 <div className="user">
                     <img src="images/pic-4.png" alt=""/>
                     <div className="info">
                         <h3>john deo</h3>
                         <span>designer</span>
                     </div>
                     <i className="fas fa-quote-left"></i>
                 </div>
            </SwiperSlide>
            </Swiper>
</section>
  )
}

export default Reviews