import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "https://i.ibb.co/VWnFCpCM/360-F-332753934-t-Bac-XEgxn-Vpl-FBRy-Kb-Cif49jh0-Wz89ns.jpg",
  "https://i.ibb.co/9HvDHRdm/pexels-yente-van-eynde-1263034-2403392.jpg",
  "https://i.ibb.co/1YSgRWC5/360-F-754587989-k-Ph9mbd3n-Rb-RF2gv-D0nzuas-SCr-Pp-Wyy7.jpg",
  "https://i.ibb.co/v40ScqH9/360-F-208817795-82-Kbs-O0-CWRJvm8-Ic-QWn-MNSQj-J9p01-XS0.jpg",
];

const Slider = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto h-[50vh]">
      <Swiper
        loop={true}
        effect="coverflow"
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide className="flex justify-center items-center" key={index}>
            <img
              src={src}
              className="w-full object-cover max-h-[50vh]"
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
