import {Link} from "react-router-dom";

export default function SingleTravelItemSidebar (){
    return (
        <div className="advanture-sidebar">
            <form className="blog-shearch-form" action="blog-1.html#">
                <input className="form-control" placeholder="Search Here" type="text"/>
                <button className="submit" type="submit"><i className="fal fa-search"></i></button>
            </form>
            <div className="sigle-adv-sidebar">
                <h4>Select <span>Categories</span></h4>
                <ul className="widget-catagories">
                    <li><input type="checkbox"/> Camping <span>(110)</span></li>
                    <li><input type="checkbox"/> Trekking <span>(52)</span></li>
                    <li><input type="checkbox"/> Biking <span>(87)</span></li>
                    <li><input type="checkbox"/> Hiking <span>(54)</span></li>
                    <li><input type="checkbox"/> Climbing <span>(22)</span></li>
                    <li><input type="checkbox"/> Wildlife <span>(62)</span></li>
                    <li><input type="checkbox"/> Beach <span>(11)</span></li>
                    <li><input type="checkbox"/> Surfing <span>(32)</span></li>
                </ul>
            </div>
            <div className="sigle-adv-sidebar">
                <h4>Popular <span>Posts</span></h4>
                <div className="single-popular-post-wrap">
                    <div className="popular-post-thumb">
                        <img src="img/post/p1.jpg" alt=""/>
                    </div>
                    <div className="popular-post-content">
                        <p>May 11, 2024</p>
                        <Link to="/detail"><h6>Kayaking In The Norwegian Fjords: A Love Story</h6>
                        </Link>
                    </div>
                </div>
                <div className="single-popular-post-wrap">
                    <div className="popular-post-thumb">
                        <img src="img/post/p2.jpg" alt=""/>
                    </div>
                    <div className="popular-post-content">
                        <p>May 11, 2024</p>
                        <Link to="blog-1.html#"><h6>Trek The Tour Du Mont Blanc In A Weekend</h6></Link>
                    </div>
                </div>
                <div className="single-popular-post-wrap">
                    <div className="popular-post-thumb">
                        <img src="img/post/p3.jpg" alt=""/>
                    </div>
                    <div className="popular-post-content">
                        <p>May 11, 2024</p>
                        <Link to="blog-1.html#"><h6>Trek The Tour Du Mont Blanc In A Weekend</h6></Link>
                    </div>
                </div>
                <div className="single-popular-post-wrap">
                    <div className="popular-post-thumb">
                        <img src="img/post/p4.jpg" alt=""/>
                    </div>
                    <div className="popular-post-content">
                        <p>May 11, 2024</p>
                        <Link to="blog-1.html#"><h6>Trek The Tour Du Mont Blanc In A Weekend</h6></Link>
                    </div>
                </div>
            </div>
            <div className="sigle-adv-sidebar">
                <h4>Blog <span>Archives</span></h4>
                <form action="blog-1.html#" className="blog-sidebar-select">
                    <select className="form-select" aria-label="Default select example">
                        <option selected="">Select Monthy</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </select>
                </form>
            </div>
            <div className="sigle-adv-sidebar">
                <h4>Select <span>Activities</span></h4>
                <ul className="widget-activities">
                    <li><Link to="blog-1.html#"><img src="img/icon/a1.png" alt=""/></Link></li>
                    <li><Link to="blog-1.html#"><img src="img/icon/a2.png" alt=""/></Link></li>
                    <li><Link to="blog-1.html#"><img src="img/icon/a3.png" alt=""/></Link></li>
                    <li><Link to="blog-1.html#"><img src="img/icon/a4.png" alt=""/></Link></li>
                    <li><Link to="blog-1.html#"><img src="img/icon/a5.png" alt=""/></Link></li>
                    <li><Link to="blog-1.html#"><img src="img/icon/a6.png" alt=""/></Link></li>
                </ul>
            </div>
        </div>
    )
}