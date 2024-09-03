export default function SubscribeArea (){
    return (
        <div className="subscribe-area pt-80 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <p className="title">SIGN UP FOR OUR NEWSLETTER</p>
                            <h2>Sign up for travel deals,<span></span> news and inspiration</h2>
                            <p>Join our community of over 300,000 global readers who receive emails filled with
                                news, promotions,
                                and other good stuff from G Adventures.</p>
                        </div>
                        <form action="adventure-1.html#" method="post" className="subscribe-form">
                            <input name="email" className="widget-input"
                                   placeholder="Enter your email address ......"
                                   type="email"/>
                            <button type="submit" className="widget-sbtn">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}