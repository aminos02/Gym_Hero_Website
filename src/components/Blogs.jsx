import './Blogs.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Blogs() {
  return (
    
<section className="blogs" id="blogs">

<h1 className="heading"> <span>daily posts</span> </h1>
<Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        effect="fade"
        // className='blogs-slider'
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
            <div className="image">
                <img src="images/home-bg-1.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </SwiperSlide>
        <SwiperSlide
          className="slide"
        >
            <div className="image">
                <img src="images/blog-2.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
     </SwiperSlide>
     <SwiperSlide
          className="slide"
        >
            <div className="image">
                <img src="images/blog-3.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
     </SwiperSlide>
      </Swiper>
{/* <div className="swiper blogs-slider">

    <div className="swiper-wrapper">

        <div className="swiper-slide slide">
            <div className="image">
                <img src="images/blog-1.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>
        
        <div className="swiper-slide slide">
            <div className="image">
                <img src="images/blog-2.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <img src="images/blog-3.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <img src="images/blog-4.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="swiper-slide slide">
            <div className="image">
                <img src="images/blog-5.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st may, 2021</a> </div>
                <h3>fitness is not about being better than someone else</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

    </div>

    <div class="swiper-pagination"></div> */}

{/* </div> */}

</section>
  )
}

export default Blogs