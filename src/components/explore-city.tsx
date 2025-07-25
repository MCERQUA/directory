import { Link } from 'react-router-dom'

import { cityData } from '../data/data'

interface CityData{
    image: string;
    gridClass: string;
    listing: string;
    name: string;
    tag: string[];
}

export default function ExploreCity() {
  if (!cityData || cityData.length === 0) {
    return (
      <div className="row align-items-center justify-content-center g-4">
        <div className="col-12">
          <div className="text-center py-5">
            <div className="text-muted">
              <h5>No Cities Available</h5>
              <p>Featured cities will appear here as our contractor network expands to new locations.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row align-items-center justify-content-center g-4">
        {cityData.map((item:CityData,index:number)=>{
            return(
                <div className={item.gridClass} key={index}>
                    <div className="card border-0 rounded-4 ht-300 position-relative">
                        <Link to="#" className="h-100" tabIndex={-1}>
                            <div className="abx-thumb h-100" data-overlay="3">
                                <img src={item.image} className="w-100 h-100 object-fit" alt=""/>
                            </div>
                        </Link>
                        <div className="position-absolute top-0 end-0 mt-3 me-3 z-1">
                            <span className="badge badge-xs bg-light text-dark rounded-pill">{item.listing}</span>
                        </div>
                        <div className="position-absolute bottom-0 start-0 mb-3 ms-3 z-1">
                            <div className="d-block w-100 position-relative">
                                <div className="cityTitle">
                                    <h4 className="text-light">{item.name}</h4>
                                </div>
                                <div className="d-flex align-items-center justify-content-start flex-wrap gap-2">
                                    {item.tag.map((el,index)=>{
                                        return(
                                            <span className="badge badge-xs badge-transparent rounded-pill" key={index}>{el}</span>
                                        )
                                    })}
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
