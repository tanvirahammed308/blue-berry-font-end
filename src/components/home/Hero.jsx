import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from "../../assets/img/hero/hero-1.png";
import img2 from "../../assets/img/hero/hero-2.png";
import img3 from "../../assets/img/hero/hero-3.png";

const slides = [
  {
    id: 1,
    url: img1,
    title: 'Explore Organic and Fresh Vegetables',
    subtitle: 'Flat 30% off',
    buttonText: 'Shop Now',
  },
  {
    id: 2,
    url: img2,
    title: 'Explore Healthy & Fresh Fruits',
    subtitle: 'Flat 30% off',
    buttonText: 'Shop Now',
  },
  {
    id: 3,
    url: img3,
    title: 'Explore Organic Food & Bakery',
    subtitle: 'Flat 30% off',
    buttonText: 'Shop Now',
  },
];

const Hero = () => {
  return (
    <section className="w-full mt-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[75vh] md:h-[90vh]"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full flex flex-col-reverse md:flex-row items-center justify-center">
              {/* Left Side: Text Section */}
              <div className="absolute left-0 w-full sm:w-1/2 text-white p-8 flex flex-col justify-center z-30 ">
                <p className="text-lg md:text-2xl mb-2 drop-shadow-sm text-red-500  font-semibold">
                  {item.subtitle}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md text-gray-800 leading-10 md:leading-15">
                  {item.title}
                </h2>
                <button className="border-2 border-[#6C7FD8] text-gray-800 py-2 px-2 rounded-full  transition w-40 cursor-pointer font-semibold bg-white ">
                  {item.buttonText}
                </button>
              </div>

              {/* Right Side: Image Section */}
              <div className="absolute right-0 w-full sm:w-1/2 h-full opacity-50 md:opacity-100">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover md:object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
