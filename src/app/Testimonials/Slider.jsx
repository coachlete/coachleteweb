import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./Slider.module.css";

export default function Slider() {
  return (
    <div className={styles.SwiperMain}>
      <div className={styles.SwiperHeadWrapper}>
        <div className={styles.TestimonialHead}>
          <span>TESTIMONIAL</span>
        </div>

        <div className={styles.TestimonialDesc}>
          <span>What they say</span>
        </div>
      </div>

      <div className={styles.SwiperWrapper}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.Testimonial1}>
              <div className={styles.Quote}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="M116 72v88a48.05 48.05 0 0 1-48 48a8 8 0 0 1 0-16a32 32 0 0 0 32-32v-8H40a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h60a16 16 0 0 1 16 16m100-16h-60a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16"
                  />
                </svg>
              </div>
              <div className={styles.UserDetails}>
                <div className={styles.Desc}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni, ipsam! Aperiam voluptatem quaerat pariatur modi. Labore
                  ducimus minima sed molestias sit numquam quo aliquid,
                  provident rerum, praesentium vel porro velit!
                </div>

                <div className={styles.UserImageName}>
                  <div className={styles.UserImage}></div>
                  <div className={styles.UserName}>
                    <div className={styles.Name}>
                      <span>TEst</span>
                    </div>
                    <div className={styles.position}>
                      <span>Ames, IA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.Testimonial1}>
              <div className={styles.Quote}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="M116 72v88a48.05 48.05 0 0 1-48 48a8 8 0 0 1 0-16a32 32 0 0 0 32-32v-8H40a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h60a16 16 0 0 1 16 16m100-16h-60a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16"
                  />
                </svg>
              </div>
              <div className={styles.UserDetails}>
                <div className={styles.Desc}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni, ipsam! Aperiam voluptatem quaerat pariatur modi. Labore
                  ducimus minima sed molestias sit numquam quo aliquid,
                  provident rerum, praesentium vel porro velit!
                </div>

                <div className={styles.UserImageName}>
                  <div className={styles.UserImage}></div>
                  <div className={styles.UserName}>
                    <div className={styles.Name}>
                      <span>TEst</span>
                    </div>
                    <div className={styles.position}>
                      <span>Ames, IA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.Testimonial1}>
              <div className={styles.Quote}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="M116 72v88a48.05 48.05 0 0 1-48 48a8 8 0 0 1 0-16a32 32 0 0 0 32-32v-8H40a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h60a16 16 0 0 1 16 16m100-16h-60a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16"
                  />
                </svg>
              </div>
              <div className={styles.UserDetails}>
                <div className={styles.Desc}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni, ipsam! Aperiam voluptatem quaerat pariatur modi. Labore
                  ducimus minima sed molestias sit numquam quo aliquid,
                  provident rerum, praesentium vel porro velit!
                </div>

                <div className={styles.UserImageName}>
                  <div className={styles.UserImage}></div>
                  <div className={styles.UserName}>
                    <div className={styles.Name}>
                      <span>TEst</span>
                    </div>
                    <div className={styles.position}>
                      <span>Ames, IA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
