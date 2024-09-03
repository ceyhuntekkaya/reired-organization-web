export default function Contact (){
    return(
        <>
            <div className="contact-area pt-90 pb-95">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center">
                                <p className="title">Contact Information</p>
                                <h2>We Would Love To<span></span> hear From You</h2>
                                <p>Travel demand is high! Call and chat wait times are longer than normal. We’re working
                                    on it and appreciate your patience. It's easy to reach us and we'd love to hear from
                                    you. Whether you're raring to get adventuring or you’re just starting to dream, get
                                    in touch and we'll help you on your way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact text-center">
                                <div className="contact-thumb">
                                    <img src="img/icon/c1.png" alt=""/>
                                </div>
                                <div className="contact-content">
                                    <h4>Our Location</h4>
                                    <p>4336 Christensen Road Billings, MT 59101 United States</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact text-center">
                                <div className="contact-thumb">
                                    <img src="img/icon/c2.png" alt=""/>
                                </div>
                                <div className="contact-content">
                                    <h4>Let’s Chat!</h4>
                                    <p>Mon - Sat: 9am to 8pm EST Sun: Closed</p>
                                    <a href="contact.html#" className="chat">Chat with us <i
                                        className="fal fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact text-center">
                                <div className="contact-thumb">
                                    <img src="img/icon/c3.png" alt=""/>
                                </div>
                                <div className="contact-content">
                                    <h4>Phone And Fax</h4>
                                    <p>Mobile: <a href="tel:+008012345678">+123-456-7890</a></p>
                                    <p>Phone: <a href="tel:+008012345678">+12-3456-6789</a></p>
                                    <p>Fax: <a href="tel:+008012345678">+2-3456-6789</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact text-center">
                                <div className="contact-thumb">
                                    <img src="img/icon/c4.png" alt=""/>
                                </div>
                                <div className="contact-content">
                                    <h4>Email Address</h4>
                                    <a href="mailto:yourname@email.com">admin@adventuren.com</a>
                                    <a href="mailto:yourname@email.com">info@adventuren.com</a>
                                    <a href="contact.html#">www.adventuren.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="google-map-area">
                <div className="google-map-wrap">
                    <div className="fullwide-map">
                        <div id="map_canvas" style={{width:"100%;height:760px;"}}></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="section-title pt-90">
                                <p className="title">Get In Touch</p>
                                <h2>Drop Us a Line. We'd love<span></span> to hear from you!</h2>
                            </div>
                            <div className="contact-p-contact pb-70">
                                <form action="contact.html#" className="gane-form">
                                    <div className="single-field half-field">
                                        <input type="text" className="form-control" id="usr" placeholder="First Name"/>
                                    </div>
                                    <div className="single-field half-field-last">
                                        <input type="text" className="form-control" id="usr" placeholder="Last Name"/>
                                    </div>
                                    <div className="single-field half-field">
                                        <input type="email" className="form-control" id="usr" placeholder="Your Email"/>
                                    </div>
                                    <div className="single-field half-field-last">
                                        <input type="tel" className="form-control" id="usr" placeholder="Last Name"/>
                                    </div>
                                    <div className="single-field">
                                        <textarea className="form-control" rows="5" id="comment"
                                                  placeholder="Enter your message"></textarea>
                                    </div>
                                    <button className="btn btn-theme" type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}