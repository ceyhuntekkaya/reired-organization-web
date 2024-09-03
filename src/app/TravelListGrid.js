import SingleTravelItemSmall from "./travel-list/SingleTravelItemSmall";
import SingleTravelItemFilter from "./travel-list/SingleTravelItemFilter";
import {Link} from "react-router-dom";

export default function TravelListGrid (){
    return (
        <div className="blog-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SingleTravelItemFilter/>
                        <div className="single-blog-post-wrap grid isotope_wrap">
                            <div className="row">
                                <SingleTravelItemSmall/>
                                <SingleTravelItemSmall/>
                                <SingleTravelItemSmall/>
                                <SingleTravelItemSmall/>
                                <SingleTravelItemSmall/>
                                <SingleTravelItemSmall/>
                                <SingleTravelItemSmall/>
                                <SingleTravelItemSmall/>
                                <SingleTravelItemSmall/>
                     </div>
                        </div>
                        <div className="gane-pagination mt-30 text-center">
                            <ul>
                                <li className="active"><Link to="/detail">1</Link></li>
                                <li><Link to="blog-grid.html#">2</Link></li>
                                <li><Link to="blog-grid.html#">3</Link></li>
                                <li><Link to="blog-grid.html#">4</Link></li>
                                <li><Link to="blog-grid.html#">5</Link></li>
                                <li><Link to="blog-grid.html#">6</Link></li>
                                <li><Link to="blog-grid.html#">7</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}