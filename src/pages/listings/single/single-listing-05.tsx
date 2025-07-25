// @ts-nocheck 
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import car1 from '../../../assets/img/car-1.jpg'
import car2 from '../../../assets/img/car-2.jpg'
import car3 from '../../../assets/img/car-3.jpg'
import car4 from '../../../assets/img/car-4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { FaLocationDot } from 'react-icons/fa6'
import { BsBriefcase, BsTelephone } from 'react-icons/bs'

import NavbarDark from '../../../components/navbar/navbar-dark'
import Descriptions from '../../../components/list-detail/descriptions'
import Galleries from '../../../components/list-detail/galleries'
import Maps from '../../../components/list-detail/maps'
import List from '../../../components/list-detail/list'
import SingleSidebarFour from '../../../components/list-detail/single-sidebar-four'
import FooterTop from '../../../components/footer-top'
import Footer from '../../../components/footer'
import BackToTop from '../../../components/back-to-top'
import AboutTwo from '../../../components/list-detail/about-two'

import { listData } from '../../../data/data'

export default function SingleListing5() {
     const [isOpen, setisOpen] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const params = useParams()
    const id:any = params.id
    const data = listData.find((item)=>item.id === parseInt(id))
    
    const handleImageClick = (index:number) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };

    const car = [car1,car2,car3,car4,car1,car2,car3,car4]

    const slides = car.map((image) => ({ src: image }));
  return (
    <>
        <NavbarDark/>

        <section className="py-0">
            <div className="container-fluid p-0">
                <div className="row align-items-start">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div className="owl-carousel owl-theme galleryslide">
                            <Swiper
                                slidesPerView={2.5}
                                spaceBetween={0}
                                modules={[Autoplay]}
                                loop={true}
                                autoplay={{delay: 2000, disableOnInteraction: false,}} 
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 2 },
                                    1440: { slidesPerView: 2 },
                                }}
                            >
                                {car.map((item,index)=>{
                                    return(
                                        <SwiperSlide className="gallery-slides" key={index}>
                                            <Link to="#" onClick={() => handleImageClick(index)}className="mfp-gallery"><img src={item} className="img-fluid" alt="brand image"/></Link>
                                        </SwiperSlide>
                                    )
                                })}  
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
        <Lightbox open={isOpen} close={() => setisOpen(false)} slides={slides} index={currentImageIndex} />

        <section className="position-relative py-4 bg-white">
            <div className="container">
            
                <div className="row align-items-start">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div className="mainlistingInfos">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="firstColumn">
                                    <div className="listingFirstinfo d-flex align-items-center justify-content-start gap-3 flex-wrap">
                                        <div className="listingCaptioninfo">
                                            <div className="propertyTitlename d-flex align-items-center gap-2 mb-1"><h3 className="fw-semibold mb-0">{data?.title ? data.title : 'TATA Nexon XM White'}</h3></div>
                                            <div className="listingsbasicInfo">
                                                <div className="d-flex align-items-center justify-content-start flex-wrap gap-2">
                                                    <div className="flexItem me-2"><span className="text-md fw-medium d-flex align-items-center"><FaLocationDot className="me-2"/>{data?.loction ? data.loction : 'Old Paris, France'}</span></div>
                                                    <div className="flexItem me-2"><span className="text-md text-success fw-medium d-flex align-items-center"><BsBriefcase className="me-2"/>Classified</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lastColumn">	
                                    <div className="d-flex align-items-center justify-content-md-end gap-3">
                                        <div className="flexStart Priceinfo d-flex flex-column">
                                            <span className="fw-medium">Price</span>
                                            <span className="fw-bold fs-6 text-dark">$2,485</span>
                                        </div>
                                        <div className="flexlastButton"><button type="button" className="btn px-4 btn-light-primary fw-medium rounded-pill"><BsTelephone className="me-2"></BsTelephone>Call Now</button></div>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

        <section className="gray-simple pt-4 pt-xl-5">
            <div data-bs-spy="scroll" data-bs-target="#scrollphyNav" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
                <div className="container">
                    <div className="row align-items-start gx-xl-5 g-4">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <AboutTwo/>
                            
                            <Galleries/>

                            <Descriptions/>
                            
                            <Maps/>

                            <List/>
                            
                        </div>
                        
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <SingleSidebarFour/>
                        </div>
                    
                    </div>
                
                </div>
            </div>
        </section>

        <FooterTop/>
        <Footer/>
        <BackToTop/>
    </>
  )
}
