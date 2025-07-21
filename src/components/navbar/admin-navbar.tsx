import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'



import list1 from '../../assets/img/list-3.jpg'
import list2 from '../../assets/img/list-4.jpg'
import list3 from '../../assets/img/list-5.jpg'
// Generate a default avatar URL using the user's initials
const getDefaultAvatar = (name?: string | null) => {
  const initials = name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U'
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=c71f37&color=fff&size=80`
}


import { BsBasket2, BsSpeedometer, BsPersonLinesFill, BsJournalCheck, BsUiRadiosGrid, BsChatDots, BsPersonCheck, BsEnvelopeCheck, BsX, BsSearch, BsBookmarkStar, BsYelp, BsWallet, BsPatchPlus, BsGeoAlt } from "react-icons/bs";
import { FiX } from 'react-icons/fi';
import { FaSortDown } from 'react-icons/fa6'


export default function AdminNavbar() {
    const { profile } = useAuth()
    const [scroll,setScroll] = useState<boolean>(false);
        const [current , setCurrent] = useState<string>('');
        const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
        const [toggle, setIsToggle] = useState<boolean>(false);
        
        const params = useParams();

        useEffect(()=>{
            window.scrollTo(0,0)
            if (params.pathname) {
                setCurrent(params.pathname);
              } else {
                setCurrent(''); // or some default fallback
              }
    
            const handlerScroll=()=>{
                if(window.scrollY > 50){
                    setScroll(true)
                }else{setScroll(false)}
            }
    
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
              };
    
            window.addEventListener('scroll',handlerScroll)
            window.addEventListener('resize', handleResize);
    
            return () => {
                window.removeEventListener('scroll',handlerScroll)
                window.removeEventListener('resize', handleResize);
              };
        },[windowWidth])
  return (
    <>
        <div className={`header header-dark navdark ${scroll ? 'header-fixed' : ''}`} data-sticky-element="">
            <div className="container-fluid">
                <nav id="navigation" className={windowWidth > 991 ? "navigation navigation-landscape" : "navigation navigation-portrait"}>
                    <div className="nav-header">
                        <Link className="nav-brand" to="/"><span className="fw-bold fs-4 text-primary">ContractorHUB</span></Link>
                        <div className="nav-toggle" onClick={()=>setIsToggle(!toggle)}></div>
                        <div className="mobile_nav">
                            <ul>
                                <li>
                                    <Link data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample" className="d-inline-flex py-0 pt-1 px-1"><div className="d-inline-flex w-8 h-8 circle overflow-hidden"><img src={profile?.avatar_url || getDefaultAvatar(profile?.full_name)} className="img-fluid" alt="Profile"/></div></Link>
                                </li>
                                <li>
                                    <Link to="#cartSlider" className="cart-content" data-bs-toggle="offcanvas" role="button" aria-controls="cartSlider"><BsBasket2 className=""/><span className="head-cart-counter">3</span></Link>
                                </li>
                                <li>
                                    <Link to="#searchSlider" className="d-flex align-items-center" data-bs-toggle="offcanvas" role="button" aria-controls="searchSlider"><BsSearch className="me-1"/></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`nav-menus-wrapper  ${toggle ? 'nav-menus-wrapper-open' : ''}`} style={{transitionProperty:toggle ? 'none' : 'left'}}>
                        <div className='mobLogos'>
                            <span className="fw-bold fs-4 text-primary">ContractorHUB</span>
                        </div>
                        <span className='nav-menus-wrapper-close-button'  onClick={()=>setIsToggle(!toggle)}>✕</span>
                        <ul className="nav-menu">
                            <li className={`${current === '/' ? 'active' : ''}`}>
                                <Link to="/">
                                    <BsSpeedometer className="me-2"/>
                                    Home
                                </Link>
                            </li>
                            <li className={`${current === '/grid-layout-01' ? 'active' : ''}`}>
                                <Link to="/grid-layout-01">
                                    <BsUiRadiosGrid className="me-2"/>
                                    Browse Services
                                </Link>
                            </li>
                            <li className={`${['/dashboard-user','/dashboard-my-profile','/dashboard-my-listings','/dashboard-my-bookings','/dashboard-messages','/dashboard-my-favourites','/dashboard-my-reviews','/dashboard-earning-reports'].includes(current)? 'active' : ''}`}><Link to="#">Dashboard<span className="submenu-indicator"><span className="submenu-indicator-chevron"></span></span></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li className={`${current === '/dashboard-user' ? 'active' : ''}`}><Link to="/dashboard-user" className='d-flex'><BsSpeedometer className="me-1 align-self-center"/>Dashboard</Link></li>
                                    <li className={`${current === '/dashboard-my-profile' ? 'active' : ''}`}><Link to="/dashboard-my-profile" className='d-flex'><BsPersonLinesFill className="me-1 align-self-center"/>My Profile</Link></li>
                                    <li className={`${current === '/dashboard-my-bookings' ? 'active' : ''}`}><Link to="/dashboard-my-bookings" className='d-flex'><BsJournalCheck className="me-1 align-self-center"/>My Bookings</Link></li>
                                    <li className={`${current === '/dashboard-my-listings' ? 'active' : ''}`}><Link to="/dashboard-my-listings" className='d-flex'><BsUiRadiosGrid className="me-1 align-self-center"/>My Listings</Link></li>
                                    <li className={`${current === '/dashboard-messages' ? 'active' : ''}`}><Link to="/dashboard-messages" className='d-flex'><BsChatDots className="me-1 align-self-center"/>Messages</Link></li>
                                </ul>
                            </li>

                            <li className={`${current === '/about-us' ? 'active' : ''}`}>
                                <Link to="/about-us">
                                    <BsPersonCheck className="me-2"/>
                                    About
                                </Link>
                            </li>

                            <li className={`${current === '/contact-us' ? 'active' : ''}`}>
                                <Link to="/contact-us">
                                    <BsEnvelopeCheck className="me-2"/>
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li>
                                <a href="#cartSlider" className="cart-content" data-bs-toggle="offcanvas" role="button" aria-controls="cartSlider"><BsBasket2 className=""/><span className="head-cart-counter">3</span></a>
                            </li>
                            <li>
                                <div className="btn-group account-drop">
                                    <Link to="#" className="nav-link btn-order-by-filt" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="d-inline-flex w-8 h-8 circle overflow-hidden"><img src={profile?.avatar_url || getDefaultAvatar(profile?.full_name)} className="img-fluid" alt="Profile"/></div>
                                        <span className="fw-medium d-inline-flex ms-2 text-light">{profile?.full_name || 'User'}<FaSortDown className="ms-1"/></span>
                                    </Link>
                                    <div className="dropdown-menu pull-right animated flipInX">
                                        <div className="drp_menu_headr bg-primary">
                                            <h4>Hi, {profile?.full_name || 'User'}</h4>
                                            <div className="drp_menu_headr-right"><button type="button" className="btn btn-whites text-dark">My Profile</button></div>
                                        </div>
                                        <ul>
                                            <li><Link to="/dashboard-user"><BsSpeedometer className="me-2"/>Dashboard Area</Link></li>
                                            <li><Link to="/dashboard-my-profile"><BsPersonLinesFill className="me-2"/>My Profile</Link></li>
                                            <li><Link to="/dashboard-my-bookings"><BsJournalCheck className="me-2"/>My Bookings</Link></li>
                                            <li><Link to="/dashboard-my-listings"><BsUiRadiosGrid className="me-2"/>My Listings</Link></li>
                                            <li><Link to="/dashboard-bookmarks"><BsBookmarkStar className="me-2"/>Bookmarkes</Link></li>
                                            <li><Link to="/dashboard-messages"><BsChatDots className="me-2"/>Messages<span className="notti_coun style-1">3</span></Link></li>
                                            <li><Link to="/dashboard-reviews"><BsYelp className="me-2"/>Reviews</Link></li>
                                            <li><Link to="/dashboard-wallet"><BsWallet className="me-2"/>Wallet</Link></li>
                                            <li><Link to="/dashboard-add-listing"><BsPatchPlus className="me-2"/>Add Your Company</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="list-buttons">
                                <Link to="/register"><BsGeoAlt className="fs-6 me-1"/>Add Your Company</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className="clearfix"></div>

        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="cartSlider" aria-labelledby="cartSliderLabel">
            <div className="offcanvas-header border-bottom d-flex justify-content-between">
                <h6 className="offcanvas-title" id="cartSliderLabel">Your cart Items</h6>
                <Link to="#" className="square--35 circle text-muted-2 border" data-bs-dismiss="offcanvas" aria-label="Close"><FiX className=""/></Link>
            </div>
            <div className="offcanvas-body">
                <div className="cartItems w-100">
                    <div className="d-flex align-items-center justify-content-start flex-column gap-3">
                        
                        <div className="singleCartitem d-flex align-items-center justify-content-between gap-4 w-100">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <div className="cartiteThumb"><figure className="d-block m-0"><img src={list1} className="img-fluid rounded-2" width="60" alt=""/></figure></div>
                                <div className="cartCaption">
                                    <h6 className="lh-base m-0">Spicy Burger</h6>
                                    <p className="m-0">1x$25.50</p>
                                </div>
                            </div>
                            
                            <div className="removeItemcart"><Link to="#" className="square--35 circle badge-secondary"><FiX className=""/></Link></div>
                        </div>
                        
                        <div className="singleCartitem d-flex align-items-center justify-content-between gap-3 w-100">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <div className="cartiteThumb"><figure className="d-block m-0"><img src={list2} className="img-fluid rounded-2" width="60" alt=""/></figure></div>
                                <div className="cartCaption">
                                    <h6 className="lh-base m-0">Premium Package</h6>
                                    <p className="m-0">1x$22.10</p>
                                </div>
                            </div>
                            
                            <div className="removeItemcart"><Link to="#" className="square--35 circle badge-secondary"><FiX className=""/></Link></div>
                        </div>
                        
                        <div className="singleCartitem d-flex align-items-center justify-content-between gap-3 w-100">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <div className="cartiteThumb"><figure className="d-block m-0"><img src={list3} className="img-fluid rounded-2" width="60" alt=""/></figure></div>
                                <div className="cartCaption">
                                    <h6 className="lh-base m-0">Platinum Plaster</h6>
                                    <p className="m-0">1x$17.40</p>
                                </div>
                            </div>
                            
                            <div className="removeItemcart"><Link to="" className="square--35 circle badge-secondary"><FiX className=""/></Link></div>
                        </div>
                    
                    </div>
                    
                    <div className="cartSubtotal w-100 py-3 border-top mt-3">
                        <h6 className="m-0">Subtotal: $128.75</h6>
                    </div>
                    
                </div>
                
                <div className="cartButtons w-100 py-2">
                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
                        <Link to="/viewcart" className="btn btn-md btn-light-primary fw-medium flex-fill">View Cart</Link>
                        <Link to="/checkout-page" className="btn btn-md btn-primary fw-medium flex-fill">Checkout</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="offcanvas offcanvas-end offcanvas-menu" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
				<div className="offcanvas-header">
					<button type="button" className="btn-closes" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
				</div>
				<div className="offcanvas-body" id="offcanvasExampleLabel">
                    <ul>
                        <li><Link to="/dashboard-user"><BsSpeedometer className="me-2"/>Dashboard Area</Link></li>
                        <li><Link to="/dashboard-my-profile"><BsPersonLinesFill className="me-2"/>My Profile</Link></li>
                        <li><Link to="/dashboard-my-bookings"><BsJournalCheck className="me-2"/>My Bookings</Link></li>
                        <li><Link to="/dashboard-my-listings"><BsUiRadiosGrid className="me-2"/>My Listings</Link></li>
                        <li><Link to="/dashboard-bookmarks"><BsBookmarkStar className="me-2"/>Bookmarkes</Link></li>
                        <li><Link to="/dashboard-messages"><BsChatDots className="me-2"/>Messages<span className="notti_coun style-1">3</span></Link></li>
                        <li><Link to="/dashboard-reviews"><BsYelp className="me-2"/>Reviews</Link></li>
                        <li><Link to="/dashboard-wallet"><BsWallet className="me-2"/>Wallet</Link></li>
                        <li><Link to="/dashboard-add-listing"><BsPatchPlus className="me-2"/>Add Your Company</Link></li>
                    </ul>
				</div>
			</div>
            <div className="offcanvas offcanvas-top h-auto" tabIndex={-1} id="searchSlider" aria-labelledby="searchSliderLabel">
				<div className="offcanvas-body" id="searchSliderLabel">
					<div className="searchForm w-100 mb-3">
						<div className="p-2 ps-3 rounded border d-flex align-items-center justify-content-between gap-2">
							<div className="searchicons"><span><BsSearch className="fs-4 opacity-75"/></span></div>
							<div className="flex-fill"><input type="search" className="form-control border-0 ps-0" placeholder="What are you looking for?"/></div>
							<div className="closeSlides"><Link to="#" className="square--35 circle text-muted-2 border" data-bs-dismiss="offcanvas" aria-label="Close"><BsX /></Link></div>
						</div>
					</div>
					<div className="popularSearches d-flex align-items-center justify-content-center gap-2 flex-wrap">
						<div className="singleItem"><Link to="#" className="badge badge-xs badge-primary rounded-pill">Real Estate</Link></div>	
						<div className="singleItem"><Link to="#" className="badge badge-xs badge-primary rounded-pill">Eat & Drink</Link></div>	
						<div className="singleItem"><Link to="#" className="badge badge-xs badge-primary rounded-pill">Shopping</Link></div>	
						<div className="singleItem"><Link to="#" className="badge badge-xs badge-primary rounded-pill">Nightlife</Link></div>	
						<div className="singleItem"><Link to="#" className="badge badge-xs badge-primary rounded-pill">Services</Link></div>	
					</div>
				</div>
			</div>
    </>
  )
}
