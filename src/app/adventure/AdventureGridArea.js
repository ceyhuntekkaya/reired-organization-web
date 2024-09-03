import {Link} from "react-router-dom";

export default function AdventureGridArea (){
    return (
        <div className="adventure-grid-area pt-80 pb-105">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="adventure-select">
                            <form action="adventure-1.html#" className="adventure-select-form">
                                <select className="form-select dn-small" aria-label="Default select example">
                                    <option selected>Select Adventure Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </select>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Price</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </select>
                                <select className="form-select dn-small" aria-label="Default select example">
                                    <option selected>Select Destination</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </select>
                                <input type="date" name="date"/>
                                <div className="view-grid">
                                    <ul>
                                        <li className="active"><Link to="adventure-1.html#"><i
                                            className="fal fa-th"></i></Link></li>
                                        <li><Link to="adventure-1.html#"><i className="fal fa-list-ul"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-adventure">
                            <img src="img/adventure/g1.jpg" alt="adventure"/>
                            <div className="adventure-content">
                                <p className="tour">7 Days - 14 People Max - Multi-activity</p>
                                <Link to="adventure-1.html#"><h6>Ultimate South Island Adventure</h6></Link>
                                <p>Our wonderful team of travel professionals take people for camping and give
                                    them the best
                                    trekking experience ever.</p>
                                <p className="price">$1574 <small>Per Person</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-adventure">
                            <img src="img/adventure/g2.jpg" alt="adventure"/>
                            <div className="adventure-content">
                                <p className="tour">10 Days - 14 People Max - Multi-activity</p>
                                <Link to="adventure-1.html#"><h6>Italian Lakes District Adventure</h6></Link>
                                <p>Our wonderful team of travel professionals take people for camping and give
                                    them the best
                                    trekking experience ever.</p>
                                <p className="price">$5899 <small>Per Person</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-adventure">
                            <img src="img/adventure/g3.jpg" alt="adventure"/>
                            <div className="adventure-content">
                                <p className="tour">6 Days - 18 People Max - Multi-activity</p>
                                <Link to="adventure-1.html#"><h6>Croatia Dalmatian Coast Tour</h6></Link>
                                <p>Our wonderful team of travel professionals take people for camping and give
                                    them the best
                                    trekking experience ever.</p>
                                <p className="price">$3998 <small>Per Person</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-adventure">
                            <img src="img/adventure/g4.jpg" alt="adventure"/>
                            <div className="adventure-content">
                                <p className="tour">9 Nights - Remote Rides - Wild Adventures</p>
                                <Link to="adventure-1.html#"><h6>Circumnavigate Kilimanjaro by Bike</h6></Link>
                                <p>Our wonderful team of travel professionals take people for camping and give
                                    them the best
                                    trekking experience ever.</p>
                                <p className="price">$1931 <small>Per Person</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-adventure">
                            <img src="img/adventure/g5.jpg" alt="adventure"/>
                            <div className="adventure-content">
                                <p className="tour">4 Nights - 14 People Max - Wild Hikes</p>
                                <Link to="adventure-1.html#"><h6>The 3 Peaks Challenge in Morocco</h6></Link>
                                <p>Our wonderful team of travel professionals take people for camping and give
                                    them the best
                                    trekking experience ever.</p>
                                <p className="price">$390 <small>Per Person</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-adventure">
                            <img src="img/adventure/g6.jpg" alt="adventure"/>
                            <div className="adventure-content">
                                <p className="tour">6 Days - 12 People Max - Multi-activity</p>
                                <Link to="adventure-1.html#"><h6>Adventure Hiking in Namibia</h6></Link>
                                <p>Our wonderful team of travel professionals take people for camping and give
                                    them the best
                                    trekking experience ever.</p>
                                <p className="price">$1188 <small>Per Person</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-adventure">
                            <img src="img/adventure/g7.jpg" alt="adventure"/>
                            <div className="adventure-content">
                                <p className="tour">5 Hours - 5 People Max</p>
                                <Link to="adventure-1.html#"><h6>Romantic Candle Light Dinner</h6></Link>
                                <p>Our wonderful team of travel professionals take people for camping and give
                                    them the best
                                    trekking experience ever.</p>
                                <p className="price">$265 <small>Per Person</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-adventure">
                            <img src="img/adventure/g8.jpg" alt="adventure"/>
                            <div className="adventure-content">
                                <p className="tour">2 Days - 5 People Max</p>
                                <Link to="adventure-1.html#"><h6>Exclusive Romantic Dinner Cruise</h6></Link>
                                <p>Our wonderful team of travel professionals take people for camping and give
                                    them the best
                                    trekking experience ever.</p>
                                <p className="price">$510 <small>Per Person</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-adventure">
                            <img src="img/adventure/g9.jpg" alt="adventure"/>
                            <div className="adventure-content">
                                <p className="tour">15 Days - 20 People Max - Multi-activity</p>
                                <Link to="adventure-1.html#"><h6>Everest Base Camp Trek</h6></Link>
                                <p>Our wonderful team of travel professionals take people for camping and give
                                    them the best
                                    trekking experience ever.</p>
                                <p className="price">$1365 <small>Per Person</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="gane-pagination mt-20 text-center">
                            <ul>
                                <li className="active"><Link to="adventure-1.html#">1</Link></li>
                                <li><Link to="adventure-1.html#">2</Link></li>
                                <li><Link to="adventure-1.html#">3</Link></li>
                                <li><Link to="adventure-1.html#">4</Link></li>
                                <li><Link to="adventure-1.html#">5</Link></li>
                                <li><Link to="adventure-1.html#">6</Link></li>
                                <li><Link to="adventure-1.html#">7</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}