// @ts-nocheck 
import { reviewData } from '../data/data'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';

import { IconType } from 'react-icons';

interface ReviewData{
    rate: IconType[];
    title: string;
    desc: string;
    image: string;
    name: string;
    position: string;
}

export default function ClientOne() {
  if (!reviewData || reviewData.length === 0) {
    return (
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="text-center py-5">
            <div className="text-muted">
              <h5>No Reviews Available</h5>
              <p>Customer testimonials will appear here as our contractor network grows.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
        <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                 <Swiper
                          slidesPerView={4}
                          spaceBetween={30}
                          modules={[Autoplay,Pagination]}
                          pagination={true}
                          loop={true}
                          autoplay={{delay: 2000, disableOnInteraction: false,}}
                          breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                          }}
                        >
                    {reviewData.map((item:ReviewData,index:number)=>{
                        return(
                            <SwiperSlide className="singleItem" key={index}>
                                <div className="reviews-wrappers">
                                    <div className="reviewsBox card border-0 rounded-4 shadow-sm">
                                        <div className="card-body p-xl-5 p-lg-5 p-4">
                                            <div className="reviews-topHeader d-flex flex-column mb-3">
                                                <div className="d-flex align-items-center justify-content-center mb-2">
                                                    {item.rate.map((el,index)=>{
                                                        const Icon = el
                                                        return(
                                                            <span className="me-1 text-sm text-warning" key={index}><Icon className=""/></span>
                                                        )
                                                    })}
                                                </div>
                                                <div className="revws-desc text-center">
                                                    <p className="text-dark fw-semibold mb-1">{item.title}</p>
                                                    <p className="m-0 text-dark">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="reviewsers d-flex flex-column mt-5">
                                        <div className="d-flex align-items-center flex-column flex-thumbes gap-2">
                                            <div className="revws-pic"><img src={item.image} className="img-fluid circle" width="55" alt=""/></div>
                                            <div className="revws-caps text-center">
                                                <h6 className="fw-medium fs-6 m-0">{item.name}</h6>
                                                <p className="text-muted-2 text-md m-0">{item.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
  )
}
