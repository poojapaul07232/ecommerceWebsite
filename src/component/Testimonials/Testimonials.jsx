import React from 'react'
import Hero from '../../assets/testimonialHero.png'
import css from'./Testimonials.module.css';
import {TestimonialsData} from'../../data/testimonials';
import {SwiperSlide,Swiper} from "swiper/react"
export default function Testimonials() {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
        <span>Top Rated</span>
        <span>
            Seedily say has suitable disposal and the boy 
        </span>
        </div>
      
      <img src={Hero} alt=""/>

      <div className={css.container}>
        <span>100k</span>
        <span>Happy customers</span>
      </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper 
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        className={css.tCarousel}
        >
          {TestimonialsData.map((testimonial,i)=>(
            <SwiperSlide>
              <div className={css.testimonial}>
                 <img src={testimonial.image} alt=""></img>
                <span>{testimonial.comment}</span> 

               <hr/> 
                 <span>{testimonial.name}</span>
                 
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
