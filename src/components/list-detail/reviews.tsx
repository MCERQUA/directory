import { Link } from 'react-router-dom'

import team4 from '../../assets/img/team-4.jpg'
import team6 from '../../assets/img/team-6.jpg'
import team7 from '../../assets/img/team-7.jpg'

import { FaStar } from 'react-icons/fa6'

import Select from 'react-select';

export default function Reviews() {
    const options = [
        { value: '1', label: 'Select Rating' },
        { value: '2', label: '1 Star - Very Poor' },
        { value: '3', label: '2 Star - Poor' },
        { value: '4', label: '3 Star - Medium' },
        { value: '5', label: '4 Star - Very Good' },
        { value: '6', label: '5 Star - Excellent' },
      ];

  return (
        <div className="listingSingleblock mb-4" id="reviews">
            <div className="SingleblockHeader">
                <Link data-bs-toggle="collapse" data-parent="#review" data-bs-target="#review" aria-controls="review" to="#" aria-expanded="false" className="collapsed"><h4 className="listingcollapseTitle">Reviews</h4></Link>
            </div>
            
            <div id="review" className="panel-collapse collapse show">
                <div className="card-body p-4 pt-2">
                    <div className="allreviewsWrapper">
                        <div className="reviewsTitle d-flex flex-column mb-3"><h5>03 Reviews</h5></div>
                        <div className="allreviewsLists mb-4">
                            
                            <div className="singlereviews">
                                <div className="d-flex align-items-start justify-content-between flex-sm-wrap flex-wrap gap-3">
                                    <div className="reviewerThumb">
                                        <div className="square--60 circle overflow-hidden"><img src={team6} className="img-fluid circle" alt="Reviewer Thumb"/></div>
                                    </div>
                                    <div className="reviewerMessage">
                                        <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                                            <div className="reviewerInfo">
                                                <h6 className="mb-0">Claire H. Jeter</h6>
                                                <p className="text-md mb-0">Posted on 26 Fab 2024</p>
                                            </div>
                                            <div className="reviewsFlexlast">
                                                <div className="d-flex align-items-center justify-content-start gap-1">
                                                    <span><FaStar className="text-sm text-warning active"/></span>
                                                    <span><FaStar className="text-sm text-warning active"/></span>
                                                    <span><FaStar className="text-sm text-warning active"/></span>
                                                    <span><FaStar className="text-sm text-warning active"/></span>
                                                    <span><FaStar className="text-sm text-warning active"/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="messageDescription">
                                            <p>Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs to be.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="replyReviews">
                                    <div className="d-flex align-items-start justify-content-between flex-sm-wrap flex-wrap gap-3">
                                        <div className="reviewerThumb">
                                            <div className="square--60 circle overflow-hidden"><img src={team4} className="img-fluid circle" alt="Reviewer Thumb"/></div>
                                        </div>
                                        <div className="reviewerMessage">
                                            <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                                                <div className="reviewerInfo">
                                                    <h6 className="mb-0">Jack M Kerry</h6>
                                                    <p className="text-md mb-0">Posted on 26 Fab 2024</p>
                                                </div>
                                            </div>
                                            <div className="messageDescription">
                                                <p>Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs to be.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="singlereviews d-flex align-items-start justify-content-between flex-sm-wrap flex-wrap gap-3">
                                <div className="reviewerThumb">
                                    <div className="square--60 circle overflow-hidden"><img src={team7} className="img-fluid circle" alt="Reviewer Thumb"/></div>
                                </div>
                                <div className="reviewerMessage">
                                    <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                                        <div className="reviewerInfo">
                                            <h6 className="mb-0">Carl M. Gibson</h6>
                                            <p className="text-md mb-0">Posted on 28 Fab 2024</p>
                                        </div>
                                        <div className="reviewsFlexlast">
                                            <div className="d-flex align-items-center justify-content-start gap-1">
                                                <span><FaStar className="text-sm text-warning active"/></span>
                                                <span><FaStar className="text-sm text-warning active"/></span>
                                                <span><FaStar className="text-sm text-warning active"/></span>
                                                <span><FaStar className="text-sm text-warning active"/></span>
                                                <span><FaStar className="text-sm text-muted disabled"/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="messageDescription">
                                        <p>Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts.</p>														
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        
                        <div className="reviewssubmition">
                            <div className="formRow">
                                <div className="row align-items-start gx-xl-3 gx-lg-3">
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group form-border">
                                            <input type="email" className="form-control border" placeholder="your@example.com"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group form-border">
                                            <div className="position-relative">
                                                <Select placeholder="Select Rating" options={options} className="categories form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group form-border">
                                            <input type="text" className="form-control border" placeholder="Review title"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group form-border">
                                            <textarea className="form-control border" placeholder="Leave Review Message" style={{height: '120px'}}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <button type="button" className="btn btn-primary fw-medium px-5">Submit Review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
