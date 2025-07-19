import { useEffect } from 'react'
import { listData } from '../data/data'
import { Link } from 'react-router-dom'
import { BsEyeFill, BsGeoAlt, BsPatchCheckFill, BsShareFill, BsStar, BsSuitHeart, BsTelephone } from 'react-icons/bs'
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

export default function ExploreListingOne() {

    useEffect(() => {
        const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
        }, []);

  return (
        <div className="row align-items-center justify-content-center g-4">
            {listData.slice(0,6).map((item:ListData,index:number)=>{
                let Icon = item.tagIcon
                return(
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                        <div className="listingitem-container">
                        <div className="singlelisting-item">
                            <div className="listing-top-item">
                                <Link to="/single-listing-02" className="topLink">
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
                                    <Link to="/single-listing-02" className="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Save Listing"><BsSuitHeart className="m-0"/></Link>
                                </div>
                            </div>
                            <div className="listing-middle-item">
                                <div className="listing-avatar">
                                    <Link to="/single-listing-02" className="avatarImg"><img src={item.user} className="img-fluid circle" alt="Avatar"/></Link>
                                </div>
                                <div className="listing-details">
                                    <h4 className="listingTitle"><Link to="/single-listing-02" className="titleLink">{item.title}<span className="verified"><BsPatchCheckFill className="m-0"/></span></Link></h4>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="listing-info-details">
                                    <div className="d-flex align-items-center justify-content-start gap-4">
                                        <div className="list-calls"><BsTelephone className="mb-0 me-2"/>{item.call}</div>
                                        <div className="list-distance"><BsGeoAlt className="mb-0 me-2"/>{item.loction}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="listing-footer-item">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="catdWraps">
                                        <div className="flex-start">
                                            <Link to="/single-listing-02" className="d-flex align-items-center justify-content-start gap-2">
                                                <span className={`catIcon ${item.tagIconStyle}`}><Icon className=""/></span>
                                                <span className="catTitle">{item.tag}</span>
                                            </Link>
                                        </div>
                                        <div className="flex-end"><span className="moreCatcounter">+2</span></div>
                                    </div>
                                    <div className="listing-shares">
                                        <div className="d-flex align-items-center justify-content-start gap-2">
                                            <Link to="/single-listing-02" className="smallLinks" data-bs-toggle="tooltip" data-bs-title="View Listing"><BsEyeFill className="m-0"/></Link>
                                            <Link to="/single-listing-02" className="smallLinks" data-bs-toggle="tooltip" data-bs-title="Save Listing"><BsSuitHeart className="m-0"></BsSuitHeart></Link>
                                            <Link to="/single-listing-02" className="smallLinks" data-bs-toggle="tooltip" data-bs-title="Share Listing"><BsShareFill className="m-0"/></Link>
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
  )
}
