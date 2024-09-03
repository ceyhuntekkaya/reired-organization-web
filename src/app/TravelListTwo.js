import SingleTravelItemSmallMedium from "./travel-list/SingleTravelItemSmallMedium";
import SingleTravelItemSidebar from "./travel-list/SingleTravelItemSidebar";
import SingleTravelItemFilter from "./travel-list/SingleTravelItemFilter";

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
                                <li className="active"><a href="blog-2.html#">1</a></li>
                                <li><a href="blog-2.html#">2</a></li>
                                <li><a href="blog-2.html#">3</a></li>
                                <li><a href="blog-2.html#">4</a></li>
                                <li><a href="blog-2.html#">5</a></li>
                                <li><a href="blog-2.html#">6</a></li>
                                <li><a href="blog-2.html#">7</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}