import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="footer-area pt-85 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget contact-widget">
                                <h3>Campus.org hakkında</h3>
                                <p>Campuorg Turizm, merkezi Kanada, Toronto’da olup, yurtdışında orta öğretim sonrası eğitimi takip eden uluslararası öğrencilere destek sağlayan bir danışmanlık merkezidir. Kuruluşundan (2007) bu yana Orta Doğu’da, özellikle de Türkiye’de sağlam bir çevre geliştirmiş ve kısa bir zamanda öğrenci kabulünde en çok tercih edilen kuruluşlardan biri haline gelmiştir.</p>
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
                                    <li><Link to="adventure-1.html#"><i className="fal fa-paper-plane"></i>
                                        İşçi Blokları Mah. Muhsin Yazıcıoğlu Cad. Regnum SkyTower 17.kat No:57/50, 06530 Çankaya/Ankara</Link></li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-envelope"></i>support@campusorg.com</Link>
                                    </li>
                                    <li><Link to="adventure-1.html#"><i className="fal fa-phone-alt"></i>+ 90 800
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
                                <p>© 2024 campusorg.com All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}