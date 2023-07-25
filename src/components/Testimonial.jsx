"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Breakpoints } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Breakpoints]);

const Card = ({ img, name, text }) => {
  return (
    <div class="w-full text-center py-10 px-6">
      <div class="flex flex-col items-center">
        <img src={img} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <p class="paragraph">{text}</p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  };
  return (
    <section class="py-20 mt-10">
      <div class="container w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={breakpoints}
        >
          <SwiperSlide>
            <Card
              img={"./images/avatar-anisha.png"}
              text={"Anisha Li"}
              name={
                "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={"./images/avatar-ali.png"}
              text={"Ali Bravo"}
              name={
                "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={"./images/avatar-richard.png"}
              text={"Richard Watts"}
              name={
                "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={"./images/avatar-shanai.png"}
              text={"Shanai Gough"}
              name={
                "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
              }
            />
          </SwiperSlide>
        </Swiper>
        {/* <div class="card w-full text-center swiper-slide">
                <div class="flex flex-col items-center">
                    <img src="" alt=""/>
                </div>
                <div>
                    <h1></h1>
                    <p class="paragraph">
                       
                    </p>
                </div>
            </div>
            <div class="card swiper-slide">
                <div class="flex flex-col items-center">
                    <img src="" alt=""/>
                </div>
                <div>
                    <h1></h1>
                    <p class="paragraph">
                        
                    </p>
                </div>
            </div>
            <div class="card swiper-slide">
                <div class="flex flex-col items-center">
                    <img src="" alt=""/>
                </div>
                <div>
                    <h1></h1>
                    <p class="paragraph">
                        
                    </p>
                </div>
            </div>
            <div class="card swiper-slide">
                <div class="flex flex-col items-center">
                    <img src="" alt=""/>
                </div>
                <div>
                    <h1></h1>
                    <p class="paragraph">
                        
                    </p>
                </div>
            </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
