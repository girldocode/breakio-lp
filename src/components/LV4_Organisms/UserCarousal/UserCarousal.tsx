"use client";
import { UserTestimonial } from "@/components/LV3_Cells";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const UserCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [randomIndex, setRandomIndex] = useState<number>(0);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * testimonials.length));
  }, []);

  const updateIndex = (swiper: SwiperType) => {
    if (swiper) {
      setCurrentIndex(swiper.realIndex);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const testimonials = [
    {
      src: "/Picture (2).png",
      alt: "First User Testimonial",
      imageUrl: "/Size=M.png",
      name: "Flower Decorations",
      tagline: "by Melvina Spring",
    },
    {
      src: "/Picture (3).png",
      alt: "Second User Testimonial",
      imageUrl: "/User Thumb.png",
      name: "Flower Decorations",
      tagline: "by Melvina Spring",
    },
    {
      src: "/Picture (4).png",
      alt: "Third User Testimonial",
      imageUrl: "/User Thumb (1).png",
      name: "Splash",
      tagline: "by Rwanda Melflor",
    },
    {
      src: "/Picture (5).png",
      alt: "Fourth User Testimonial",
      imageUrl: "/User Thumb (2).png",
      name: "Colorful Face",
      tagline: "by Melvina Spring",
    },
    {
      src: "/Picture (4).png",
      alt: "Fifth User Testimonial",
      imageUrl: "/User Thumb (3).png",
      name: "splash",
      tagline: "by Melvina Spring",
    },
  ];

  return (
    <div className="py-8 lg:py-20 px-16 relative max-h-[457px] sm:max-h-[673px]">
      {/* Swiper */}
      <div className="px-4">
        <Swiper
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateIndex(swiper);
          }}
          onSlideChange={(swiper) => updateIndex(swiper)}
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <UserTestimonial
                src={testimonial.src}
                alt={testimonial.alt}
                width={300}
                height={300}
                tagline={testimonial.tagline}
                name={testimonial.name}
                imageUrl={testimonial.imageUrl}
                active={index === currentIndex}
                showPromoteTag={index === randomIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Previous button */}
      <button
        onClick={handlePrev}
        className="hidden lg:block z-10 w-[60px] h-[60px] absolute left-0 top-[200px] bg-white text-gray-800 hover:bg-gray-100 py-[21px] px-6 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-400 rounded-full border-2 border-gray-200 shadow-lg hover:shadow-xl"
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.757 7L7.707 12C7.803 12.092 7.879 12.202 7.931 12.324C7.983 12.445 8.011 12.576 8.012 12.708C8.013 12.839 7.988 12.97 7.938 13.093C7.888 13.215 7.814 13.326 7.72 13.42C7.626 13.514 7.514 13.588 7.391 13.638C7.268 13.688 7.136 13.713 7.003 13.712C6.871 13.711 6.74 13.684 6.618 13.632C6.496 13.579 6.385 13.503 6.293 13.408L0.636 7.75C0.449 7.562 0.343 7.308 0.343 7C0.343 6.691 0.449 6.437 0.636 6.25L6.293 0.591C6.482 0.409 6.734 0.307 6.996 0.309C7.258 0.311 7.509 0.416 7.695 0.601C7.88 0.787 7.985 1.038 7.987 1.3C7.989 1.562 7.889 1.814 7.707 2.002L2.757 7Z"
            fill="#475569"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="hidden lg:block z-10 lg:z-[1] w-[60px] h-[60px] absolute right-0 top-[200px] bg-white text-gray-800 hover:bg-gray-100 py-[21px] px-6 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-400 rounded-full border-2 border-gray-200 shadow-lg hover:shadow-xl"
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.314 7L0.364 2C0.182 1.932 0.081 1.68 0.083 1.418 0.086 1.156 0.191 0.905 0.376 0.719 0.562 0.534 0.813 0.429 1.075 0.427 1.337 0.424 1.589 0.525 1.778 0.707L7.435 6.364C7.623 6.552 7.728 6.806 7.728 7C7.728 7.336 7.623 7.59 7.436 7.778L1.778 13.435C1.59 13.617 1.337 13.718 1.075 13.716 0.813 13.713 0.562 13.609 0.376 13.423 0.192 13.238 0.086 12.986 0.084 12.724 0.082 12.462 0.183 12.21 0.365 12.022L5.314 7Z"
            fill="#475569"
          />
        </svg>
      </button>
    </div>
  );
};

export default UserCarousel;
