// @ts-nocheck 
import { Link } from 'react-router-dom'

import { blogData } from '../data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import { BsCalendar2, BsEyeFill } from 'react-icons/bs'

interface BlogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
    views: string;
}

export default function BlogOne() {
  if (!blogData || blogData.length === 0) {
    return (
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="text-center py-5">
            <div className="text-muted">
              <h5>No Blog Posts Available</h5>
              <p>Blog posts will appear here soon. Check back later for helpful tips and updates.</p>
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
                    slidesPerView={3}
                    spaceBetween={15}
                    modules={[Autoplay,Pagination]}
                    pagination={true}
                    loop={blogData.length > 1}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1440: { slidesPerView: 3 },
                    }}
                >
                {blogData.map((item: BlogData) => {
                    return(
                        <SwiperSlide className="singleItem" key={item.id}>
                            <div className="listingitem-container">
                                <div className="singlelisting-item">
                                    <div className="listing-top-item">
                                        <Link to={`/blog-detail/${item.id}`} className="topLink">
                                            <div className="position-absolute start-0 top-0 ms-3 mt-3 z-2">
                                                <div className="d-flex align-items-center justify-content-start gap-2">
                                                    <span className="badge badge-xs badge-transparent">Blog Post</span>
                                                </div>
                                            </div>
                                            <img src={item.image} className="img-fluid" alt="Blog Image"/>
                                        </Link>
                                        <div className="position-absolute end-0 bottom-0 me-3 mb-3 z-2">
                                            <Link to={`/blog-detail/${item.id}`} className="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Read Article"><BsEyeFill className="m-0"/></Link>
                                        </div>
                                    </div>
                                    <div className="listing-middle-item">
                                        <div className="listing-details">
                                            <h4 className="listingTitle"><Link to={`/blog-detail/${item.id}`} className="titleLink">{item.title}</Link></h4>
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className="listing-info-details">
                                            <div className="d-flex align-items-center justify-content-start gap-4">
                                                <div className="list-calls d-flex align-items-center"><BsCalendar2 className="mb-0 me-2"/>{item.date}</div>
                                                <div className="list-distance d-flex align-items-center"><BsEyeFill className="mb-0 me-2"/>{item.views}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-footer-item">
                                        <div className="d-flex align-items-center justify-content-between gap-2">
                                            <div className="catdWraps">
                                                <div className="flex-start">
                                                    <Link to={`/blog-detail/${item.id}`} className="d-flex align-items-center justify-content-start gap-2">
                                                        <span className="catIcon text-primary"><BsCalendar2 /></span>
                                                        <span className="catTitle">Article</span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="listing-shares">
                                                <div className="d-flex align-items-center justify-content-start gap-2">
                                                    <Link to={`/blog-detail/${item.id}`} className="smallLinks" data-bs-toggle="tooltip" data-bs-title="Read Article"><BsEyeFill className="m-0"/></Link>
                                                </div>
                                            </div>
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
