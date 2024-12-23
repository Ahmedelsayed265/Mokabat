import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import useGetServices from "../hooks/services/useGetServices";

export default function Services() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data: services } = useGetServices();
  const { lang } = useSelector((state) => state.language);

  const handleSwiperInit = (swiper) => {
    if (swiper && swiper.destroyed) {
      swiper.init();
    }
    setThumbsSwiper(swiper);
  };

  return (
    <section className="services_page">
      <div className="container">
        <Swiper
          // loop={true}
          speed={1000}
          slidesPerView={1}
          spaceBetween={16}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          dir={lang === "ar" ? "rtl" : "ltr"}
          key={lang}
          className="services_swiper"
        >
          {services?.map((service) => (
            <SwiperSlide key={service?.id}>
              <div className="row justify-content-between">
                <div className="col-lg-5 col-12 p-2">
                  <div className="img">
                    <img src={service?.image} alt={service?.title} />
                  </div>
                </div>
                <div className="col-lg-6 col-12 p-2">
                  <div className="sercvice_content">
                    <h2>{service?.title}</h2>
                    <p>{service?.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="thumbs">
          <Swiper
            speed={1000}
            slidesPerView="auto"
            className="services_swiper"
            onSwiper={handleSwiperInit}
            watchSlidesProgress={true}
            watchSlidesVisibility={true}
            freeMode={{
              enabled: true,
              sticky: false,
              momentumRatio: 0.25
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            dir={lang === "ar" ? "rtl" : "ltr"}
            // touchRatio={1.5}
            // touchAngle={45}
          >
            {services?.map((service) => (
              <SwiperSlide key={service?.id}>
                <button>{service?.title}</button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
