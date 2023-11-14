import { Grid } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const HeroSlider = () => {
  return (
    <Grid container>
      <Grid item md={6}>
        <Swiper autoplay modules={[Autoplay]}>
          <SwiperSlide>
            <img src="/CodingAgency.png" alt="Coding Agency" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/DesignAgency.png" alt="Design Agency" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/MarketingAgency.png" alt="Marketing Agency" />
          </SwiperSlide>
        </Swiper>
      </Grid>
      <Grid item md={6}>
        <img src="/Vector.png" alt="AppFuturistics Background" />
      </Grid>
    </Grid>
  );
};
