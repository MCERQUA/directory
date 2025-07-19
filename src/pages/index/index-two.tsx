import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import Bg from '../../assets/img/banner-2.jpg'

import { FaSpa } from 'react-icons/fa'
import { FaBagShopping, FaBowlRice, FaMartiniGlass, FaMugSaucer } from 'react-icons/fa6'

import NavbarLight from '../../components/navbar/navbar-light'
import FormOne from '../../components/form-one'
import CategoryTwo from '../../components/category-two'
import PopularListingTwo from '../../components/popular-listing-two'
import ExploreCity from '../../components/explore-city'
import ClientOne from '../../components/client-one'
import BlogOne from '../../components/blog-one'
import EventOne from '../../components/event-one'
import FooterTop from '../../components/footer-top'
import BackToTop from '../../components/back-to-top'
import Footer from '../../components/footer'
 
export default function IndexTwo() {

    useEffect(() => {
        const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
          new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
      }, []);
  return (
    <>
        <NavbarLight/>

        <div className="image-cover hero-header full-height" style={{backgroundImage:`url(${Bg})`}} data-overlay="6">
            <div className="container">
                <div className="row justify-content-center align-items-center mb-5 pt-lg-0 pt-5">
                    <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                        <div className="position-relative text-center">
                            <h1>Explore Nearby Restaurants</h1>
                            <p className="fs-5 fw-light">Browse high-rated hotels, restaurants, attractions, activities and more!</p>
                        </div>
                    </div>
                </div>
                
                <FormOne/>
                
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div className="d-block position-relative">
                            <div className="popularSearches d-flex align-items-center justify-content-center gap-4 flex-wrap">
                                <div className="singleItem"><Link to="#" data-bs-toggle="tooltip" data-bs-title="Beauty & Spa" className="badge-transparent square--70 circle"><FaSpa className="fs-3"/></Link></div>	
                                <div className="singleItem"><Link to="#" data-bs-toggle="tooltip" data-bs-title="Eat & Drink" className="badge-transparent square--70 circle"><FaBowlRice className="fs-3"/></Link></div>	
                                <div className="singleItem"><Link to="#" data-bs-toggle="tooltip" data-bs-title="Shopping" className="badge-transparent square--70 circle"><FaBagShopping className="fs-3"/></Link></div>	
                                <div className="singleItem"><Link to="#" data-bs-toggle="tooltip" data-bs-title="Nightlife" className="badge-transparent square--70 circle"><FaMartiniGlass className="fs-3"/></Link></div>	
                                <div className="singleItem"><Link to="#" data-bs-toggle="tooltip" data-bs-title="Coffee Shop" className="badge-transparent square--70 circle"><FaMugSaucer className="fs-3"/></Link></div>		
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="pb-0">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div className="secHeading-wrap text-center">
                            <h3 className="sectionHeading">Hot & Trending <span className="text-primary">Categories</span></h3>
                            <p>Explore all types of popular category for submit your listings</p>
                        </div>
                    </div>
                </div>
                <CategoryTwo/>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div className="secHeading-wrap text-center">
                            <h3 className="sectionHeading">Popular Listings In <span className="text-primary">Chicago</span></h3>
                            <p>Explore Hot & Popular Business Listings</p>
                        </div>
                    </div>
                </div>
                <PopularListingTwo/>
            </div>
        </section>

        <section className="bg-light">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div className="secHeading-wrap text-center">
                            <h3 className="sectionHeading">Explore Listings By <span className="text-primary">Cities</span></h3>
                            <p>Our cliens love our services and give great & positive reviews</p>
                        </div>
                    </div>
                </div>
                <ExploreCity/>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div className="secHeading-wrap text-center">
                            <h3 className="sectionHeading">Our Great <span className="text-primary">Reviews</span></h3>
                            <p>Our cliens love our services and give great & positive reviews</p>
                        </div>
                    </div>
                </div>
                <ClientOne/>
            </div>
        </section>

        <section className="light-top-gredient">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div className="secHeading-wrap text-center">
                            <h3 className="sectionHeading">Latest Updates <span className="text-primary">News</span></h3>
                            <p>Join ListingHub and get latest & trending updates about listing</p>
                        </div>
                    </div>
                </div>
                <BlogOne/>
            </div>
        </section>

        <section className="pt-0">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div className="secHeading-wrap text-center">
                            <h3 className="sectionHeading">Explore Upcoming <span className="text-primary">Events</span></h3>
                            <p>Browse our upcoming events and join soon.</p>
                        </div>
                    </div>
                </div>
                <EventOne/>
            </div>
        </section>

        <FooterTop/>

        <BackToTop/>
        <Footer/>
    </>
  )
}
