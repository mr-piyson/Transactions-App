import { TabBar, TopBar, Background } from "@Components/index";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <main>
      <TopBar />
      <TabBar />
      // ! FIXME: This swiper should allow to scroll vertically;
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: false }}
        scrollbar={{ draggable: false }}
        onSlideChange={(e) => console.log(e.activeIndex)}
      >
        <SwiperSlide style={{ overflow: "scroll" }} key={0}>
          <Background />
        </SwiperSlide>
        <SwiperSlide key={1}>
          <Background />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <Background />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
