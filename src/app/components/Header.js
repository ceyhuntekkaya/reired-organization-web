import {Link} from "react-router-dom";

export default function Header (){




    return (
        <header id="header" className="header-area style-2 header-border absulate-header">
            <div className="container">

                <div className="row">
                    <div className="col-lg-6 col-sm-3">
                        <div className="header-top-left">
                            <ul>
                                <li className="has-dropdown"><Link to="adventure-1.html#">USD</Link>
                                    <ul>
                                        <li><Link to="/detail">URO</Link></li>
                                        <li><Link to="adventure-1.html#">FJD</Link></li>
                                        <li><Link to="adventure-1.html#">GBP</Link></li>
                                    </ul>
                                </li>
                                <li className="has-dropdown"><Link to="adventure-1.html#">Türkçe</Link>
                                    <ul>
                                        <li><Link to="adventure-1.html#">İngilizce</Link></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-9">

                        <div className="header-top-contact">
                            <ul>
                                <li><Link to="mailto:yourname@email.com"><i className="fal fa-envelope"></i>support@adventuregene.com</Link>
                                </li>
                                <li><Link to="tel:+008012345678"><i className="fal fa-phone-alt"></i>012 345 6789</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="navigation-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-6 col-6">

                            <div className="site-logo">
                                <Link to="index.html"><img src="img/logo4.png" alt="GENE"/></Link>
                            </div>

                        </div>
                        <div className="col-lg-10 col-sm-6 col-6">

                            <div className="main-menu-wrap">
                                <nav className="gene-nav">
                                    <ul className="menu">
                                        <li className="has-dropdown"><Link to="javascript:void(0)">Home</Link>
                                            <ul>
                                                <li><Link to="/">Homepage</Link></li>
                                                <li><Link to="/about-us">about-us</Link></li>
                                                <li><Link to="/adventure">adventure</Link></li>
                                                <li><Link to="/adventure-detail">adventure-detail</Link></li>
                                                <li><Link to="/cart-list">Card List</Link></li>
                                                <li><Link to="/check-out">check-out</Link></li>
                                                <li><Link to="/contact">contact</Link></li>
                                                <li><Link to="/error">error</Link></li>
                                                <li><Link to="/sing-up">sing-up</Link></li>
                                                <li><Link to="/travel/grid">/travel/grid</Link></li>
                                                <li><Link to="/travel/one">travel/one</Link></li>
                                                <li><Link to="/travel/two">travel/two</Link></li>
                                                <li><Link to="/login">login</Link></li>

                                                <li><Link to="/home1">home1</Link></li>
                                                <li><Link to="/home2">home2</Link></li>
                                                <li><Link to="/home3">home3</Link></li>

                                            </ul>
                                        </li>
                                        <li className="has-dropdown"><Link to="javascript:void(0)">Adventures</Link>
                                            <ul>
                                                <li><Link to="adventure-1.html">Adventure List One</Link></li>
                                                <li><Link to="adventure-2.html">Adventure List Two</Link></li>
                                                <li><Link to="adventure-3.html">Adventure List Three</Link></li>
                                                <li><Link to="adventure-detail-1.html">Adventure Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown"><Link to="javascript:void(0)">Blog</Link>
                                            <ul>
                                                <li><Link to="blog-1.html">Blog List One</Link></li>
                                                <li><Link to="blog-2.html">Blog List Two</Link></li>
                                                <li><Link to="blog-grid.html">Blog Grid</Link></li>
                                                <li><Link to="blog-details.html">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown"><Link to="javascript:void(0)">Other
                                            Pages</Link>
                                            <ul>
                                                <li><Link to="about.html">About Us</Link></li>
                                                <li><Link to="login.html">Log In</Link></li>
                                                <li><Link to="signup.html">Sign Up</Link></li>
                                                <li><Link to="404.html">Error</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown"><Link to="javascript:void(0)">Cart Pages</Link>
                                            <ul>
                                                <li><Link to="cart.html">Cart</Link></li>
                                                <li><Link to="check-out.html">Check Out</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="contact.html">Contact</Link></li>
                                        <li className="icon"><Link to="login.html"><i
                                            className="far fa-user"></i>LOGIN</Link></li>
                                        <li className="icon"><Link to="cart.html"> <i
                                            className="fal fa-shopping-basket"></i><small>(2)</small></Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-menu-area"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}