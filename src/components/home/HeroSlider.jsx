import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./style.module.css";

export const HeroSlider = () => {
  return (
    <div className={style.hero_sec}>
      <div className={style.slider}>
        <Swiper autoplay modules={[Autoplay]}>
          <SwiperSlide>
            <img src="/images/CodingAgency.png" alt="Coding Agency" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/DesignAgency.png" alt="Design Agency" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/MarketingAgency.png" alt="Marketing Agency" />
          </SwiperSlide>
        </Swiper>
      </div>
      <img src="/images/Vector.png" alt="AppFuturistics Background" />
    </div>
  );
};
