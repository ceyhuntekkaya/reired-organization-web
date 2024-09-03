import SingleTravelItemSmallMedium from "./travel-list/SingleTravelItemSmallMedium";
import SingleTravelItemSidebar from "./travel-list/SingleTravelItemSidebar";
import SingleTravelItemFilter from "./travel-list/SingleTravelItemFilter";
import {Link} from "react-router-dom";

export default function TravelListTwo (){
    return (
        <div className="blog-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                      <SingleTravelItemSidebar/>
                    </div>
                    <div className="col-lg-9">
                        <SingleTravelItemFilter/>
                        <div className="single-blog-post-wrap">
                            <SingleTravelItemSmallMedium/>
                            <SingleTravelItemSmallMedium/>
                            <SingleTravelItemSmallMedium/>
                            <SingleTravelItemSmallMedium/>

                        </div>
                        <div className="gane-pagination mt-30 text-center">
                            <ul>
                                <li className="active"><Link to="/detail">1</Link></li>
                                <li><Link to="blog-2.html#">2</Link></li>
                                <li><Link to="blog-2.html#">3</Link></li>
                                <li><Link to="blog-2.html#">4</Link></li>
                                <li><Link to="blog-2.html#">5</Link></li>
                                <li><Link to="blog-2.html#">6</Link></li>
                                <li><Link to="blog-2.html#">7</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}