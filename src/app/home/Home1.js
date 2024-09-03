import {Link} from "react-router-dom";

export default function Home1() {
    return (
        <>


            <div className="wrapper">
                { //<!-- Start Header --> 
                            }
                    <header id="header" className="header-area absulate-header">
                        <div className="container">
                            { //<!-- Start header top --> 
                            }
                                <div className="row">
                                    <div className="col-lg-6 col-sm-3">
                                        <div className="header-top-left">
                                            <ul>
                                                <li className="has-dropdown"><Link to="index.html#">USD</Link>
                                                    <ul>
                                                        <li><Link to="index.html#">URO</Link></li>
                                                        <li><Link to="index.html#">FJD</Link></li>
                                                        <li><Link to="index.html#">GBP</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown"><Link to="index.html#">English</Link>
                                                    <ul>
                                                        <li><Link to="index.html#">Arabic</Link></li>
                                                        <li><Link to="index.html#">French</Link></li>
                                                        <li><Link to="index.html#">Bangla</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-9">
                                        { //<!-- Header top contact --> 
                            }
                                            <div className="header-top-contact">
                                                <ul>
                                                    <li><Link to="mailto:yourname@email.com"><i
                                                        className="fal fa-envelope"></i>support@adventuregene.com</Link>
                                                    </li>
                                                    <li><Link to="tel:+008012345678"><i
                                                        className="fal fa-phone-alt"></i>012 345 6789</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- Start header top --> 
                            }
                                            </div>
                                            <div className="navigation-area">
                                            <div className="container">
                                            <div className="row navigation-bg">
                                            <div className="col-lg-2 col-sm-4 col-4">
                                        { //<!-- Start site logo --> 
                            }
                                            <div className="site-logo">
                                            <Link to="index.html"><img src="img/logo.png" alt="GENE"/></Link>
                                            </div>
                                        { //<!-- End site logo --> 
                            }
                                            </div>
                                            <div className="col-lg-8 col-sm-4 col-2 order-two">
                                        { //<!-- Start Navigation --> 
                            }
                                            <div className="main-menu-wrap">
                                            <nav className="gene-nav">
                                            <ul className="menu">
                                            <li className="has-dropdown"><Link to="javascript:void(0)">Home</Link>
                                            <ul>{ //<!-- Dropdown Items --> 
                            }
                                            <li><Link to="index.html">Homepage V1</Link></li>
                                            <li><Link to="index-2.html">Homepage V2</Link></li>
                                            <li><Link to="index-3.html">Homepage V3</Link></li>
                                            </ul>
                                            </li>
                                            <li className="has-dropdown"><Link to="javascript:void(0)">Adventures</Link>
                                            <ul>{ //<!-- Dropdown Items --> 
                            }
                                            <li><Link to="adventure-1.html">Adventure List One</Link></li>
                                            <li><Link to="adventure-2.html">Adventure List Two</Link></li>
                                            <li><Link to="adventure-3.html">Adventure List Three</Link></li>
                                            <li><Link to="adventure-detail-1.html">Adventure Details</Link></li>
                                            </ul>
                                            </li>
                                            <li className="has-dropdown"><Link to="javascript:void(0)">Blog</Link>
                                            <ul>{ //<!-- Dropdown Items --> 
                            }
                                            <li><Link to="blog-1.html">Blog List One</Link></li>
                                            <li><Link to="blog-2.html">Blog List Two</Link></li>
                                            <li><Link to="blog-grid.html">Blog Grid</Link></li>
                                            <li><Link to="blog-details.html">Blog Details</Link></li>
                                            </ul>
                                            </li>
                                            <li className="has-dropdown"><Link to="javascript:void(0)">Other Pages</Link>
                                            <ul>{ //<!-- Dropdown Items --> 
                            }
                                            <li><Link to="about.html">About Us</Link></li>
                                            <li><Link to="login.html">Log In</Link></li>
                                            <li><Link to="signup.html">Sign Up</Link></li>
                                            <li><Link to="404.html">Error</Link></li>
                                            </ul>
                                            </li>
                                            <li className="has-dropdown"><Link to="javascript:void(0)">Cart Pages</Link>
                                            <ul>{ //<!-- Dropdown Items --> 
                            }
                                            <li><Link to="cart.html">Cart</Link></li>
                                            <li><Link to="check-out.html">Check Out</Link></li>
                                            </ul>
                                            </li>
                                            <li><Link to="contact.html">Contact</Link></li>
                                            </ul>
                                            </nav>
                                            </div>
                                        { //<!-- Mobile Menu Active here. Don't Remove it --> 
                            }
                                            <div className="mobile-menu-area"></div>
                                        { //<!-- End Navigation --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4 col-6 order-one">
                                        { //<!-- Start login and cart --> 
                            }
                                            <div className="login-cart">
                                            <ul>
                                            <li><Link to="index.html#"><i className="far fa-user"></i>LOGIN</Link></li>
                                            <li className="cart-mega">
                                        { //<!-- Header Cart Start --> 
                            }
                                            <Link to="index.html#ec-side-cart" className="ec-header-btn ec-side-toggle">
                                            <div className="header-icon"><i
                                            className="fal fa-shopping-basket"></i><small>(0)</small></div>
                                            </Link>
                                        { //<!-- Header Cart End --> 
                            }

                                            </li>
                                            </ul>
                                            </div>
                                        { //<!-- End login and cart --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            </header>
                                        { //<!-- End Header --> 
                            }
                                        { //<!-- Start Slider Area --> 
                            }
                                            <section className="slider-area">
                                            <div id="welcome-slide" className="slide-controls owl-carousel">
                                        { //<!-- Start Single Slide --> 
                            }
                                            <div className="single-slide overlay-bg-2">
                                            <div className="slide-thumb shape-1">
                                            <img src="img/slider/slide-1.jpg" alt=""/>
                                        { //<!-- Start Slide Content --> 
                            }
                                            <div className="slide-content">
                                            <div className="container">
                                            <div className="row justify-content-center">
                                            <div className="col-lg-10 col-sm-12">
                                        { //<!-- Start Slide content wrap --> 
                            }
                                            <div className="slide-content-area">
                                        { //<!-- Start Single slide content	-->
                                        }
                                            <div className="single-slide-content text-center">
                                            <div className="content-text">
                                            <h1>Adventure <span></span> In Wild Places</h1>
                                            <h2>It's time for new <strong>Escapes, Thrills</strong>
                                            <span></span> and <strong>Experiences</strong></h2>
                                            </div>
                                            <div className="find-adventure-form text-center">
                                            <form action="index.html#">
                                            <select className="form-select"
                                            aria-label="Default select example">
                                            <option selected>Select Adventure</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            </select>
                                            <select className="form-select"
                                            aria-label="Default select example">
                                            <option selected>Select Destination</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            </select>
                                            <input type="date" name="date"/>
                                            <input className="btn btn-theme" type="submit"
                                            value="Find Your Adventure"/>
                                            </form>
                                            </div>
                                            </div>
                                        { //<!-- End Single slide content	-->
                                        }
                                            </div>
                                        { //<!-- End Slide content wrap-->
                                        }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Slide Content --> 
                            }
                                            </div>
                                            </div>
                                        { //<!-- End Single Slide --> 
                            }
                                        { //<!-- Start Single Slide --> 
                            }
                                            <div className="single-slide overlay-bg-2">
                                            <div className="slide-thumb shape-1">
                                            <img src="img/slider/slide-2.jpg" alt=""/>
                                        { //<!-- Start Slide Content --> 
                            }
                                            <div className="slide-content">
                                            <div className="container">
                                            <div className="row justify-content-center">
                                            <div className="col-lg-10 col-sm-12">
                                        { //<!-- Start Slide content wrap --> 
                            }
                                            <div className="slide-content-area">
                                        { //<!-- Start Single slide content	-->
                                        }
                                            <div className="single-slide-content text-center">
                                            <div className="content-text">
                                            <h1>Adventure <span></span> In Wild Places</h1>
                                            <h2>It's time for new <strong>Escapes, Thrills</strong>
                                            <span></span> and <strong>Experiences</strong></h2>
                                            </div>
                                            <div className="find-adventure-form text-center">
                                            <form action="index.html#">
                                            <select className="form-select"
                                            aria-label="Default select example">
                                            <option selected>Select Adventure</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            </select>
                                            <select className="form-select"
                                            aria-label="Default select example">
                                            <option selected>Select Destination</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            </select>
                                            <input type="date" name="date"/>
                                            <input className="btn btn-theme" type="submit"
                                            value="Find Your Adventure"/>
                                            </form>
                                            </div>
                                            </div>
                                        { //<!-- End Single slide content	-->
                                        }
                                            </div>
                                        { //<!-- End Slide content wrap-->
                                        }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Slide Content --> 
                            }
                                            </div>
                                            </div>
                                        { //<!-- End Single Slide --> 
                            }
                                        { //<!-- Start Single Slide --> 
                            }
                                            <div className="single-slide overlay-bg-2">
                                            <div className="slide-thumb shape-1">
                                            <img src="img/slider/slide-3.jpg" alt=""/>
                                        { //<!-- Start Slide Content --> 
                            }
                                            <div className="slide-content">
                                            <div className="container">
                                            <div className="row justify-content-center">
                                            <div className="col-lg-10 col-sm-12">
                                        { //<!-- Start Slide content wrap -->

                            }
                                            <div className="slide-content-area">
                                        { //<!-- Start Single slide content	-->
                                        }
                                            <div className="single-slide-content text-center">
                                            <div className="content-text">
                                            <h1>Adventure <span></span> In Wild Places</h1>
                                            <h2>It's time for new <strong>Escapes, Thrills</strong>
                                            <span></span> and <strong>Experiences</strong></h2>
                                            </div>
                                            <div className="find-adventure-form text-center">
                                            <form action="index.html#">
                                            <select className="form-select"
                                            aria-label="Default select example">
                                            <option selected>Select Adventure</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            </select>
                                            <select className="form-select"
                                            aria-label="Default select example">
                                            <option selected>Select Destination</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            </select>
                                            <input type="date" name="date"/>
                                            <input className="btn btn-theme" type="submit"
                                            value="Find Your Adventure"/>
                                            </form>
                                            </div>
                                            </div>
                                        { //<!-- End Single slide content	-->
                                        }
                                            </div>
                                        { //<!-- End Slide content wrap-->
                                        }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Slide Content --> 
                            }
                                            </div>
                                            </div>
                                        { //<!-- End Single Slide --> 
                            }
                                            </div>
                                            </section>
                                        { //<!-- End Slider Area --> 
                            }
                                        { //<!-- Start Quick Icon Area --> 
                            }
                                            <div className="quick-icon-area pb-90">
                                            <div className="container">
                                            <div className="row">
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single quick icon --> 
                            }
                                            <div className="single-quick-icon text-center">
                                            <div className="quick-icon-content">
                                            <img src="img/icon/1.png" alt=""/>
                                            <p>Camping</p>
                                            </div>
                                            </div>
                                        { //<!-- End single quick icon --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single quick icon --> 
                            }
                                            <div className="single-quick-icon text-center">
                                            <div className="quick-icon-content">
                                            <img src="img/icon/2.png" alt=""/>
                                            <p>Hiking</p>
                                            </div>
                                            </div>
                                        { //<!-- End single quick icon --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single quick icon --> 
                            }
                                            <div className="single-quick-icon text-center">
                                            <div className="quick-icon-content">
                                            <img src="img/icon/3.png" alt=""/>
                                            <p>Beach Tours</p>
                                            </div>
                                            </div>
                                        { //<!-- End single quick icon --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single quick icon --> 
                            }
                                            <div className="single-quick-icon text-center">
                                            <div className="quick-icon-content">
                                            <img src="img/icon/4.png" alt=""/>
                                            <p>Surfing</p>
                                            </div>
                                            </div>
                                        { //<!-- End single quick icon --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single quick icon --> 
                            }
                                            <div className="single-quick-icon text-center">
                                            <div className="quick-icon-content">
                                            <img src="img/icon/5.png" alt=""/>
                                            <p>Safari</p>
                                            </div>
                                            </div>
                                        { //<!-- End single quick icon --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single quick icon --> 
                            }
                                            <div className="single-quick-icon text-center">
                                            <div className="quick-icon-content">
                                            <img src="img/icon/6.png" alt=""/>
                                            <p>Cycling</p>
                                            </div>
                                            </div>
                                        { //<!-- End single quick icon --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Quick Icon Area --> 
                            }
                                        { //<!-- Start About Area --> 
                            }
                                            <div className="about-area pb-115">
                                            <div className="about-bg">
                                            <img src="img/about/1.jpg" alt=""/>
                                            </div>
                                            <div className="container">
                                            <div className="row">
                                            <div className="col"></div>
                                            <div className="col-lg-6">
                                        { //<!-- Start section title --> 
                            }
                                            <div className="section-title">
                                            <p className="title">GET TO KNOW US</p>
                                            <h2>Begin your adventure <span></span> with AdventureGene?</h2>
                                            </div>
                                        { //<!-- End section title --> 
                            }
                                            <div className="about-content">
                                            <p>We are a family-owned company, and getting to know you is our biggest priority.
                                            Adventure Treks isn’t just about outdoor adventure for teens; it’s about you! We
                                            want you to discover your best self, and we believe that the great outdoors is just
                                            the way to do it.</p>
                                            <Link to="index.html#" className="btn btn-theme">Get To Know Our Values</Link>
                                            </div>
                                            </div>
                                            </div>
                                            </div>

                                            </div>
                                        { //<!-- End About Area --> 
                            }
                                        { //<!-- Start Advencher Area --> 
                            }
                                            <div className="adventure-area pb-90 pt-50">
                                            <div className="container">
                                            <div className="row justify-content-center">
                                            <div className="col-xl-6 col-md-8">
                                        { //<!-- Start section title --> 
                            }
                                            <div className="section-title text-center">
                                            <p className="title">Browse by Adventures</p>
                                            <h2>Your best adventure <span></span> YET, starts here</h2>
                                            </div>
                                        { //<!-- End section title --> 
                            }
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/1.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <Link to="index.html#"><h5>Hiking & Trekking</h5></Link>
                                            <p>Responsible travel has always been at the core of what we do.</p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/2.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <Link to="index.html#"><h5>Cycling Tours</h5></Link>
                                            <p>Responsible travel has always been at the core of what we do.</p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/3.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <Link to="index.html#"><h5>Family Tours</h5></Link>
                                            <p>Responsible travel has always been at the core of what we do.</p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/4.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <Link to="index.html#"><h5>Wildlife Tours</h5></Link>
                                            <p>Responsible travel has always been at the core of what we do.</p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/5.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <Link to="index.html#"><h5>Polar Tours</h5></Link>
                                            <p>Responsible travel has always been at the core of what we do.</p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/6.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <Link to="index.html#"><h5>Food Tours</h5></Link>
                                            <p>Responsible travel has always been at the core of what we do.</p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/7.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <Link to="index.html#"><h5>ruise Tours</h5></Link>
                                            <p>Responsible travel has always been at the core of what we do.</p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/8.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <Link to="index.html#"><h5>Beach Tours</h5></Link>
                                            <p>Responsible travel has always been at the core of what we do.</p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Advencher Area --> 
                            }
                                        { //<!-- Start Fun Facts Area --> 
                            }
                                            <div className="funfact-area overlay-bg pt-170 pb-70">
                                            <div className="container">
                                            <div className="row justify-content-center">
                                            <div className="col-xl-5 col-md-8">
                                        { //<!-- Start section title --> 
                            }
                                            <div className="section-title white text-center">
                                            <p className="title">Interesting Facts</p>
                                            <h2>Experiences Away <span></span> From Crowd</h2>
                                            </div>
                                        { //<!-- End section title --> 
                            }
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single fact --> 
                            }
                                            <div className="single-fact text-center">
                                            <div className="fact-info">
                                            <img src="img/funfact/1.png" alt=""/>
                                            <span className="counter">10258</span><span>M</span>
                                            <p>Trekking</p>
                                            </div>
                                            </div>
                                        { //<!-- Start single fact --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single fact --> 
                            }
                                            <div className="single-fact text-center">
                                            <div className="fact-info">
                                            <img src="img/funfact/2.png" alt=""/>
                                            <span className="counter">670</span><span>+</span>
                                            <p>Beac Tours</p>
                                            </div>
                                            </div>
                                        { //<!-- Start single fact --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single fact --> 
                            }
                                            <div className="single-fact text-center">
                                            <div className="fact-info">
                                            <img src="img/funfact/3.png" alt=""/>
                                            <span className="counter">910</span><span>+</span>
                                            <p>Destinations</p>
                                            </div>
                                            </div>
                                        { //<!-- Start single fact --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single fact --> 
                            }
                                            <div className="single-fact text-center">
                                            <div className="fact-info">
                                            <img src="img/funfact/4.png" alt=""/>
                                            <span className="counter">1240</span><span>+</span>
                                            <p>crui Parties</p>
                                            </div>
                                            </div>
                                        { //<!-- Start single fact --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single fact --> 
                            }
                                            <div className="single-fact text-center">
                                            <div className="fact-info">
                                            <img src="img/funfact/5.png" alt=""/>
                                            <span className="counter">10258</span><span>+</span>
                                            <p>Water Sports</p>
                                            </div>
                                            </div>
                                        { //<!-- Start single fact --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- Start single fact --> 
                            }
                                            <div className="single-fact text-center">
                                            <div className="fact-info">
                                            <img src="img/funfact/6.png" alt=""/>
                                            <span className="counter">950</span><span>M</span>
                                            <p>Cyliing Track</p>
                                            </div>
                                            </div>
                                        { //<!-- Start single fact --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Fun Facts Area --> 
                            }
                                        { //<!-- Start Selling Tips Area --> 
                            }
                                            <div className="selling-tips-area pb-80 pt-120">
                                            <div className="container">
                                            <div className="row">
                                            <div className="col-lg-6">
                                            <div className="selling-tips-wrap">
                                        { //<!-- Start single selling tips --> 
                            }
                                            <div className="single-selling-tips section-title">
                                            <p className="title">BEST SELLING TRIPS</p>
                                            <h2>Top Rated Experiences <span></span> On Adventuren</h2>
                                            <p>It’s time to pack your bags and get ready for your next adventure. Check out the
                                            tours we’re running in August and September, and if you see something that’s up
                                            your alley, book away! We’re just as excited as you to explore our big,
                                            beautiful world.</p>
                                            <Link to="index.html#" className="btn btn-theme mt-30">See all the tours we're
                                            running</Link>
                                            </div>
                                        { //<!-- End single selling tips --> 
                            }
                                            </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/2.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <p className="tour">5 DAY TOUR</p>
                                            <Link to="index.html#"><h6>Adventure Cycling in Peru</h6></Link>
                                            <p className="price">$1574 <small>Per Person</small></p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/3.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <p className="tour">5 DAY TOUR</p>
                                            <Link to="index.html#"><h6>Best of Spain & Portugal</h6></Link>
                                            <p className="price">$2564 <small>Per Person</small></p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/1.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <p className="tour">5 DAY TOUR</p>
                                            <Link to="index.html#"><h6>Adventure Cycling in Peru</h6></Link>
                                            <p className="price">$1950 <small>Per Person</small></p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/5.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <p className="tour">5 DAY TOUR</p>
                                            <Link to="index.html#"><h6>Polar Tours</h6></Link>
                                            <p className="price">$1587 <small>Per Person</small></p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/6.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <p className="tour">5 DAY TOUR</p>
                                            <Link to="index.html#"><h6>Food Tours</h6></Link>
                                            <p className="price">$1236 <small>Per Person</small></p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure --> 
                            }
                                            <div className="single-adventure">
                                            <img src="img/adventure/7.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                            <p className="tour">5 DAY TOUR</p>
                                            <Link to="index.html#"><h6>ruise Tours</h6></Link>
                                            <p className="price">$2548 <small>Per Person</small></p>
                                            </div>
                                            </div>
                                        { //<!-- end single adventure --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Selling Tips Area --> 
                            }
                                        { //<!-- Start Subscribe Area --> 
                            }
                                            <div className="subscribe-area pt-100 pb-100 pb0-320">
                                            <div className="container">
                                            <div className="row">
                                            <div className="col-lg-6">
                                        { //<!-- Start section title --> 
                            }
                                            <div className="section-title">
                                            <p className="title">SIGN UP FOR OUR NEWSLETTER</p>
                                            <h2>Sign up for travel deals, <span></span> news and inspiration</h2>
                                            <p>Join our community of over 300,000 global readers who receive emails filled with
                                            news, promotions, and other good stuff from G Adventures.</p>
                                            </div>
                                        { //<!-- End section title --> 
                            }
                                        { //<!-- start subscribe --> 
                            }
                                            <form action="index.html#" method="post" className="subscribe-form">
                                            <input name="email" className="widget-input"
                                            placeholder="Enter your email address ......" type="email"/>
                                            <button type="submit" className="widget-sbtn">Subscribe Now</button>
                                            </form>
                                        { //<!-- end subscribe --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Subscribe Area --> 
                            }
                                        { //<!-- Start Home Blog Area --> 
                            }
                                            <div className="home-blog-area pt-100 pb-80 pb-res pb0-320">
                                            <div className="container">
                                            <div className="row justify-content-center">
                                            <div className="col-lg-9 col-sm-12">
                                        { //<!-- Start section title --> 
                            }
                                            <div className="section-title text-center">
                                            <p className="title">From The Blog</p>
                                            <h2>Award-winning stories, and opinions<span></span> to fill your life with adventure
                                            </h2>
                                            </div>
                                        { //<!-- End section title --> 
                            }
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- Start single post blog --> 
                            }
                                            <div className="single-post-blog">
                                            <div className="post-thumbnail">
                                            <img src="img/post/1.jpg" alt=""/>
                                            </div>
                                            <div className="post-date">
                                            <p>12 <span>May</span></p>
                                            </div>
                                            <div className="post-blog-content">
                                            <Link to="index.html#"><h4>Will yacht tourism set to boom post-pandemic?</h4></Link>
                                            <p>Currently, the yacht charter market is predicted to register a CAGR of about 4%
                                            during the forecast period (2020 - 2025).</p>
                                            </div>
                                            </div>
                                        { //<!-- End single post blog --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- Start single post blog --> 
                            }
                                            <div className="single-post-blog">
                                            <div className="post-thumbnail">
                                            <img src="img/post/2.jpg" alt=""/>
                                            </div>
                                            <div className="post-date">
                                            <p>12 <span>May</span></p>
                                            </div>
                                            <div className="post-blog-content">
                                            <Link to="index.html#"><h4>Travel will bounce back sooner than expected</h4></Link>
                                            <p>Currently, the yacht charter market is predicted to register a CAGR of about 4%
                                            during the forecast period (2020 - 2025).</p>
                                            </div>
                                            </div>
                                        { //<!-- End single post blog --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- Start single post blog --> 
                            }
                                            <div className="single-post-blog">
                                            <div className="post-thumbnail">
                                            <img src="img/post/3.jpg" alt=""/>
                                            </div>
                                            <div className="post-date">
                                            <p>12 <span>May</span></p>
                                            </div>
                                            <div className="post-blog-content">
                                            <Link to="index.html#"><h4>Darjeeling & Kalimpong Open Doors for Tourists</h4></Link>
                                            <p>Currently, the yacht charter market is predicted to register a CAGR of about 4%
                                            during the forecast period (2020 - 2025).</p>
                                            </div>
                                            </div>
                                        { //<!-- End single post blog --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- Start single post blog --> 
                            }
                                            <div className="single-post-blog">
                                            <div className="post-thumbnail">
                                            <img src="img/post/4.jpg" alt=""/>
                                            </div>
                                            <div className="post-date">
                                            <p>12 <span>May</span></p>
                                            </div>
                                            <div className="post-blog-content">
                                            <Link to="index.html#"><h4>Bir Billing Paragliding to Start from 15th Sep.</h4></Link>
                                            <p>Currently, the yacht charter market is predicted to register a CAGR of about 4%
                                            during the forecast period (2020 - 2025).</p>
                                            </div>
                                            </div>
                                        { //<!-- End single post blog --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Home Blog Area --> 
                            }
                                        { //<!-- Start Guide Area --> 
                            }
                                            <div className="guide-area pt-170 pb-85">
                                            <div className="container">
                                            <div className="row justify-content-center">
                                            <div className="col-lg-10">
                                        { //<!-- Start section title --> 
                            }
                                            <div className="section-title text-center">
                                            <p className="title">Our Guides & Staff</p>
                                            <h2>A full team of experts with you before,<span></span> during and after the journey
                                            </h2>
                                            </div>
                                        { //<!-- End section title --> 
                            }
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-4 col-sm-6">
                                        { //<!-- Start single guide --> 
                            }
                                            <div className="single-guide">
                                            <div className="guide-thumb">
                                            <img src="img/guide/1.jpg" alt=""/>
                                            <div className="guide-content">
                                            <p className="title">Adventure Manager</p>
                                            <Link to="index.html#"><h4>Chris Kearney</h4></Link>
                                            <ul>
                                            <li><Link to="index.html#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                            <div className="about-guide">
                                            <p>Tasked with finding the freshest and most sustainable adventures around
                                            the world, either from his home in Brighton or wherever in Europe his
                                            campervan happens to be parked up.</p>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End single guide --> 
                            }
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                        { //<!-- Start single guide --> 
                            }
                                            <div className="single-guide">
                                            <div className="guide-thumb">
                                            <img src="img/guide/2.jpg" alt=""/>
                                            <div className="guide-content">
                                            <p className="title">Customer Experience Manager</p>
                                            <Link to="index.html#"><h4>Megan Devenish</h4></Link>
                                            <ul>
                                            <li><Link to="index.html#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                            <div className="about-guide">
                                            <p>Tasked with finding the freshest and most sustainable adventures around
                                            the world, either from his home in Brighton or wherever in Europe his
                                            campervan happens to be parked up.</p>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End single guide --> 
                            }
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                        { //<!-- Start single guide --> 
                            }
                                            <div className="single-guide">
                                            <div className="guide-thumb">
                                            <img src="img/guide/3.jpg" alt=""/>
                                            <div className="guide-content">
                                            <p className="title">Travel Specialist</p>
                                            <Link to="index.html#"><h4>Dan Bloomfield</h4></Link>
                                            <ul>
                                            <li><Link to="index.html#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                            <div className="about-guide">
                                            <p>Tasked with finding the freshest and most sustainable adventures around
                                            the world, either from his home in Brighton or wherever in Europe his
                                            campervan happens to be parked up.</p>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End single guide --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Guide Area --> 
                            }
                                        { //<!-- Start Partner Area --> 
                            }
                                            <div className="partner-area pb-220">
                                            <div className="container">
                                            <div className="row justify-content-center">
                                            <div className="col-lg-10">
                                        { //<!-- Start section title --> 
                            }
                                            <div className="section-title text-center">
                                            <p className="title">Our Partners</p>
                                            <h2>We team up with the best to give you<span></span> an unmatchable experience</h2>
                                            </div>
                                        { //<!-- End section title --> 
                            }
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col">
                                            <div className="partner-wrap owl-carousel">
                                        { //<!-- Start single partner --> 
                            }
                                            <div className="single-partner">
                                            <img className="bottom" src="img/partner/1.jpg" alt=""/>
                                            <img className="top" src="img/partner/1-1.jpg" alt=""/>
                                            </div>
                                        { //<!-- End single partner --> 
                            }
                                        { //<!-- Start single partner --> 
                            }
                                            <div className="single-partner">
                                            <img className="bottom" src="img/partner/2.jpg" alt=""/>
                                            <img className="top" src="img/partner/2-2.jpg" alt=""/>
                                            </div>
                                        { //<!-- End single partner --> 
                            }
                                        { //<!-- Start single partner --> 
                            }
                                            <div className="single-partner">
                                            <img className="bottom" src="img/partner/3.jpg" alt=""/>
                                            <img className="top" src="img/partner/3-3.jpg" alt=""/>
                                            </div>
                                        { //<!-- End single partner --> 
                            }
                                        { //<!-- Start single partner --> 
                            }
                                            <div className="single-partner">
                                            <img className="bottom" src="img/partner/4.jpg" alt=""/>
                                            <img className="top" src="img/partner/4-4.jpg" alt=""/>
                                            </div>
                                        { //<!-- End single partner --> 
                            }
                                        { //<!-- Start single partner --> 
                            }
                                            <div className="single-partner">
                                            <img className="bottom" src="img/partner/5.jpg" alt=""/>
                                            <img className="top" src="img/partner/5-5.jpg" alt=""/>
                                            </div>
                                        { //<!-- End single partner --> 
                            }
                                        { //<!-- Start single partner --> 
                            }
                                            <div className="single-partner">
                                            <img className="bottom" src="img/partner/6.jpg" alt=""/>
                                            <img className="top" src="img/partner/6-6.jpg" alt=""/>
                                            </div>
                                        { //<!-- End single partner --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Partner Area --> 
                            }
                                        { //<!-- Start Footer Area --> 
                            }
                                            <footer className="footer-area pt-85 pb-60">
                                            <div className="container">
                                            <div className="row">
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start contact widget --> 
                            }
                                            <div className="widget contact-widget">
                                            <h3>About AdventureGene</h3>
                                            <p>Adventure is all about having the freedom to follow your curiosity and discovering
                                            the unknown. No matter the Travel Style, our tours balance well-planned itineraries
                                            with the flexibility to do your own thing and explore a bit on your own.</p>
                                            <ul>
                                            <li><Link to="index.html#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link to="index.html#"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                            </div>
                                        { //<!-- end contact widget --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-3">
                                        { //<!-- start quick link widget --> 
                            }
                                            <div className="widget quick-link-widget">
                                            <h3>Quick Links</h3>
                                            <ul>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>About Us</Link></li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Why Travel With Us?</Link>
                                            </li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Guides & Staff</Link>
                                            </li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Contact Us</Link></li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>We Are Hiring</Link>
                                            </li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Our Core Values</Link>
                                            </li>
                                            </ul>
                                            </div>
                                        { //<!-- end quick link widget --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-3">
                                        { //<!-- start quick link widget --> 
                            }
                                            <div className="widget quick-link-categories">
                                            <h3>Categories</h3>
                                            <ul>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Adventure</Link></li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Hiking &
                                            Trekking</Link></li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Cycling Tours</Link>
                                            </li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Family Tours</Link>
                                            </li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Wildlife Tours</Link>
                                            </li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Polar Tours</Link></li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Food Tours</Link></li>
                                            </ul>
                                            </div>
                                        { //<!-- end quick link widget --> 
                            }
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                        { //<!-- start quick link widget --> 
                            }
                                            <div className="widget quick-destinations">
                                            <h3>Destinations</h3>
                                            <ul>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>African Safaris</Link>
                                            </li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Alaska & Canada</Link>
                                            </li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>South America</Link>
                                            </li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Middle East</Link></li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Asia</Link></li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>Europe</Link></li>
                                            <li><Link to="index.html#"><i className="fal fa-angle-right"></i>South America</Link>
                                            </li>
                                            </ul>
                                            </div>
                                        { //<!-- end quick link widget --> 
                            }
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                        { //<!-- start contact us widget --> 
                            }
                                            <div className="widget contact-us">
                                            <h3>Contact Us</h3>
                                            <ul>
                                            <li><Link to="index.html#"><i className="fal fa-paper-plane"></i>Level 1, 14-16
                                            Church Street Queenstown, New Zealand</Link></li>
                                            <li><Link to="index.html#"><i className="fal fa-envelope"></i>support@adventuregene.com</Link>
                                            </li>
                                            <li><Link to="index.html#"><i className="fal fa-phone-alt"></i>+ 001 800 661 9073</Link>
                                            </li>
                                            </ul>
                                            </div>
                                        { //<!-- end contact us widget --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </footer>
                                        { //<!-- End Footer Area --> 
                            }
                                        { //<!-- Start Copyright Area --> 
                            }
                                            <div className="copy-right-area">
                                            <div className="container">
                                            <div className="row">
                                            <div className="col-sm-6">
                                        { //<!-- Start payment --> 
                            }
                                            <div className="copy-payment">
                                            <ul>
                                            <li><Link to="index.html#"><img src="img/payment/1.png" alt=""/></Link></li>
                                            <li><Link to="index.html#"><img src="img/payment/2.png" alt=""/></Link></li>
                                            <li><Link to="index.html#"><img src="img/payment/3.png" alt=""/></Link></li>
                                            <li><Link to="index.html#"><img src="img/payment/4.png" alt=""/></Link></li>
                                            </ul>
                                            </div>
                                        { //<!-- End payment --> 
                            }
                                            </div>
                                            <div className="col-sm-6">
                                        { //<!-- Start copyright text --> 
                            }
                                            <div className="copyright-text">
                                            <p>© 2024 AdventureGene.com All rights reserved.</p>
                                            </div>
                                        { //<!-- End copyright text --> 
                            }
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                        { //<!-- End Copyright Area --> 
                            }

                                            </div>

                                            </>
                                            )
                                        }