"use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; 
// import SwiperCore, { Autoplay, Pagination } from "swiper";
// import { SwiperBreakpoint } from "swiper";
// SwiperCore.use([Autoplay, Pagination, SwiperBreakpoint]);

// const Card = ({ img, name, text }) => {
//   return (
//     <div class="w-full text-center py-10 px-6">
//       <div class="flex flex-col items-center">
//         <img src={img} alt="" />
//       </div>
//       <div>
//         <h1>{name}</h1>
//         <p class="paragraph">{text}</p>
//       </div>
//     </div>
//   );
// };

// const Testimonial = () => {
//   const breakpoints = {
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//   };
//   return (
//     <section class="py-20 mt-10">
//       <div class="container w-full">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={breakpoints}
//         >
//           <SwiperSlide>
//             <Card
//               img={"./images/avatar-anisha.png"}
//               text={"Anisha Li"}
//               name={
//                 "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
//               }
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card
//               img={"./images/avatar-ali.png"}
//               text={"Ali Bravo"}
//               name={
//                 "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
//               }
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card
//               img={"./images/avatar-richard.png"}
//               text={"Richard Watts"}
//               name={
//                 "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
//               }
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card
//               img={"./images/avatar-shanai.png"}
//               text={"Shanai Gough"}
//               name={
//                 "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
//               }
//             />
//           </SwiperSlide>
//         </Swiper>
       
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

// src/components/Testimonial.jsx
// src/components/Testimonial.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, Pagination } from "swiper";

// Import additional Swiper modules if needed
SwiperCore.use([Autoplay, Pagination]);

const Card = ({ img, name, text }) => {
  return (
    <div className="w-full text-center py-10 px-6">
      <div className="flex flex-col items-center">
        <img src={img} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <p className="paragraph">{text}</p>
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
    <section className="py-20 mt-10">
      <div className="container w-full">
        <Swiper
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
      </div>
    </section>
  );
};

export default Testimonial;

