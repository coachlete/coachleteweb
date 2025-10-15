import React from "react";
import styles from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./Slider";

export default function Testimonials() {
  return (
    <>
      <div className={styles.TestimonialsMain}>
        <div className={styles.TestimonialsWrapper}>
          <div className={styles.TestimonialsBackImage}>
            <img src="assets/Home/volleyball.jpg" alt="" />
          </div>

          <div className={styles.TestimonialsCardWrapper}>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
