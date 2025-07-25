import { Link } from 'react-router-dom'

import AdminNavbar from '../../components/navbar/admin-navbar'
import AdminSidebar from '../../components/admin/admin-sidebar'
import BackToTop from '../../components/back-to-top'

import { adminListing } from '../../data/data'

import { BsStarFill, BsStarHalf, BsX } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'

interface listData{
    image: string;
    title: string;
    location: string;
    review: string;
    expired: boolean;
}

export default function DashboardBookmarks() {
  return (
    <>
        <AdminNavbar/>

        <section className="p-0">
            <div className="container-fluid p-0">
                <div className="row user-dashboard g-0">
                    
                    <AdminSidebar/>
                    
                    <div className="col-xl-10 col-lg-9 col-md-12 pt-lg-0 pt-5">
                        <div className="user-dashboard-box bg-light">
                            
                            <div className="dashHeader p-xl-5 p-4 pb-xl-0 pb-0 pt-lg-0 pt-5">
                                <h2 className="fw-medium mb-0">Bookmarked</h2>
                            </div>
                            
                            <div className="dashCaption p-xl-5 p-3 p-md-4">
                                
                                <div className="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="card rounded-3 shadow-sm">
                                            <div className="card-header px-4 py-3">
                                                <h4 className="m-0">Saved Listings</h4>
                                            </div>
                                            <div className="card-body p-0">
                                                <ul className="dashboardListgroup">
                                                    {adminListing.map((item:listData,index:number)=>{
                                                        return(
                                                            <li key={index}>
                                                                <div className="mngListings">
                                                                    <div className="d-flex align-items-center justify-content-start gap-3 flex-wrap">
                                                                        <div className="mngListinfirst">
                                                                            <div className="d-flex align-items-center justify-content-start gap-3 flex-wrap">
                                                                                <div className="mngListings-thumb">
                                                                                    <figure className="m-0"><img src={item.image} className="img-fluid rounded" alt="Avatar"/></figure>
                                                                                </div>
                                                                                
                                                                                <div className="mngListings-caps">
                                                                                    <h5 className="mnglstTitle">{item.title}</h5>
                                                                                    <span>{item.location}</span>
                                                                                    <div className="d-flex align-items-center justify-content-start gap-2 mt-3">
                                                                                        <div className="ratingView" data-rating="5.0">
                                                                                            <BsStarFill className='text-warning me-1'/>
                                                                                            <BsStarFill className='text-warning me-1'/>
                                                                                            <BsStarFill className='text-warning me-1'/>
                                                                                            <BsStarFill className='text-warning me-1'/>
                                                                                            <BsStarHalf className='text-warning me-1'/>
                                                                                        </div>
                                                                                        <div className="text-md">{item.review}</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mngListinlast">
                                                                            <div className="d-flex align-items-center justify-content-start gap-3">
                                                                                <Link to="#" className="btn btn-sm btn-light-danger fw-medium rounded-pill"><BsX className="me-1"/>Remove</Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    })}
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="row align-items-start g-4">
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <p className="text-muted m-0">© {new Date().getFullYear()} ListingHub. Develop with <FaHeart className="ms-1 text-danger"></FaHeart>  By <Link to="https://shreethemes.in/" target="_blank">Shreethemes</Link></p>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <BackToTop/>
    </>
  )
}
