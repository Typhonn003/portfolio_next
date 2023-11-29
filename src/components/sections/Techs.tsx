import { techList } from "../../data";
import { TechCard } from "../cards/TechCard";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Icon from "react-icons/sl";

register();
import "swiper/css";
import "swiper/css/bundle";
import { SectionTitle } from "../layout/SectionTitle";

export const Techs = () => {
  return (
    <section className="pb-6 lg:pb-24" id="techs">
      <SectionTitle title="Tecnologias" />
      <Swiper
        className="container-width mb-6 lg:w-full"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
        navigation={{
          prevEl: ".swiper-custom-prev",
          nextEl: ".swiper-custom-next",
        }}
        keyboard={true}
        mousewheel={true}
        grabCursor={true}
        breakpoints={{
          425: {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {techList.map((tech) => (
          <SwiperSlide key={tech}>
            <TechCard techName={tech} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container-width m-auto flex max-w-md justify-between lg:w-full">
        <button className="swiper-custom-prev text-4xl">
          <Icon.SlArrowLeft />
        </button>
        <div className="swiper-custom-pagination flex max-w-[65%] flex-wrap justify-center gap-2 self-center xs:max-w-full" />
        <button className="swiper-custom-next text-4xl">
          <Icon.SlArrowRight />
        </button>
      </div>
    </section>
  );
};
