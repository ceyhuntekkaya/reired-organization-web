import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="footer-area pt-85 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget contact-widget">
                                <h3>About AdventureGene</h3>
                                <p>Adventure is all about having the freedom to follow your curiosity and
                                    discovering the unknown. No
                                    matter the Travel Style, our tours balance well-planned itineraries with the
                                    flexibility to do your
                                    own thing and explore a bit on your own.</p>
                                <ul>
                                    <li><Link to="/detail"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fab fa-youtube"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-3">
                            <div className="widget quick-link-widget">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>About
                                        Us</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Why Travel
                                        With Us?</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Guides &
                                        Staff</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Contact Us</Link>
                                    </li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>We Are
                                        Hiring</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Our Core
                                        Values</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-3">
                            <div className="widget quick-link-categories">
                                <h3>Categories</h3>
                                <ul>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Adventure</Link>
                                    </li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Hiking &
                                        Trekking</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Cycling
                                        Tours</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Family
                                        Tours</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Wildlife
                                        Tours</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Polar
                                        Tours</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Food Tours</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-4">
                            <div className="widget quick-destinations">
                                <h3>Destinations</h3>
                                <ul>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>African
                                        Safaris</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Alaska &
                                        Canada</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>South
                                        America</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Middle
                                        East</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Asia</Link>
                                    </li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>Europe</Link>
                                    </li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-angle-right"></i>South
                                        America</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget contact-us">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-paper-plane"></i>Level 1,
                                        14-16 Church Street
                                        Queenstown, New Zealand</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-envelope"></i>support@adventuregene.com</Link>
                                    </li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-phone-alt"></i>+ 001 800
                                        661 9073</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy-right-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="copy-payment">
                                <ul>
                                    <li><Link to="adventure-1.html#"><img src="img/payment/1.png" alt=""/></Link></li>
                                    <li><Link to="adventure-1.html#"><img src="img/payment/2.png" alt=""/></Link></li>
                                    <li><Link to="adventure-1.html#"><img src="img/payment/3.png" alt=""/></Link></li>
                                    <li><Link to="adventure-1.html#"><img src="img/payment/4.png" alt=""/></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="copyright-text">
                                <p>© 2024 AdventureGene.com All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}