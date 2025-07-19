import { Link } from 'react-router-dom'

import bg from '../../assets/img/title-banner.jpg'
import blogImg from '../../assets/img/blog-5.jpg'

import { blogData } from '../../data/data'

import { MdArrowForwardIos } from 'react-icons/md'
import { BsCalendarCheck, BsEyeFill } from 'react-icons/bs'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import NavbarDark from '../../components/navbar/navbar-dark'
import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'
import BackToTop from '../../components/back-to-top'

interface BlogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
    views: string;
}

export default function Blog() {
  return (
    <>
     <NavbarDark/>

    <section className="bg-cover position-relative" style={{backgroundImage:`url(${bg})`}} data-overlay="6">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-xl-7 col-lg-9 col-md-12 col-sm-12 pt-lg-0 pt-5">
                    <div className="position-relative text-center mb-5">
                        <h1 className="text-light xl-heading">Latest Updates</h1>
                        <nav id="breadcrumbs" className="breadcrumbs light">
                            <ul>
                                <li><Link to="#">Home</Link></li><MdArrowForwardIos className='ms-2'/>
                                <li><Link to="#">Pages</Link></li><MdArrowForwardIos className='ms-2'/>
                                <li>Blog</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-light">
        <div className="container">
            <div className="row justify-content-center g-4">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card rounded-4 border">
                        <div className="row align-items-center justify-content-start">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <Link to="/blog-detail" className="d-block p-3">
                                    <img className="img-fluid rounded" src={blogImg} alt="blog image"/>
                                </Link>
                            </div>
                            
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-start gap-2 mb-3">
                                        <span className="badge badge-xs badge-success rounded-pill">Featured</span>
                                        <span className="badge badge-xs badge-danger rounded-pill">Web Design</span>
                                    </div>
                                    <Link to="/blog-detail"><h4 className="fw-semibold fs-5 lh-base mb-2">Boost Your Website's Performance with These Bootstrap Optimization Tips</h4></Link>
                                    <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra.</p>
                                    <div className="d-flex align-items-center justify-content-start mt-4">
                                        <Link to="/blog-detail" className="badge badge-primary rounded-pill">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {blogData.map((item:BlogData,index:number)=>{
                    return(
                        <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                            <div className="card rounded-4 shadow-sm h-100">
                                <Link to={`/blog-detail/${item.id}`} className="d-block bg-gradient rounded-top">
                                    <img className="card-img-top hover-fade-out" src={item.image} alt="blog image"/>
                                </Link>
                                <div className="card-body">
                                    <Link to={`/blog-detail/${item.id}`}><h4 className="fw-semibold fs-5 lh-base mb-3">{item.title}</h4></Link>
                                    <p>{item.desc}</p>
                                    <div className="d-flex align-items-center justify-content-start mt-4">
                                        <Link to={`/blog-detail/${item.id}`} className="badge badge-primary rounded-pill">Continue Reading</Link>
                                    </div>
                                </div>
                                <div className="card-footer bg-white d-flex justify-content-between align-items-center py-3">
                                    <div className="text-dark fw-medium text-md d-flex align-items-center"><BsCalendarCheck className="me-2"/>{item.date}</div>
                                    <div className="text-muted fw-medium text-md d-flex align-items-center"><BsEyeFill className="me-2"/>12k Views</div>
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
                            <li className="page-item"><Link to="#" className="page-link">1</Link></li>
                            <li className="page-item active"><Link to="#" className="page-link">2</Link></li>
                            <li className="page-item"><Link to="#" className="page-link">3</Link></li>
                            <li className="page-item">
                                <Link to="#" className="page-link"><FaArrowRight className=""/></Link>
                            </li>
                        </ul>
                    </nav>
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
