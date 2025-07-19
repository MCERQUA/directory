// @ts-nocheck 
import { categoryData } from '../data/data'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface CategoryData{
    image: string;
    icon: IconType;
    title: string;
    list: string;
}

export default function CategoriesFour() {
  return (
    <div className="row align-items-center justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="owl-carousel categorySlider">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{delay: 2100, disableOnInteraction: false,}}
                    breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 6 },
                    }}
                >
                {categoryData.map((item:CategoryData,index:number)=>{
                    const Icon = item.icon
                    return(
                        <SwiperSlide className="singleCategory" key={index}>
                            <div className="moder-category">
                                <div className="moder-categoryImage">
                                    <img src={item.image} className="img-fluid" alt="Category Image"/>
                                    <div className="moder-categoryIcon">
                                        <Icon/>
                                    </div>
                                </div>
                                <div className="moder-categoryContent text-center">
                                    <h5><Link to="/listing_page">{item.title}</Link></h5>
                                    <div className="d-flex align-items-center justify-content-center"><span className="badge badge-xs rounded-pill">{item.list}</span></div>
                                </div>
                            </div>	
                        </SwiperSlide>
                    )
                })}
                </Swiper>
                
            </div>
        </div>
    </div>
)
}
