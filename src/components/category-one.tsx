// @ts-nocheck 
import { Link } from 'react-router-dom'

import { categoryData } from '../data/data'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { IconType } from 'react-icons';

interface CategoryData{
    image: string;
    icon: IconType;
    title: string;
    list: string;
}

export default function CategoryOne() {
  return (
    <div className="row align-items-center justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
             <Swiper
                      slidesPerView={6}
                      spaceBetween={30}
                      modules={[Autoplay]}
                      loop={true}
                      autoplay={{delay: 2100, disableOnInteraction: false,}}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                      }}
                    >
                {categoryData.map((item:CategoryData,index:number)=>{
                    const Icon = item.icon
                    return(
                        <SwiperSlide className="singleCategory" key={index}>
                            <div className="category-small-wrapper light">
                                <Link to="#" className="categoryBox">
                                    <div className="categoryCapstions">
                                        <div className="catsIcons"><div className="icoBoxx"><Icon /></div></div>
                                        <div className="catsTitle"><h5>{item.title}</h5></div>
                                        <div className="CatsLists"><span className="categorycounter">{item.list}</span></div>
                                    </div>
                                </Link>
                            </div>	
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>
        </div>
    </div>
  )
}
