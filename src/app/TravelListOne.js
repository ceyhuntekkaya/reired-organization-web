import SingleTravelItemLarge from "./travel-list/SingleTravelItemLarge";
import SingleTravelPagination from "./travel-list/SingleTravelPagination";
import SingleTravelItemSidebar from "./travel-list/SingleTravelItemSidebar";
import SingleTravelItemFilter from "./travel-list/SingleTravelItemFilter";

export default function TravelListOne (){
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
                            <SingleTravelItemLarge/>
                            <SingleTravelItemLarge/>
                            <SingleTravelItemLarge/>
                            <SingleTravelItemLarge/>
                        </div>
                       <SingleTravelPagination/>
                    </div>
                </div>
            </div>
        </div>
    )
}