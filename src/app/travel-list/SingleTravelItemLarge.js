import {Link} from "react-router-dom";

export default function SingleTravelItemLarge (){
    return (

        <div className="single-blog-post">
            <div className="post-thumbnail">
                <img src="img/post/s1.jpg" alt=""/>
            </div>
            <div className="single-post-content-thumb">
                <div className="post-meta">
                    <span><i className="fal fa-clock"></i>September 11, 2024</span>
                    <span><i className="fal fa-user"></i>Liza De Villiers</span>
                    <span><i className="fad fa-eye"></i>180</span>
                    <span><i className="fal fa-comments"></i>12 Comments</span>
                </div>
                <div className="entry-header">
                    <Link to="/detail"><h2 className="entry-title">The Only Beach Packing List
                        You’ll Ever Need</h2></Link>
                </div>
                <div className="entry-content">
                    <p>It doesn’t matter if it’s just for a day or for an entire week… check out
                        this beach packing list and you’re sure to show up prepared. There’s
                        something rejuvenating about soaking up the sun, swimming in the ocean, and
                        basking in the sea breeze. If you live close enough to a beach that you can
                        take a day trip, you’re one of the lucky ones. All you have to do is pack up
                        your car and go! But it’s still important to make sure you have everything
                        you need for the day so that you don’t have to turn around if you’ve
                        forgotten something.</p>
                    <Link to="blog-1.html#" className="btn border-theme">View In Detail</Link>
                </div>
            </div>
        </div>

    )
}