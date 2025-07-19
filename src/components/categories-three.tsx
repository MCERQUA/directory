import { IconType } from 'react-icons';
import { categoryData } from '../data/data'
import { Link } from 'react-router-dom'

interface CategoryData{
    image: string;
    icon: IconType;
    title: string;
    list: string;
}

export default function CategoriesThree() {
  return (
        <div className="row align-items-center justify-content-between row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-xl-4 g-3">
            {categoryData.slice(0,10).map((item:CategoryData,index:number)=>{
                const Icon = item.icon
                return(
                    <div className="col" key={index}>
                        <div className="category-small-wrapper">
                            <Link to="#" className="categoryBox">
                                <div className="categoryCapstions">
                                    <div className="catsIcons"><div className="icoBoxx"><Icon/></div></div>
                                    <div className="catsTitle"><h5>{item.title}</h5></div>
                                    <div className="CatsLists"><span className="categorycounter">{item.list}</span></div>
                                </div>
                                <img src={item.image} className="img-fluid" alt=""/>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
  )
}
