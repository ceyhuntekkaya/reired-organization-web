import {Link} from "react-router-dom";

export default function SingleTravelItemSmall (){
    return (
        <div className="col-lg-4 col-sm-6 isotope_item">
            <div className="single-blog-post">
                <div className="post-thumbnail">
                    <img src="img/post/g2.jpg" alt=""/>
                </div>
                <div className="single-post-content-thumb">
                    <div className="post-meta">
                        <span><i className="fal fa-clock"></i>Sep 11, 2024</span>
                        <span><i className="fad fa-user"></i>Liza De</span>
                        <span><i className="fal fa-comments"></i>12</span>
                    </div>
                    <div className="entry-header">
                        <Link to="blog-grid.html#"><h2 className="entry-title">Surviving The
                            World’s Most Dangerous Hike</h2></Link>
                    </div>
                    <div className="entry-content">
                        <p>It doesn’t matter if it’s just for a day or for an entire week… check
                            out this beach packing list and you’re sure to show up prepared.
                            There’s something rejuvenating about soaking up the sun, swimming in
                            the ocean, and basking in the sea breeze. If you live close enough
                            to a beach that you can take a day trip, you’re one of the lucky
                            ones. All you have to do is pack up your car and go! But it’s still
                            important to make sure you have everything you need for the day so
                            that you don’t have to turn around if you’ve forgotten
                            something.</p>
                        <Link to="blog-grid.html#" className="btn more">Read More <i
                            className="fal fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}