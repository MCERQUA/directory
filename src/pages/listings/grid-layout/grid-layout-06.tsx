import { Link } from 'react-router-dom'

import NavbarDark from '../../../components/navbar/navbar-dark'
import ListSidebarOne from '../../../components/list-sidebar-one'
import FooterTop from '../../../components/footer-top'
import Footer from '../../../components/footer'
import BackToTop from '../../../components/back-to-top'

import bg from '../../../assets/img/title-bg.png'

import { listData } from '../../../data/data'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsGeoAlt, BsPatchCheckFill, BsStar, BsStarFill, BsSuitHeart, BsTelephone } from 'react-icons/bs'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
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

export default function GridLayout6() {
  return (
    <>
        <NavbarDark/>

        <div className="image-cover hero-banner overflow-hidden py-5" style={{backgroundImage:`url(${bg})`, backgroundColor:'#ffe8ee'}}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-lg-0 pt-5">
                    <div className="position-relative text-start my-4">
                        <h2>Grid Style 02</h2>
                            <nav id="breadcrumbs" className="breadcrumbs">
                                <ul>
                                    <li><Link to="#">Home<MdKeyboardArrowRight className='ms-1'/></Link></li>
                                    <li><Link to="#">Listing<MdKeyboardArrowRight className='ms-1'/></Link></li>
                                    <li>Grid Style 02</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <section>
				<div className="container">
					<div className="row g-4">
						<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
							<ListSidebarOne/>
						</div>
				  
						<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
							
							<div className="row align-items-start mb-4">
								<div className="col-xl-12 col-lg-12 col-md-12">
									<div className="d-flex align-items-center justify-content-start gap-3 flex-wrap">
										
										<div className="alert tag-alert alert-light alert-dismissible fade show" role="alert">
											<span>Classified</span>
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										
										<div className="alert tag-alert alert-light alert-dismissible fade show" role="alert">
											<span>Services</span>
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										
										<div className="alert tag-alert alert-light alert-dismissible fade show" role="alert">
											<span>75Km</span>
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										
										<div className="alert tag-alert alert-light alert-dismissible fade show" role="alert">
											<span>Dinner</span>
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										
										<div className="alert tag-alert alert-light alert-dismissible fade show" role="alert">
											<span>$80-$100</span>
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										
										<div className="clearList">
											<Link to="#" className="fw-medium text-primary text-md">Clear All</Link>
										</div>
										
									</div>
								</div>
							</div>
						
							<div className="row align-items-center justify-content-between mb-4">
								<div className="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
									<h6 className="m-0">64 Listings Found</h6>
								</div>
								
								<div className="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
									<div className="text-end">
										<div className="dropdown d-inline-flex p-0">
											<a href="#" className="py-2 px-3 dropdown-toggle toogleDrops" id="shortfilter" data-bs-toggle="dropdown" aria-expanded="false">
												Short Listings
											</a>
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
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" key={index}>
                                                <div className="listingitem-container">
                                                    <div className="singlelisting-item bg-light border-0">
                                                        <div className="listing-top-item">
                                                            <div className="position-absolute end-0 top-0 me-3 mt-3 z-2">
                                                                <Link to={`/single-listing-01/${item.id}`} className="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Save Listing"><BsSuitHeart className="m-0"/></Link>
                                                            </div>
                                                            <Link to={`/single-listing-01/${item.id}`} className="topLink">
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
                                                            <div className="opssListing position-absolute start-0 bottom-0 ms-3 mb-4 z-2">
                                                                <div className="d-flex align-items-center justify-content-between gap-2">
                                                                    <div className="listing-avatar">
                                                                        <Link to={`/single-listing-01/${item.id}`} className="avatarImg"><img src={item.user} className="img-fluid circle" alt="Avatar"/></Link>
                                                                    </div>
                                                                    <div className="listing-details">
                                                                        <h4 className="listingTitle"><Link to={`/single-listing-01/${item.id}`} className="titleLink">{item.title}<span className="verified"><BsPatchCheckFill className="m-0"/></span></Link></h4>
                                                                        <div className="list-infos">
                                                                            <div className="d-flex gap-3 mt-1">
                                                                                <div className="list-distance text-light d-flex align-items-center"><BsGeoAlt className="mb-0 me-2"/>{item.loction}</div>
                                                                                <div className="list-calls text-light hide-mob mt-1 d-flex align-items-center"><BsTelephone className="mb-0 me-2"/>{item.call}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="listing-footer-item border-0">
                                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                                <div className="catdWraps">
                                                                    <div className="flex-start">
                                                                        <Link to={`/single-listing-01/${item.id}`} className="d-flex align-items-center justify-content-start gap-2">
                                                                            <span className={item.tagIconStyle}><Icon className=""></Icon></span>
                                                                            <span className="catTitle">{item.tag}</span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center listing-rates">
                                                                    <span className="d-flex align-items-center justify-content-start gap-1 text-sm">
                                                                        <BsStarFill className="mb-0 text-warning"/>
                                                                        <BsStarFill className="mb-0 text-warning"/>
                                                                        <BsStarFill className="mb-0 text-warning"/>
                                                                        <BsStarFill className="mb-0 text-warning"/>
                                                                        <BsStarFill className="mb-0 text-warning"/>
                                                                    </span>
                                                                    <span className="text-md text-muted-2 hide-mob ms-1">(42 Reviews)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
								
							</div>
							
							<div className="row align-items-center justify-content-center mt-5">
								<div className="col-xl-12 col-lg-12 col-md-12">
									<nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item">
                                                <Link to="#" className="page-link"><FaArrowLeft className=""/></Link>
                                            </li>
                                            <li className="page-item"><Link to="#" className="page-link" >1</Link></li>
                                            <li className="page-item active"><Link to="#" className="page-link">2</Link></li>
                                            <li className="page-item"><Link to="#" className="page-link">3</Link></li>
                                            <li className="page-item"><Link to="#" className="page-link">4</Link></li>
                                            <li className="page-item"><Link to="#" className="page-link">5</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#"><FaArrowRight className=""/></Link>
                                            </li>
                                        </ul>
									</nav>
								</div>
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
