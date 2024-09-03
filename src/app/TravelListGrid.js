import SingleTravelItemSmall from "./travel-list/SingleTravelItemSmall";
import SingleTravelItemFilter from "./travel-list/SingleTravelItemFilter";

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
                                <li className="active"><a href="blog-grid.html#">1</a></li>
                                <li><a href="blog-grid.html#">2</a></li>
                                <li><a href="blog-grid.html#">3</a></li>
                                <li><a href="blog-grid.html#">4</a></li>
                                <li><a href="blog-grid.html#">5</a></li>
                                <li><a href="blog-grid.html#">6</a></li>
                                <li><a href="blog-grid.html#">7</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}