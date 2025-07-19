import { Link } from 'react-router-dom'

import { blogData } from '../data/data'
import { BsCalendar2, BsEyeFill } from 'react-icons/bs'

interface BlogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
    views: string;
}

export default function BlogOne() {
  if (!blogData || blogData.length === 0) {
    return (
      <div className="row align-items-center justify-content-center g-4">
        <div className="col-12">
          <div className="text-center py-5">
            <div className="text-muted">
              <h5>No Blog Posts Available</h5>
              <p>Blog posts will appear here soon. Check back later for helpful tips and updates.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row align-items-center justify-content-center g-4">
        {blogData.slice(0,3).map((item:BlogData,index:number)=>{
            return(
                <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                    <div className="card rounded-4 shadow-sm h-100">
                        <Link to={`/blog-detail/${item.id}`} className="d-block bg-gradient rounded-top">
                            <img className="card-img-top hover-fade-out" src={item.image} alt="blog image"/>
                        </Link>
                        <div className="card-body">
                            <Link to={`/blog-detail/${item.id}`}><h4 className="fw-medium fs-5 lh-base mb-3">{item.title}</h4></Link>
                            <p>{item.desc}</p>
                            <div className="d-flex align-items-center justify-content-start mt-4">
                                <Link to={`/blog-detail/${item.id}`} className="badge badge-primary rounded-pill">Continue Reading</Link>
                            </div>
                        </div>
                        <div className="card-footer bg-white d-flex justify-content-between align-items-center py-3">
                            <Link to={`/blog-detail/${item.id}`} className="text-dark fw-medium text-md d-flex align-items-center"><BsCalendar2 className="me-2"/>{item.date}</Link>
                            <div className="text-muted text-md d-flex align-items-center"><BsEyeFill className="me-2"/>{item.views}</div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
