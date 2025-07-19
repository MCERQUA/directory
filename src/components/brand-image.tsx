// @ts-nocheck 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import logo1 from '../assets/img/brand/logo-1.png';
import logo2 from '../assets/img/brand/logo-2.png';
import logo3 from '../assets/img/brand/logo-3.png';
import logo4 from '../assets/img/brand/logo-4.png';
import logo5 from '../assets/img/brand/logo-5.png';
import logo6 from '../assets/img/brand/logo-6.png';

const logoImg = [logo1, logo2, logo3, logo4, logo5, logo6, logo1];

export default function BrandImage() {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          modules={[Autoplay]}
          loop={true}
          autoplay={{delay: 2000, disableOnInteraction: false,}}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
        >
          {logoImg.map((item, index) => (
            <SwiperSlide className="brand-slide px-3 px-lg-5" key={index}>
              <img src={item} className="light-mode-item img-fluid" alt="brand"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
