import {Link} from "react-router-dom";

export default function TeamUs (){
    return (
        <div className="guide-area pt-85 pb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title text-center">
                            <p className="title">Our Guides & Staff</p>
                            <h2>A full team of experts with you before,<span></span> during and after the journey
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="single-guide">
                            <div className="guide-thumb">
                                <img src="img/guide/1.jpg" alt=""/>
                                <div className="guide-content">
                                    <p className="title">Adventure Manager</p>
                                    <Link to="about.html#"><h4>Chris Kearney</h4></Link>
                                    <ul>
                                        <li><Link to="about.html#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                    <div className="about-guide">
                                        <p>Tasked with finding the freshest and most sustainable adventures around
                                            the world, either from his home in Brighton or wherever in Europe his
                                            campervan happens to be parked up.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="single-guide">
                            <div className="guide-thumb">
                                <img src="img/guide/2.jpg" alt=""/>
                                <div className="guide-content">
                                    <p className="title">Customer Experience Manager</p>
                                    <Link to="about.html#"><h4>Megan Devenish</h4></Link>
                                    <ul>
                                        <li><Link to="about.html#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                    <div className="about-guide">
                                        <p>Tasked with finding the freshest and most sustainable adventures around
                                            the world, either from his home in Brighton or wherever in Europe his
                                            campervan happens to be parked up.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="single-guide">
                            <div className="guide-thumb">
                                <img src="img/guide/3.jpg" alt=""/>
                                <div className="guide-content">
                                    <p className="title">Travel Specialist</p>
                                    <Link to="about.html#"><h4>Dan Bloomfield</h4></Link>
                                    <ul>
                                        <li><Link to="about.html#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li><Link to="about.html#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                    <div className="about-guide">
                                        <p>Tasked with finding the freshest and most sustainable adventures around
                                            the world, either from his home in Brighton or wherever in Europe his
                                            campervan happens to be parked up.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}