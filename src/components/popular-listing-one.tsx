// @ts-nocheck 

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getPublicListings, BusinessListing } from '../lib/supabase'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';
import { BsGeoAlt, BsPatchCheckFill, BsStar, BsSuitHeart, BsTelephone } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface ListData{
    id: number;
    image: string;
    user: string;
    status: string;
    featured: boolean;
    title: string;
    desc: string;
    call: string;
    loction: string;
    tag: string;
    tagIcon: IconType;
    tagIconStyle: string;
    review: string;
    rating: string;
    ratingRate: string;
    instantBooking: boolean;
}

export default function PopularListingOne() {
  const [listings, setListings] = useState<BusinessListing[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadListings = async () => {
      try {
        const data = await getPublicListings(8)
        setListings(data)
      } catch (error) {
        console.error('Error loading popular listings:', error)
      } finally {
        setLoading(false)
      }
    }
    loadListings()
  }, [])

  if (loading || listings.length === 0) {
    return null // Don't show anything if no data
  }

  return (
    <div className="row align-items-center justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    modules={[Autoplay,Pagination]}
                    pagination={true}
                    loop={true}
                    autoplay={{delay: 2000, disableOnInteraction: false,}}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 4 },
                    }}
                >
                {listings.map((listing)=>{
                    return(
                        <SwiperSlide className="singleItem" key={listing.id}>
                            <div className="listingitem-container">
                                <div className="singlelisting-item">
                                    <div className="listing-top-item">
                                        <Link to="/single-listing-01" className="topLink">
                                            <div className="position-absolute start-0 top-0 ms-3 mt-3 z-2">
                                                <div className="d-flex align-items-center justify-content-start gap-2">
                                                    {item.status === 'open' ? (<span className="badge badge-xs text-uppercase listOpen">Open</span>) :(<span className="badge badge-xs text-uppercase listClose">Closed</span>)}

                                                    <span className="badge badge-xs badge-transparent">$$$</span>

                                                    {item.featured === true && 
                                                        <span className="badge badge-xs badge-transparent"><BsStar className="mb-0 me-1"/>Featured</span>
                                                    }
                                                </div>
                                            </div>
                                            <img src={item.image} className="img-fluid" alt="Listing Image"/>
                                        </Link>
                                        <div className="position-absolute end-0 bottom-0 me-3 mb-3 z-2">
                                            <Link to="/single-listing-01" className="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Save Listing"><BsSuitHeart className="m-0"/></Link>
                                        </div>
                                    </div>
                                    <div className="listing-middle-item">
                                        <div className="listing-avatar">
                                            <Link to="/single-listing-01" className="avatarImg"><img src={item.user} className="img-fluid circle" alt="Avatar"/></Link>
                                        </div>
                                        <div className="listing-details">
                                            <h4 className="listingTitle"><Link to="/single-listing-01" className="titleLink">{item.title}<span className="verified"><BsPatchCheckFill className="m-0"/></span></Link></h4>
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className="listing-info-details">
                                            <div className="d-flex align-items-center justify-content-start gap-2">
                                                <div className="list-calls"><BsTelephone className="mb-0 me-2"/>{item.call}</div>
                                                <div className="list-distance"><BsGeoAlt className="mb-0 me-2"/>{item.loction}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-footer-item">
                                        <div className="d-flex align-items-center justify-content-between gap-2">
                                            <div className="catdWraps">
                                                <div className="flex-start">
                                                    <Link to="/single-listing-01" className="d-flex align-items-center justify-content-start gap-2">
                                                        <span className={`catIcon ${item.tagIconStyle}`}><Icon className=""/></span>
                                                        <span className="catTitle">{item.tag}</span>
                                                    </Link>
                                                </div>
                                                <div className="flex-end"><span className="moreCatcounter">+2</span></div>
                                            </div>
                                            <div className="listing-rates">
                                                <div className="d-flex align-items-center justify-content-start gap-1">
                                                    <span className={`ratingAvarage ${item.rating}`}>{item.ratingRate}</span>
                                                    <span className="overallrates">{item.review}</span>
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
