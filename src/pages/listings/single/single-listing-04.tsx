import { Link, useParams } from 'react-router-dom'
import logo4 from '../../../assets/img/logo-4.png'
import tick from '../../../assets/img/tick.svg'
import bg from '../../../assets/img/single-4.jpg'

import { FaLocationDot } from 'react-icons/fa6'
import { BsBriefcase, BsStarFill, BsStarHalf, BsTelephone } from 'react-icons/bs'

import NavbarDark from '../../../components/navbar/navbar-dark'
import Descriptions from '../../../components/list-detail/descriptions'
import Features from '../../../components/list-detail/features'
import Galleries from '../../../components/list-detail/galleries'
import Maps from '../../../components/list-detail/maps'
import Reviews from '../../../components/list-detail/reviews'
import List from '../../../components/list-detail/list'
import SingleSidebarFour from '../../../components/list-detail/single-sidebar-four'
import FooterTop from '../../../components/footer-top'
import Footer from '../../../components/footer'
import BackToTop from '../../../components/back-to-top'

import { listData } from '../../../data/data'

export default function SingleListing4() {
    let params = useParams()
    let id:any = params.id
    let data = listData.find((item)=>item.id === parseInt(id))
  return (
    <>
        <NavbarDark/>

        <section className="bg-cover position-relative ht-500 py-0" style={{backgroundImage:`url(${data?.image ? data?.image : bg})`}} data-overlay="4">
            <div className="container h-100">
                <div className="row align-items-start">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div className="mainlistingInfo">
                            <div className="d-flex align-items-end justify-content-between flex-wrap gap-3">
                                <div className="firstColumn">
                                    <div className="listingFirstinfo d-flex align-items-center justify-content-start gap-3 flex-wrap">
                                        <div className="listingAvatar">
                                            <Link to="#" className="d-block"><img src={logo4} className="img-fluid rounded-3" width="95" alt="Avatar"/></Link>
                                        </div>
                                        <div className="listingCaptioninfo">
                                            <div className="propertyTitlename d-flex align-items-center gap-2 mb-1"><h2 className="fw-semibold text-light mb-0">{data?.title ? data.title : 'Christmas Monday'}</h2><span className="verified mt-1"><img src={tick} className="img-fluid" width="22" alt="Verified Listing"/></span></div>
                                            <div className="listingsbasicInfo">
                                                <div className="d-flex align-items-center justify-content-start flex-wrap gap-2">
                                                    <div className="flexItem me-2"><span className="text-md fw-medium text-light"><FaLocationDot className="me-2"/>{data?.loction ? data.loction : 'Old Paris, France'}</span></div>
                                                    <div className="flexItem me-2"><span className="text-md fw-medium text-light"><BsBriefcase className="me-2"/>{data?.tag ? data.tag : 'Events'}</span></div>
                                                    <div className="flexItem">
                                                        <div className="d-flex align-items-center justify-content-start gap-2">
                                                            <div className="d-flex align-items-center justify-content-start gap-1">
                                                                <BsStarFill className="text-warning text-sm"/><BsStarFill className="text-warning text-sm"/><BsStarFill className="text-warning text-sm"/><BsStarFill className="text-warning text-sm"/><BsStarHalf className="text-warning text-sm"/>
                                                            </div>
                                                            <span className="text-md fw-medium text-light">{data?.review ? `(${data.review})` : '(2k Reviews)'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lastColumn">	
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap gap-3">
                                        <div className="flexStart Priceinfo d-flex flex-column">
                                            <span className="fw-medium text-light">Event Time</span>
                                            <span className="fw-bold text-md text-light">24 Nov 2024 - 10:30AM To 14:30PM</span>
                                        </div>
                                        <div className="flexlastButton"><button type="button" className="btn px-4 btn-whites text-primary fw-medium rounded-pill"><BsTelephone className="me-2"/>Call Now</button></div>
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
                            <Descriptions/>
                            
                            <Features/>
                            
                            <Galleries/>
                            
                            <Maps/>
                            
                            <Reviews/>

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
