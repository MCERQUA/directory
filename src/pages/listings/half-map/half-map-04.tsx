import { Link } from 'react-router-dom'


import FilterTwo from '../../../components/filter-two'
import NavbarFull from '../../../components/navbar/navbar-full'
import Map from '../../../components/map'

import { listData } from '../../../data/data'

import { BsPatchCheckFill, BsTelephone, BsCoin, BsLightningChargeFill  } from 'react-icons/bs'
import { FaArrowLeft, FaArrowRight,FaStar,FaLocationDot, FaHeart } from 'react-icons/fa6'
import { IconType } from 'react-icons'

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

export default function HalfMap4() {
  return (
    <>
        <NavbarFull/>

            <div className="map-banner-wrap half-map">
                <div className="map-left-box">
                    <div className="map-home flt-wrap">
                        <Map/>
                    </div>
                </div>
                <div className="map-content-wrap">
                    <FilterTwo/>
                    <div className="map-content-list py-4 border-top">
                        <div className="row align-items-center justify-content-between mb-4">
                            <div className="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                                <div className="totalListingshow">
                                    <h6 className="fw-medium mb-0">106 Listings Founds</h6>
                                </div>
                            </div>
                            
                            <div className="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                                <div className="text-end">
                                    <div className="dropdown d-inline-flex p-0">
                                        <Link to="#" className="py-2 px-3 dropdown-toggle toogleDrops bg-white" id="shortfilter" data-bs-toggle="dropdown" aria-expanded="false">
                                            Short Listings
                                        </Link>
                                        <div className="dropdown-menu border shadow-sm">
                                            <ul className="card rounded-0 p-0">
                                                <li><Link to="#" className="dropdown-item">Default Order</Link></li>
                                                <li><Link to="#" className="dropdown-item">Highest Rated</Link></li>
                                                <li><Link to="#" className="active dropdown-item">Most Reviewed</Link></li>
                                                <li><Link to="#" className="dropdown-item">Newest Listings</Link></li>
                                                <li><Link to="#" className="dropdown-item">Oldest Listings</Link></li>
                                                <li><Link to="#" className="dropdown-item">Featured Listings</Link></li>
                                                <li><Link to="#" className="dropdown-item">Most Viewed</Link></li>
                                                <li><Link to="#" className="dropdown-item">Short By A To Z</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="row align-items-center justify-content-center g-xl-4 g-3">
                            
                        {listData.slice(0,8).map((item:ListData,index:number)=>{
                            const Icon = item.tagIcon
                            return(
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={index}>
                                    <div className="listingCard listLayouts light card rounded-3 border-0">
                                        
                                        <div className="row align-items-center justify-content-start g-3">
                                            
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="listThumb overflow-hidden position-relative">
                                                    {item.status === 'open' ? (
                                                            <div className="position-absolute start-0 top-0 ms-3 mt-3"><span className="badge badge-xs text-uppercase listOpen rounded-pill">Open</span></div>
                                                    ) : (
                                                        <div className="position-absolute start-0 top-0 ms-3 mt-3"><span className="badge badge-xs text-uppercase listClose rounded-pill">Close</span></div>
                                                    )
                                                    }
                                                    
                                                    {item.featured && 
                                                        <div className="position-absolute end-0 bottom-0 me-3 mb-3"><span className="badge badge-xs featuredList rounded-pill d-flex align-items-center"><FaStar className="me-1"/>Featured</span></div>
                                                    }
                                                    <Link to={`/single-listing-04/${item.id}`} className="d-block"><img src={item.image} className="img-fluid list-thumb object-fit" alt="Listing Img"/></Link>
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                                                <div className="listCaption px-3 py-4">
                                                    <div className="listTitle d-block mb-4">
                                                        <div className="d-flex align-items-start justify-content-between gap-2">
                                                            <div className="flex-first">
                                                                <div className="d-flex align-items-center justify-content-start gap-2 flex-wrap mb-3">
                                                                    <div className="singleCaption">
                                                                        <div className="bg-white rounded-pill py-1 ps-1 pe-3">
                                                                            <div className="d-inline-flex align-items-center justify-content-start gap-2">
                                                                                <span className="square--25 circle bg-price text-light text-sm"><BsCoin className="lh-1 h-auto"/></span>
                                                                                <span className="text-sm fw-medium">$30.50-$50.55</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {item.instantBooking && 
                                                                        <div className="singleCaption">
                                                                            <div className="bg-white rounded-pill py-1 ps-1 pe-3">
                                                                                <div className="d-inline-flex align-items-center justify-content-start gap-2">
                                                                                    <span className="square--25 circle bg-booking text-light text-sm"><BsLightningChargeFill className="lh-1 h-auto"/></span>
                                                                                    <span className="text-sm fw-medium">Instant Booking</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                                <h5 className="listItemtitle mb-3"><Link to={`/single-listing-04/${item.id}`}>{item.title}<span className="verified"><BsPatchCheckFill className="m-0"/></span></Link></h5>
                                                                <div className="d-flex align-items-center justify-content-start flex-wrap gap-3">
                                                                    <div className="flex-start"><div className="list-location text-muted"><span><FaLocationDot className="me-2"/>Old Paris, France</span></div></div>
                                                                    <div className="flex-last">
                                                                        <div className=" d-flex align-items-center justify-content-start">
                                                                            <FaStar className="fa-solid fa-star text-warning"></FaStar><span className="mx-1 text-dark fw-bold">{item.ratingRate}</span><span className="text-muted text-md">(42k Reviews)</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex-last">
                                                                <Link to={`/single-listing-04/${item.id}`} className="bookmarkList"><FaHeart className=""/></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-features d-flex align-items-center justify-content-start row-gap-2 column-gap-3 flex-wrap text-dark">
                                                        <div className="d-flex align-items-center fw-medium">
                                                            <span className={item.tagIconStyle}><Icon className="text-md"></Icon></span>{item.tag}
                                                        </div>
                                                        <div className="d-flex align-items-center fw-medium">
                                                            <span className="listCall me-2"><BsTelephone className=""/></span>{item.call}
                                                        </div>			
                                                    </div>
                                                </div>	
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })}								
                            
                        </div>
                        
                        <div className="row align-items-center justify-content-center my-5">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <Link to="#" className="page-link"><FaArrowLeft /></Link>
                                        </li>
                                        <li className="page-item"><Link to="#" className="page-link">1</Link></li>
                                        <li className="page-item active"><Link to="#" className="page-link">2</Link></li>
                                        <li className="page-item"><Link to="#" className="page-link">3</Link></li>
                                        <li className="page-item"><Link to="#" className="page-link">4</Link></li>
                                        <li className="page-item"><Link to="#" className="page-link">5</Link></li>
                                        <li className="page-item">
                                            <Link to="#" className="page-link"><FaArrowRight /></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row align-items-center justify-content-center mt-5">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="copyrightbox text-center"><p className="mb-0">© {new Date().getFullYear()} ListingHub. Develop with <FaHeart className="ms-1 text-danger"></FaHeart>  By <Link to="https://shreethemes.in/" target="_blank">Shreethemes</Link></p></div>
                            </div>
                        </div>
                            
                    </div>
                </div>
                
            </div>
    </>
  )
}
