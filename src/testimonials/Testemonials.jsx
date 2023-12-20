import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";

import "swiper/css/pagination";
import "./styles.css";
import testemonials from "./data";
import Testemonial from "./Testemonial";
import "./testemonials.css";
export default function Testemonials() {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>these are unbiased testimonials from some of my clients</p>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testemonials.map((testemonial) => (
            <SwiperSlide key={testemonial.id}>
              <Testemonial testemonial={testemonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
