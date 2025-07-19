// @ts-nocheck 
import { Link } from 'react-router-dom'

import img1 from '../../assets/img/h.jpg'
import img2 from '../../assets/img/i.jpg'
import img3 from '../../assets/img/j.jpg'
import img4 from '../../assets/img/e.jpg'
import img5 from '../../assets/img/f.jpg'
import img6 from '../../assets/img/g.jpg'
import { BsBasket2, BsBasket2Fill } from 'react-icons/bs'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';

interface Data{
    image: string;
    status: string;
    title: string;
    value: string;
    offerValue: string;
    offer: boolean;
}

const data = [
    {
        image:img1,
        status:'Sold',
        title:'Wooden Flop Vase',
        value:'$57.40',
        offerValue:'-30 Off',
        offer:false
    },
    {
        image:img2,
        status:'Hot',
        title:'Sandlwood Vase',
        value:'$29.56',
        offerValue:'-30 Off',
        offer:true
    },
    {
        image:img3,
        status:'New',
        title:'Sonalik Vase Cast',
        value:'$52.42',
        offerValue:'-30 Off',
        offer:false
    },
    {
        image:img4,
        status:'Hot',
        title:'Causio Matt Vase',
        value:'$35.60',
        offerValue:'-28 Off',
        offer:true
    },
    {
        image:img5,
        status:'New',
        title:'Venila Flower Vase',
        value:'$41.20',
        offerValue:'-30 Off',
        offer:false
    },
    {
        image:img6,
        status:'Hot',
        title:'Prodcast Vase',
        value:'$50.56',
        offerValue:'-25 Off',
        offer:true
    },
]

export default function Products() {
  return (
        <div className="listingSingleblock mb-4" id="productss">
            <div className="SingleblockHeader">
                <Link data-bs-toggle="collapse" data-parent="#products" data-bs-target="#products" aria-controls="products" to="#" aria-expanded="false" className="collapsed"><h4 className="listingcollapseTitle">Browse Products</h4></Link>
            </div>
            
            <div id="products" className="panel-collapse collapse show">
                <div className="card-body p-4 pt-2">
                    <Swiper
                    slidesPerView={3}
                    spaceBetween={15}
                    modules={[Autoplay,Pagination]}
                    pagination={true}
                    loop={true}
                    autoplay={{delay: 2000, disableOnInteraction: false,}}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 3 },
                    }}
                >
                {data.map((item:Data,index:number)=>{
                    return(
                        <SwiperSlide className="singleItem" key={index}>
                            <div className="catalogCard">
                                <div className="catalogThumb position-relative">
                                    {item.status === "Sold" && 
                                        <div className="position-absolute top-0 start-0 mt-3 ms-3"><span className="badge badge-xs bg-dark text-uppercase">Sold</span></div>
                                    }
                                    {item.status === "Hot" && 
                                            <div className="position-absolute top-0 start-0 mt-3 ms-3"><span className="badge badge-xs bg-danger text-uppercase">Hot</span></div>
                                    }
                                    {item.status === "New" && 
                                        <div className="position-absolute top-0 start-0 mt-3 ms-3"><span className="badge badge-xs bg-seegreen text-uppercase">New</span></div>
                                    }
                                    <Link to="#">
                                        <figure>	
                                            <img src={item.image} className="img-fluid rounded-2" alt="Product Thumb"/>
                                        </figure>
                                    </Link>
                                </div>
                                
                                <div className="catalogCaps">
                                    <div className="d-flex align-items-start justify-content-between gap-2">
                                        <div className="catalogProducttitle">
                                            <h6 className="lh-base m-0">{item.title}</h6>
                                            <p className="text-md d-flex align-items-center gap-2 m-0"><span>{item.value}</span>{item.offer && <span className="text-success">{item.offerValue}</span>}</p>
                                        </div>
                                        <div className="addCart">
                                            <Link to="#" className="text-muted-2 square--40 circle bg-light" data-bs-toggle="tooltip" data-bs-title="Add To Cart"><BsBasket2Fill/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                    </Swiper>
                </div>
            </div>
        </div>
  )
}
