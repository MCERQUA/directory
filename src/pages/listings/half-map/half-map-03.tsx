import { Link } from 'react-router-dom'

import FilterTwo from '../../../components/filter-two'
import NavbarFull from '../../../components/navbar/navbar-full'
import Map from '../../../components/map'

import { listData } from '../../../data/data'

import { BsGeoAlt, BsPatchCheckFill, BsStar, BsSuitHeart, BsTelephone, BsEyeFill, BsShareFill } from 'react-icons/bs'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'
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

export default function HalfMap3() {
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
                                <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12" key={index}>
                                    <div className="listingitem-container">
                                        <div className="singlelisting-item">
                                            <div className="listing-top-item">
                                                <Link to={`/single-listing-03/${item.id}`} className="topLink">
                                                    <div className="position-absolute start-0 top-0 ms-3 mt-3 z-2">
                                                        <div className="d-flex align-items-center justify-content-start gap-2">
                                                            {item.status === 'open' ? (<span className="badge badge-xs text-uppercase listOpen">Open</span>) :(<span className="badge badge-xs text-uppercase listClose">Closed</span>)}
        
                                                            <span className="badge badge-xs badge-transparent">$$$</span>
        
                                                            {item.featured === true && 
                                                                <span className="badge badge-xs badge-transparent d-flex align-items-center"><BsStar className="mb-0 me-1"/>Featured</span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <img src={item.image} className="img-fluid" alt="Listing Image"/>
                                                </Link>
                                                <div className="position-absolute end-0 bottom-0 me-3 mb-3 z-2">
                                                    <Link to={`/single-listing-03/${item.id}`} className="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Save Listing"><BsSuitHeart className="m-0"/></Link>
                                                </div>
                                            </div>
                                            <div className="listing-middle-item">
                                                <div className="listing-avatar">
                                                    <Link to={`/single-listing-03/${item.id}`} className="avatarImg"><img src={item.user} className="img-fluid circle" alt="Avatar"/></Link>
                                                </div>
                                                <div className="listing-details">
                                                    <h4 className="listingTitle"><Link to={`/single-listing-03/${item.id}`} className="titleLink">{item.title}<span className="verified"><BsPatchCheckFill className="m-0"/></span></Link></h4>
                                                    <p>{item.desc}</p>
                                                </div>
                                                <div className="listing-info-details">
                                                    <div className="d-flex align-items-center justify-content-start gap-4">
                                                        <div className="list-calls d-flex align-items-center"><BsTelephone className="mb-0 me-2"/>{item.call}</div>
                                                        <div className="list-distance d-flex align-items-center"><BsGeoAlt className="mb-0 me-2"/>{item.loction}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="listing-footer-item">
                                                <div className="d-flex align-items-center justify-content-between gap-2">
                                                    <div className="catdWraps">
                                                        <div className="flex-start">
                                                            <Link to={`/single-listing-03/${item.id}`} className="d-flex align-items-center justify-content-start gap-2">
                                                                <span className={`catIcon ${item.tagIconStyle}`}><Icon className=""/></span>
                                                                <span className="catTitle">{item.tag}</span>
                                                            </Link>
                                                        </div>
                                                        <div className="flex-end"><span className="moreCatcounter">+2</span></div>
                                                    </div>
                                                    <div className="listing-shares">
                                                        <div className="d-flex align-items-center justify-content-start gap-2">
                                                            <Link to={`/single-listing-03/${item.id}`} className="smallLinks" data-bs-toggle="tooltip" data-bs-title="View Listing"><BsEyeFill className="m-0"/></Link>
                                                            <Link to={`/single-listing-03/${item.id}`} className="smallLinks" data-bs-toggle="tooltip" data-bs-title="Save Listing"><BsSuitHeart className="m-0"></BsSuitHeart></Link>
                                                            <Link to={`/single-listing-03/${item.id}`} className="smallLinks" data-bs-toggle="tooltip" data-bs-title="Share Listing"><BsShareFill className="m-0"/></Link>
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
