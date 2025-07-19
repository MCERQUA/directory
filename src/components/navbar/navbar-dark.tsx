import { useState,useEffect } from 'react'
import { Link,useLocation  } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'


import googleLogo from '../../assets/img/google.png'
import brand1 from '../../assets/img/brand/logo-1.png'
import brand2 from '../../assets/img/brand/logo-2.png'
import brand3 from '../../assets/img/brand/logo-3.png'
import list1 from '../../assets/img/list-3.jpg'
import list2 from '../../assets/img/list-4.jpg'
import list3 from '../../assets/img/list-5.jpg'

import { BsPersonCircle, BsBasket2, BsSearch, BsGeoAlt, BsGeoAltFill, BsX } from "react-icons/bs";
import { FiX } from 'react-icons/fi';

export default function NavbarDark() {
    const [scroll,setScroll] = useState<boolean>(false);
    const [current , setCurrent] = useState<string>('');
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [toggle, setIsToggle] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { login, loginWithGoogle, user, logout } = useAuth();
    const params = useLocation();

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

    const handleModalLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login(email, password);
            // Close modal
            const modal = document.getElementById('login');
            if (modal) {
                const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
                if (bootstrapModal) {
                    bootstrapModal.hide();
                }
            }
            // Reset form
            setEmail('');
            setPassword('');
        } catch (error) {
            setError('Invalid email or password. Please try again.');
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        setIsLoading(true);
        
        try {
            await loginWithGoogle();
            // Close modal
            const modal = document.getElementById('login');
            if (modal) {
                const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
                if (bootstrapModal) {
                    bootstrapModal.hide();
                }
            }
        } catch (error) {
            setError('Google login failed. Please try again.');
            console.error('Google login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

  return (
    <>
        <div className={`header header-light ${scroll ? 'header-fixed' : ''} `} data-sticky-element="">
            <div className="container-fluid">
                <nav id="navigation" className={windowWidth > 991 ? "navigation navigation-landscape" : "navigation navigation-portrait"}>
                    <div className="nav-header">
                        <Link className="nav-brand" to="/">
                            <span className="fw-bold fs-4 text-primary">ContractorHUB</span>
                        </Link>
                        <div className="nav-toggle" onClick={()=>setIsToggle(!toggle)}></div>
                        <div className="mobile_nav">
                            <ul>
                                <li>
                                    {user ? (
                                        <Link to="/dashboard" className="d-flex align-items-center">
                                            <BsPersonCircle className="me-1"/>
                                        </Link>
                                    ) : (
                                        <Link to="#login" className="d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#login">
                                            <BsPersonCircle className="me-1"/>
                                        </Link>
                                    )}
                                </li>
                                <li>
                                    <a href="#cartSlider" className="cart-content" data-bs-toggle="offcanvas" role="button" aria-controls="cartSlider"><BsBasket2  className=""/><span className="head-cart-counter">3</span></a>
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
                            <li className={`${current === '/' ? 'active' : ''}`}><Link to="/">Home</Link></li>

                            <li className={`${['/contractors/list','/contractors','/contractor'].includes(current) || current.startsWith('/contractor/')? 'active' : ''}`}><Link to="/contractors/list">Find Contractors</Link></li>
                            <li className={`${current === '/contractors/map' ? 'active' : ''}`}><Link to="/contractors/map">Map</Link></li>
                            <li className={`${current === '/faq' ? 'active' : ''}`}><Link to="/faq">FAQ</Link></li>
                            <li className={`${current === '/blog' || current.startsWith('/blog/')? 'active' : ''}`}><Link to="/blog">Blog</Link></li>

                            <li className={`${['/about','/pricing','/help','/privacy','/terms'].includes(current)? 'active' : ''}`}><Link to="#">About Us<span className="submenu-indicator"><span className="submenu-indicator-chevron"></span></span></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li className={`${current === '/about' ? 'active' : ''}`}><Link to="/about">About Us</Link></li>
                                    <li className={`${current === '/pricing' ? 'active' : ''}`}><Link to="/pricing">Pricing</Link></li>
                                    <li className={`${current === '/help' ? 'active' : ''}`}><Link to="/help">Help Center</Link></li>
                                    <li className={`${current === '/privacy' ? 'active' : ''}`}><Link to="/privacy">Privacy Policy</Link></li>
                                    <li className={`${current === '/terms' ? 'active' : ''}`}><Link to="/terms">Terms of Service</Link></li>
                                </ul>
                            </li>
                            
                            <li><Link to="/dashboard/add-listing" className="mob-addlisting light" ><BsGeoAltFill className="me-1"/>Add Your Company</Link></li>
                        </ul>

                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li>
                                {user ? (
                                    <div className="d-flex align-items-center gap-2">
                                        <Link to="/dashboard" className="d-flex align-items-center">
                                            <BsPersonCircle className="fs-6 me-1"/>
                                            <span className="navCl">Welcome, {user.name}</span>
                                        </Link>
                                        <button 
                                            onClick={handleLogout}
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <Link to="#login" className="d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#login">
                                        <BsPersonCircle className="fs-6 me-1"/>
                                        <span className="navCl">SignUp or SignIn</span>
                                    </Link>
                                )}
                            </li>
                            <li>
                                <a href="#cartSlider" className="cart-content" data-bs-toggle="offcanvas" role="button" aria-controls="cartSlider"><BsBasket2  className=""/><span className="head-cart-counter">3</span></a>
                            </li>
                            <li className="list-buttons">
                                <Link to="/dashboard/add-listing"><BsGeoAlt className="fs-6 me-1"/>Add Your Company</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className="clearfix"></div>

        <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
            <div className="modal-dialog" id="loginmodal">
                <div className="modal-content">
                    <div className="modal-header justify-content-end border-0 pb-0">
                        <Link to="#" className="square--30 circle bg-light-danger text-danger" data-bs-dismiss="modal" aria-label="Close"><FiX className=""/></Link>
                    </div>
                    
                    <div className="modal-body px-4">
                        <div className="text-center mb-5">
                            <h2>Welcome Back</h2>
                            <p className="fs-6">Login to manage your account.</p>
                        </div>

                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}

                        <form className="needs-validation px-lg-2" noValidate onSubmit={handleModalLogin}>
                            <div className="row align-items-center justify-content-center g-3 mb-4">
                                <div className="col-12">
                                    <button 
                                        type="button" 
                                        onClick={handleGoogleLogin}
                                        disabled={isLoading}
                                        className="btn btn-outline-secondary border rounded-3 text-md px-lg-2 full-width"
                                    >
                                        <img src={googleLogo} className="img-fluid me-2" width="16" alt=""/>
                                        {isLoading ? 'Loading...' : 'Login with Google'}
                                    </button>
                                </div>
                            </div>
                            
                            <div className="form-group form-border mb-4">
                                <label className="form-label" htmlFor="email01">Your email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email01" 
                                    placeholder="email@site.com" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={isLoading}
                                />
                                <span className="invalid-feedback">Please enter a valid email address.</span>
                            </div>

                            <div className="mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label className="form-label" htmlFor="pass01">Password</label>
                                    <Link className="link fw-medium text-primary" to="/forgot-password">Forgot Password?</Link>
                                </div>

                                <div className="form-group form-border input-group-merge">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="pass01" 
                                        placeholder="8+ characters required" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                <span className="invalid-feedback">Please enter a valid password.</span>
                            </div>

                            <div className="d-grid mb-3">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary fw-medium"
                                    disabled={isLoading || !email || !password}
                                >
                                    {isLoading ? 'Logging in...' : 'Log in'}
                                </button>
                            </div>

                            <div className="text-center">
                                <p>Don't have an account yet? <Link className="link fw-medium text-primary" to="/register">Sign up here</Link></p>
                            </div>
                        </form>
                    </div>
                    
                    <div className="modal-footer p-3 border-top">
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <div className="brand px-lg-4 px-3"><img src={brand1} className="img-fluid" alt=""/></div>
                            <div className="brand px-lg-4 px-3"><img src={brand2} className="img-fluid" alt=""/></div>
                            <div className="brand px-lg-4 px-3"><img src={brand3} className="img-fluid" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="cartSlider" aria-labelledby="cartSliderLabel">
            <div className="offcanvas-header border-bottom d-flex justify-content-between">
                <h6 className="offcanvas-title" id="cartSliderLabel">Your Service Cart</h6>
                <Link to="#" className="square--35 circle text-muted-2 border" data-bs-dismiss="offcanvas" aria-label="Close"><FiX className=""/></Link>
            </div>
            <div className="offcanvas-body">
                <div className="cartItems w-100">
                    <div className="d-flex align-items-center justify-content-start flex-column gap-3">
                        
                        <div className="singleCartitem d-flex align-items-center justify-content-between gap-4 w-100">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <div className="cartiteThumb"><figure className="d-block m-0"><img src={list1} className="img-fluid rounded-2" width="60" alt=""/></figure></div>
                                <div className="cartCaption">
                                    <h6 className="lh-base m-0">Bathroom Renovation</h6>
                                    <p className="m-0">1x$2,850.00</p>
                                </div>
                            </div>
                            
                            <div className="removeItemcart"><Link to="#" className="square--35 circle badge-secondary"><FiX className=""/></Link></div>
                        </div>
                        
                        <div className="singleCartitem d-flex align-items-center justify-content-between gap-3 w-100">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <div className="cartiteThumb"><figure className="d-block m-0"><img src={list2} className="img-fluid rounded-2" width="60" alt=""/></figure></div>
                                <div className="cartCaption">
                                    <h6 className="lh-base m-0">Kitchen Flooring</h6>
                                    <p className="m-0">1x$1,450.00</p>
                                </div>
                            </div>
                            
                            <div className="removeItemcart"><Link to="#" className="square--35 circle badge-secondary"><FiX className=""/></Link></div>
                        </div>
                        
                        <div className="singleCartitem d-flex align-items-center justify-content-between gap-3 w-100">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <div className="cartiteThumb"><figure className="d-block m-0"><img src={list3} className="img-fluid rounded-2" width="60" alt=""/></figure></div>
                                <div className="cartCaption">
                                    <h6 className="lh-base m-0">Exterior Painting</h6>
                                    <p className="m-0">1x$980.00</p>
                                </div>
                            </div>
                            
                            <div className="removeItemcart"><Link to="" className="square--35 circle badge-secondary"><FiX className=""/></Link></div>
                        </div>
                    
                    </div>
                    
                    <div className="cartSubtotal w-100 py-3 border-top mt-3">
                        <h6 className="m-0">Subtotal: $5,280.00</h6>
                    </div>
                    
                </div>
                
                <div className="cartButtons w-100 py-2">
                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
                        <Link to="/viewcart"  className="btn btn-md btn-light-primary fw-medium flex-fill">View Cart</Link>
                        <Link to="/checkout-page" className="btn btn-md btn-primary fw-medium flex-fill">Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="offcanvas offcanvas-top h-auto" tabIndex={-1} id="searchSlider" aria-labelledby="searchSliderLabel">
            <div className="offcanvas-body" id="searchSliderLabel">
                <div className="searchForm w-100 mb-3">
                    <div className="p-2 ps-3 rounded border d-flex align-items-center justify-content-between gap-2">
                        <div className="searchicons"><span><BsSearch className="fs-4 opacity-75"/></span></div>
                        <div className="flex-fill"><input type="search" className="form-control border-0 ps-0" placeholder="What are you looking for?"/></div>
                        <div className="closeSlides"><Link to="#" className="square--35 circle text-muted-2 border" data-bs-dismiss="offcanvas" aria-label="Close"><BsX/></Link></div>
                    </div>
                </div>
                <div className="popularSearches d-flex align-items-center justify-content-center gap-2 flex-wrap">
                    <div className="singleItem"><Link to="#" className="badge badge-xs badge-primary rounded-pill">Plumbing</Link></div>	
                    <div className="singleItem"><Link to="#" className="badge badge-xs badge-primary rounded-pill">Electrical</Link></div>	
                    <div className="singleItem"><Link to="#" className="badge badge-xs badge-primary rounded-pill">HVAC</Link></div>	
                    <div className="singleItem"><Link to="#" className="badge badge-xs badge-primary rounded-pill">Painting</Link></div>	
                    <div className="singleItem"><Link to="#" className="badge badge-xs badge-primary rounded-pill">Roofing</Link></div>	
                </div>
            </div>
        </div>
    </>
  )
}
