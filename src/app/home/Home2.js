export default function Home2() {
    return (
        <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <!-- Start Preloader -->
        <div className="preloader-wrap">
            <div className="cube-wrapper">
                <div className="cube-folding">
                    <span className="leaf1"></span>
                    <span className="leaf2"></span>
                    <span className="leaf3"></span>
                    <span className="leaf4"></span>
                </div>
                <span className="loading" data-name="Loading">Loading</span>
            </div>
        </div>
        <!-- End Preloader -->
        <!-- Start Wrapper -->
        <div className="wrapper">
            <!-- Start Header -->
            <header id="header" className="header-area absulate-header">
                <div className="container">
                    <!-- Start header top -->
                    <div className="row">
                        <div className="col-lg-6 col-sm-3">
                            <div className="header-top-left">
                                <ul>
                                    <li className="has-dropdown"><a href="index-2.html#">USD</a>
                                        <ul>
                                            <li><a href="index-2.html#">URO</a></li>
                                            <li><a href="index-2.html#">FJD</a></li>
                                            <li><a href="index-2.html#">GBP</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown"><a href="index-2.html#">English</a>
                                        <ul>
                                            <li><a href="index-2.html#">Arabic</a></li>
                                            <li><a href="index-2.html#">French</a></li>
                                            <li><a href="index-2.html#">Bangla</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-9">
                            <!-- Header top contact -->
                            <div className="header-top-contact">
                                <ul>
                                    <li><a href="mailto:yourname@email.com"><i className="fal fa-envelope"></i>support@adventuregene.com</a>
                                    </li>
                                    <li><a href="tel:+008012345678"><i className="fal fa-phone-alt"></i>012 345 6789</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- Start header top -->
                </div>
                <div className="navigation-area">
                    <div className="container">
                        <div className="row navigation-bg">
                            <div className="col-lg-2 col-sm-4 col-4">
                                <!-- Start site logo -->
                                <div className="site-logo">
                                    <a href="index.html"><img src="img/logo-3.png" alt="GENE"/></a>
                                </div>
                                <!-- End site logo -->
                            </div>
                            <div className="col-lg-8 col-sm-4 col-2 order-two">
                                <!-- Start Navigation -->
                                <div className="main-menu-wrap">
                                    <nav className="gene-nav">
                                        <ul className="menu">
                                            <li className="has-dropdown"><a href="javascript:void(0)">Home</a>
                                                <ul><!-- Dropdown Items -->
                                                    <li><a href="index.html">Homepage V1</a></li>
                                                    <li><a href="index-2.html">Homepage V2</a></li>
                                                    <li><a href="index-3.html">Homepage V3</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown"><a href="javascript:void(0)">Adventures</a>
                                                <ul><!-- Dropdown Items -->
                                                    <li><a href="adventure-1.html">Adventure List One</a></li>
                                                    <li><a href="adventure-2.html">Adventure List Two</a></li>
                                                    <li><a href="adventure-3.html">Adventure List Three</a></li>
                                                    <li><a href="adventure-detail-1.html">Adventure Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown"><a href="javascript:void(0)">Blog</a>
                                                <ul><!-- Dropdown Items -->
                                                    <li><a href="blog-1.html">Blog List One</a></li>
                                                    <li><a href="blog-2.html">Blog List Two</a></li>
                                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown"><a href="javascript:void(0)">Other Pages</a>
                                                <ul><!-- Dropdown Items -->
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="login.html">Log In</a></li>
                                                    <li><a href="signup.html">Sign Up</a></li>
                                                    <li><a href="404.html">Error</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown"><a href="javascript:void(0)">Cart Pages</a>
                                                <ul><!-- Dropdown Items -->
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="check-out.html">Check Out</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <!-- Mobile Menu Active here. Don't Remove it -->
                                <div className="mobile-menu-area"></div>
                                <!-- End Navigation -->
                            </div>
                            <div className="col-lg-2 col-sm-4 col-6 order-one">
                                <!-- Start login and cart -->
                                <div className="login-cart">
                                    <ul>
                                        <li><a href="index-2.html#"><i className="far fa-user"></i>LOGIN</a></li>
                                        <li className="cart-mega">
                                            <!-- Header Cart Start -->
                                            <a href="index-2.html#ec-side-cart"
                                               className="ec-header-btn ec-side-toggle">
                                                <div className="header-icon"><i
                                                    className="fal fa-shopping-basket"></i><small>(0)</small></div>
                                            </a>
                                            <!-- Header Cart End -->

                                        </li>
                                    </ul>
                                </div>
                                <!-- End login and cart -->
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- End Header -->
            <!-- Start Slider Area -->
            <section className="slider-area">
                <div id="welcome-slide" className="slide-controls owl-carousel">
                    <!-- Start Single Slide -->
                    <div className="single-slide overlay-bg-2">
                        <div className="slide-thumb shape-2">
                            <img src="img/slider/slide-4.jpg" alt=""/>
                            <!-- Start Slide Content -->
                            <div className="slide-content">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 col-sm-12">
                                            <!-- Start Slide content wrap -->
                                            <div className="slide-content-area">
                                                <!-- Start Single slide content	-->
                                                <div className="single-slide-content text-center">
                                                    <div className="content-text">
                                                        <h1>Gear up for <span></span>Camping & Hiking</h1>
                                                        <h2>Discover and book the best <span></span>Place
                                                            for <strong>camping</strong> and <strong>Hiking.</strong>
                                                        </h2>
                                                    </div>
                                                    <div className="find-adventure-form text-center">
                                                        <form action="index-2.html#">
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
                                                            <input className="btn btn-theme blue" type="submit"
                                                                   value="Find Your Adventure"/>
                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- End Single slide content	-->
                                            </div>
                                            <!-- End Slide content wrap-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Slide Content -->
                        </div>
                    </div>
                    <!-- End Single Slide -->
                    <!-- Start Single Slide -->
                    <div className="single-slide overlay-bg-2">
                        <div className="slide-thumb shape-2">
                            <img src="img/slider/slide-2.jpg" alt=""/>
                            <!-- Start Slide Content -->
                            <div className="slide-content">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 col-sm-12">
                                            <!-- Start Slide content wrap -->
                                            <div className="slide-content-area">
                                                <!-- Start Single slide content	-->
                                                <div className="single-slide-content text-center">
                                                    <div className="content-text">
                                                        <h1>Gear up for <span></span>Camping & Hiking</h1>
                                                        <h2>Discover and book the best <span></span>Place
                                                            for <strong>camping</strong> and <strong>Hiking.</strong>
                                                        </h2>
                                                    </div>
                                                    <div className="find-adventure-form text-center">
                                                        <form action="index-2.html#">
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
                                                            <input className="btn btn-theme blue" type="submit"
                                                                   value="Find Your Adventure"/>
                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- End Single slide content	-->
                                            </div>
                                            <!-- End Slide content wrap-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Slide Content -->
                        </div>
                    </div>
                    <!-- End Single Slide -->
                    <!-- Start Single Slide -->
                    <div className="single-slide overlay-bg-2">
                        <div className="slide-thumb shape-2">
                            <img src="img/slider/slide-1.jpg" alt=""/>
                            <!-- Start Slide Content -->
                            <div className="slide-content">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 col-sm-12">
                                            <!-- Start Slide content wrap -->
                                            <div className="slide-content-area">
                                                <!-- Start Single slide content	-->
                                                <div className="single-slide-content text-center">
                                                    <div className="content-text">
                                                        <h1>Gear up for <span></span>Camping & Hiking</h1>
                                                        <h2>Discover and book the best <span></span>Place
                                                            for <strong>camping</strong> and <strong>Hiking.</strong>
                                                        </h2>
                                                    </div>
                                                    <div className="find-adventure-form text-center">
                                                        <form action="index-2.html#">
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
                                                            <input className="btn btn-theme blue" type="submit"
                                                                   value="Find Your Adventure"/>
                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- End Single slide content	-->
                                            </div>
                                            <!-- End Slide content wrap-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Slide Content -->
                        </div>
                    </div>
                    <!-- End Single Slide -->
                </div>
            </section>
            <!-- End Slider Area -->
            <!-- Start About Area -->
            <div className="about-area pt-90">
                <div className="about-bg style-2">
                    <img src="img/about/2.png" alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <!-- Start section title -->
                            <div className="section-title">
                                <p className="title">WHO ARE WE?</p>
                                <h2>It's Time To Hit The New Path To Exploration.</h2>
                            </div>
                            <!-- End section title -->
                            <div className="about-content">
                                <p>All adventure freaks! Will ya' like to blow down by the beauty of nature amidst sea,
                                    land and mountains in India? Aye! Then ahead, Adventuren is here to immerse yourself
                                    in an outdoor adventure filled with stunning contrasts: intimate and communal,
                                    purposeful, raw and rich.</p>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <!-- Start single quick icon -->
                                    <div className="single-quick-icon style-2 text-center">
                                        <div className="quick-icon-content">
                                            <img src="img/icon/7.png" alt=""/>
                                            <p>adventure camping</p>
                                        </div>
                                    </div>
                                    <!-- End single quick icon -->
                                </div>
                                <div className="col-sm-4">
                                    <!-- Start single quick icon -->
                                    <div className="single-quick-icon style-2 text-center">
                                        <div className="quick-icon-content">
                                            <img src="img/icon/8.png" alt=""/>
                                            <p>Backpacking</p>
                                        </div>
                                    </div>
                                    <!-- End single quick icon -->
                                </div>
                                <div className="col-sm-4">
                                    <!-- Start single quick icon -->
                                    <div className="single-quick-icon style-2 text-center">
                                        <div className="quick-icon-content">
                                            <img src="img/icon/9.png" alt=""/>
                                            <p>caravan camping</p>
                                        </div>
                                    </div>
                                    <!-- End single quick icon -->
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <!-- Start single quick icon -->
                                    <div className="single-quick-icon style-2 text-center">
                                        <div className="quick-icon-content">
                                            <img src="img/icon/10.png" alt=""/>
                                            <p>day hiking</p>
                                        </div>
                                    </div>
                                    <!-- End single quick icon -->
                                </div>
                                <div className="col-sm-4">
                                    <!-- Start single quick icon -->
                                    <div className="single-quick-icon style-2 text-center">
                                        <div className="quick-icon-content">
                                            <img src="img/icon/11.png" alt=""/>
                                            <p>Mountain Bike</p>
                                        </div>
                                    </div>
                                    <!-- End single quick icon -->
                                </div>
                                <div className="col-sm-4">
                                    <!-- Start single quick icon -->
                                    <div className="single-quick-icon style-2 text-center">
                                        <div className="quick-icon-content">
                                            <img src="img/icon/12.png" alt=""/>
                                            <p>Winter Camping</p>
                                        </div>
                                    </div>
                                    <!-- End single quick icon -->
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="index-2.html#" className="btn btn-theme blue mb-30">Get To Know Our
                                        Values</a>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>

            </div>
            <!-- End About Area -->
            <!-- Start Camping Area -->
            <div className="camping-hi-area pt-85 pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <p className="title">Browse by Camping & Hiking</p>
                                <h2>Inspiration and guidance for <span></span>wherever your trail may lead.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <!-- Start single camp -->
                            <div className="single-camp-hi">
                                <img src="img/camp/1.jpg" alt=""/>
                                <div className="camp-hi-content">
                                    <a href="index-2.html#"><h4>Adventure Camping</h4></a>
                                    <p>112 Trips</p>
                                </div>
                            </div>
                            <!-- End single camp -->
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <!-- Start single camp -->
                            <div className="single-camp-hi">
                                <img src="img/camp/2.jpg" alt=""/>
                                <div className="camp-hi-content">
                                    <a href="index-2.html#"><h4>Winter Camping</h4></a>
                                    <p>30 Trips</p>
                                </div>
                            </div>
                            <!-- End single camp -->
                            <!-- Start single camp -->
                            <div className="single-camp-hi">
                                <img src="img/camp/3.jpg" alt=""/>
                                <div className="camp-hi-content">
                                    <a href="index-2.html#"><h4>Caravan Camping</h4></a>
                                    <p>45 Trips</p>
                                </div>
                            </div>
                            <!-- End single camp -->
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <!-- Start single camp -->
                            <div className="single-camp-hi">
                                <img src="img/camp/4.jpg" alt=""/>
                                <div className="camp-hi-content">
                                    <a href="index-2.html#"><h4>Hiking Focused</h4></a>
                                    <p>145 Trips</p>
                                </div>
                            </div>
                            <!-- End single camp -->
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <!-- Start single camp -->
                            <div className="single-camp-hi">
                                <img src="img/camp/5.jpg" alt=""/>
                                <div className="camp-hi-content">
                                    <a href="index-2.html#"><h4>Hiking Trails</h4></a>
                                    <p>45 Trips</p>
                                </div>
                            </div>
                            <!-- End single camp -->
                            <!-- Start single camp -->
                            <div className="single-camp-hi">
                                <img src="img/camp/6.jpg" alt=""/>
                                <div className="camp-hi-content">
                                    <a href="index-2.html#"><h4>Day Hiking</h4></a>
                                    <p>345 Trips</p>
                                </div>
                            </div>
                            <!-- End single camp -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Camping Area -->
            <!-- Start Fun Facts Area -->
            <div className="funfact-area style-2 pt-170 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <!-- Start section title -->
                            <div className="section-title white text-center">
                                <p className="title">Interesting Facts</p>
                                <h2>Experiences Away <span></span> From Crowd</h2>
                            </div>
                            <!-- End section title -->
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-sm-4">
                            <!-- Start single fact -->
                            <div className="single-fact text-center">
                                <div className="fact-info">
                                    <img src="img/funfact/7.png" alt=""/>
                                    <span className="counter">10258</span><span>+</span>
                                    <p>Followers</p>
                                </div>
                            </div>
                            <!-- Start single fact -->
                        </div>
                        <div className="col-lg-2 col-sm-4">
                            <!-- Start single fact -->
                            <div className="single-fact text-center">
                                <div className="fact-info">
                                    <img src="img/funfact/8.png" alt=""/>
                                    <span className="counter">589</span><span>+</span>
                                    <p>Campsites</p>
                                </div>
                            </div>
                            <!-- Start single fact -->
                        </div>
                        <div className="col-lg-2 col-sm-4">
                            <!-- Start single fact -->
                            <div className="single-fact text-center">
                                <div className="fact-info">
                                    <img src="img/funfact/9.png" alt=""/>
                                    <span className="counter">548</span><span>M</span>
                                    <p>DISTANCE COVER</p>
                                </div>
                            </div>
                            <!-- Start single fact -->
                        </div>
                        <div className="col-lg-2 col-sm-4">
                            <!-- Start single fact -->
                            <div className="single-fact text-center">
                                <div className="fact-info">
                                    <img src="img/funfact/10.png" alt=""/>
                                    <span className="counter">3258</span><span>+</span>
                                    <p>Bonfire</p>
                                </div>
                            </div>
                            <!-- Start single fact -->
                        </div>
                        <div className="col-lg-2 col-sm-4">
                            <!-- Start single fact -->
                            <div className="single-fact text-center">
                                <div className="fact-info">
                                    <img src="img/funfact/11.png" alt=""/>
                                    <span className="counter">158</span><span>M</span>
                                    <p>DAYS SPENT</p>
                                </div>
                            </div>
                            <!-- Start single fact -->
                        </div>
                        <div className="col-lg-2 col-sm-4">
                            <!-- Start single fact -->
                            <div className="single-fact text-center">
                                <div className="fact-info">
                                    <img src="img/funfact/12.png" alt=""/>
                                    <span className="counter">1058</span><span>M</span>
                                    <p>BBQ Parties</p>
                                </div>
                            </div>
                            <!-- Start single fact -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Fun Facts Area -->
            <!-- Start Selling Tips Area -->
            <div className="selling-tips-area pt-115 pb-85">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <p className="title">BEST SELLING TRIPS</p>
                                <h2>Top Rated Experiences<span></span> On Adventuren</h2>
                                <p>It’s time to pack your bags and get ready for your next adventure. Check out the
                                    tours we’re running in August and September, and if you see something that’s up your
                                    alley, book away! We’re just as excited as you to explore our big, beautiful
                                    world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <!-- start single adventure -->
                            <div className="single-adventure">
                                <img src="img/adventure/9.jpg" alt="adventure"/>
                                <div className="adventure-content">
                                    <p className="tour">5 DAY TOUR</p>
                                    <a href="index-2.html#"><h6>Hiking in Namibia</h6></a>
                                    <p className="price">$1574 <small>Per Person</small></p>
                                </div>
                            </div>
                            <!-- end single adventure -->
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <!-- start single adventure -->
                            <div className="single-adventure">
                                <img src="img/adventure/10.jpg" alt="adventure"/>
                                <div className="adventure-content">
                                    <p className="tour">5 DAY TOUR</p>
                                    <a href="index-2.html#"><h6>Hike the Pyrenees </h6></a>
                                    <p className="price">$2564 <small>Per Person</small></p>
                                </div>
                            </div>
                            <!-- end single adventure -->
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <!-- start single adventure -->
                            <div className="single-adventure">
                                <img src="img/adventure/11.jpg" alt="adventure"/>
                                <div className="adventure-content">
                                    <p className="tour">5 DAY TOUR</p>
                                    <a href="index-2.html#"><h6>Hike and Canyon in Oman</h6></a>
                                    <p className="price">$2564 <small>Per Person</small></p>
                                </div>
                            </div>
                            <!-- end single adventure -->
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <!-- start single adventure -->
                            <div className="single-adventure">
                                <img src="img/adventure/12.jpg" alt="adventure"/>
                                <div className="adventure-content">
                                    <p className="tour">5 DAY TOUR</p>
                                    <a href="index-2.html#"><h6>Adventure in Norway</h6></a>
                                    <p className="price">$1574 <small>Per Person</small></p>
                                </div>
                            </div>
                            <!-- end single adventure -->
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <!-- start single adventure -->
                            <div className="single-adventure">
                                <img src="img/adventure/13.jpg" alt="adventure"/>
                                <div className="adventure-content">
                                    <p className="tour">5 DAY TOUR</p>
                                    <a href="index-2.html#"><h6>South Island Adventure</h6></a>
                                    <p className="price">$1950 <small>Per Person</small></p>
                                </div>
                            </div>
                            <!-- end single adventure -->
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <!-- start single adventure -->
                            <div className="single-adventure">
                                <img src="img/adventure/14.jpg" alt="adventure"/>
                                <div className="adventure-content">
                                    <p className="tour">5 DAY TOUR</p>
                                    <a href="index-2.html#"><h6>Everest Base Camp Trek</h6></a>
                                    <p className="price">$1587 <small>Per Person</small></p>
                                </div>
                            </div>
                            <!-- end single adventure -->
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <!-- start single adventure -->
                            <div className="single-adventure">
                                <img src="img/adventure/15.jpg" alt="adventure"/>
                                <div className="adventure-content">
                                    <p className="tour">5 DAY TOUR</p>
                                    <a href="index-2.html#"><h6>South Island Explorer</h6></a>
                                    <p className="price">$1236 <small>Per Person</small></p>
                                </div>
                            </div>
                            <!-- end single adventure -->
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <!-- start single adventure -->
                            <div className="single-adventure">
                                <img src="img/adventure/7.jpg" alt="adventure"/>
                                <div className="adventure-content">
                                    <p className="tour">5 DAY TOUR</p>
                                    <a href="index-2.html#"><h6>ruise Tours</h6></a>
                                    <p className="price">$2548 <small>Per Person</small></p>
                                </div>
                            </div>
                            <!-- end single adventure -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Selling Tips Area -->
            <!-- Start Subscribe Area -->
            <div className="subscribe-area subscribe-no-image style-2 pb-65">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <!-- Start section title -->
                            <div className="section-title text-center">
                                <p className="title">SIGN UP FOR OUR NEWSLETTER</p>
                                <h2>Sign up for travel deals,<span></span> news and inspiration</h2>
                            </div>
                            <!-- End section title -->
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="subscribe-thumb">
                                <img src="img/bg/subscribe2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <!-- start subscribe -->
                            <p className="text-center mb-30">Join our community of over 300,000 global readers who
                                receive emails filled with news, promotions, and other good stuff from G Adventures.</p>
                            <form action="index-2.html#" method="post" className="subscribe-form">
                                <input name="email" className="widget-input"
                                       placeholder="Enter your email address ......" type="email"/>
                                <button type="submit" className="widget-sbtn">Subscribe Now</button>
                            </form>
                            <!-- end subscribe -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Subscribe Area -->
            <!-- Start Home Blog Area -->
            <div className="home-blog-area style-2 pt-95 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <!-- Start section title -->
                            <div className="section-title text-center">
                                <p className="title">From The Blog</p>
                                <h2>Award-winning stories, and opinions<span></span> to fill your life with adventure
                                </h2>
                            </div>
                            <!-- End section title -->
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <!-- Start single post blog -->
                            <div className="single-post-blog style-2">
                                <div className="post-thumbnail">
                                    <img src="img/post/5.jpg" alt=""/>
                                </div>
                                <div className="post-list-view">
                                    <ul>
                                        <li>October 13, 2020</li>
                                        <li><i className="far fa-eye"></i> 35</li>
                                        <li><i className="fas fa-comment"></i> 37</li>
                                    </ul>
                                </div>
                                <div className="post-blog-content">
                                    <a href="index-2.html#"><h4>Five steps to picking your next destination</h4></a>
                                    <a href="index-2.html#" className="more">Read More <i
                                        className="fal fa-angle-right"></i></a>
                                </div>
                            </div>
                            <!-- End single post blog -->
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <!-- Start single post blog -->
                            <div className="single-post-blog style-2">
                                <div className="post-thumbnail">
                                    <img src="img/post/6.jpg" alt=""/>
                                </div>
                                <div className="post-list-view">
                                    <ul>
                                        <li>October 13, 2020</li>
                                        <li><i className="far fa-eye"></i> 35</li>
                                        <li><i className="fas fa-comment"></i> 37</li>
                                    </ul>
                                </div>
                                <div className="post-blog-content">
                                    <a href="index-2.html#"><h4>Antarctica camping: What's it you like?</h4></a>
                                    <a href="index-2.html#" className="more">Read More <i
                                        className="fal fa-angle-right"></i></a>
                                </div>
                            </div>
                            <!-- End single post blog -->
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <!-- Start single post blog -->
                            <div className="single-post-blog style-2">
                                <div className="post-thumbnail">
                                    <img src="img/post/7.jpg" alt=""/>
                                </div>
                                <div className="post-list-view">
                                    <ul>
                                        <li>October 13, 2020</li>
                                        <li><i className="far fa-eye"></i> 35</li>
                                        <li><i className="fas fa-comment"></i> 37</li>
                                    </ul>
                                </div>
                                <div className="post-blog-content">
                                    <a href="index-2.html#"><h4>Road Reads: 5 books to inspire trips to Australia</h4>
                                    </a>
                                    <a href="index-2.html#" className="more">Read More <i
                                        className="fal fa-angle-right"></i></a>
                                </div>
                            </div>
                            <!-- End single post blog -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Home Blog Area -->
            <!-- Start Guide Area -->
            <div className="guide-area pt-115 pb-85">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <!-- Start section title -->
                            <div className="section-title text-center">
                                <p className="title">Our Guides & Staff</p>
                                <h2>A full team of experts with you before,<span></span> during and after the journey
                                </h2>
                            </div>
                            <!-- End section title -->
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <!-- Start single guide -->
                            <div className="single-guide">
                                <div className="guide-thumb">
                                    <img src="img/guide/1.jpg" alt=""/>
                                    <div className="guide-content">
                                        <p className="title">Adventure Manager</p>
                                        <a href="index-2.html#"><h4>Chris Kearney</h4></a>
                                        <ul>
                                            <li><a href="index-2.html#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                        <div className="about-guide">
                                            <p>Tasked with finding the freshest and most sustainable adventures around
                                                the world, either from his home in Brighton or wherever in Europe his
                                                campervan happens to be parked up.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End single guide -->
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <!-- Start single guide -->
                            <div className="single-guide">
                                <div className="guide-thumb">
                                    <img src="img/guide/2.jpg" alt=""/>
                                    <div className="guide-content">
                                        <p className="title">Customer Experience Manager</p>
                                        <a href="index-2.html#"><h4>Megan Devenish</h4></a>
                                        <ul>
                                            <li><a href="index-2.html#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                        <div className="about-guide">
                                            <p>Tasked with finding the freshest and most sustainable adventures around
                                                the world, either from his home in Brighton or wherever in Europe his
                                                campervan happens to be parked up.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End single guide -->
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <!-- Start single guide -->
                            <div className="single-guide">
                                <div className="guide-thumb">
                                    <img src="img/guide/3.jpg" alt=""/>
                                    <div className="guide-content">
                                        <p className="title">Travel Specialist</p>
                                        <a href="index-2.html#"><h4>Dan Bloomfield</h4></a>
                                        <ul>
                                            <li><a href="index-2.html#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="index-2.html#"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                        <div className="about-guide">
                                            <p>Tasked with finding the freshest and most sustainable adventures around
                                                the world, either from his home in Brighton or wherever in Europe his
                                                campervan happens to be parked up.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End single guide -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Guide Area -->
            <!-- Start Partner Area -->
            <div className="partner-area pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <!-- Start section title -->
                            <div className="section-title text-center">
                                <p className="title">Our Partners</p>
                                <h2>We team up with the best to give you <span></span> an unmatchable experience</h2>
                            </div>
                            <!-- End section title -->
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="partner-wrap owl-carousel">
                                <!-- Start single partner -->
                                <div className="single-partner">
                                    <img className="bottom" src="img/partner/1.jpg" alt=""/>
                                    <img className="top" src="img/partner/1-1.jpg" alt=""/>
                                </div>
                                <!-- End single partner -->
                                <!-- Start single partner -->
                                <div className="single-partner">
                                    <img className="bottom" src="img/partner/2.jpg" alt=""/>
                                    <img className="top" src="img/partner/2-2.jpg" alt=""/>
                                </div>
                                <!-- End single partner -->
                                <!-- Start single partner -->
                                <div className="single-partner">
                                    <img className="bottom" src="img/partner/3.jpg" alt=""/>
                                    <img className="top" src="img/partner/3-3.jpg" alt=""/>
                                </div>
                                <!-- End single partner -->
                                <!-- Start single partner -->
                                <div className="single-partner">
                                    <img className="bottom" src="img/partner/4.jpg" alt=""/>
                                    <img className="top" src="img/partner/4-4.jpg" alt=""/>
                                </div>
                                <!-- End single partner -->
                                <!-- Start single partner -->
                                <div className="single-partner">
                                    <img className="bottom" src="img/partner/5.jpg" alt=""/>
                                    <img className="top" src="img/partner/5-5.jpg" alt=""/>
                                </div>
                                <!-- End single partner -->
                                <!-- Start single partner -->
                                <div className="single-partner">
                                    <img className="bottom" src="img/partner/6.jpg" alt=""/>
                                    <img className="top" src="img/partner/6-6.jpg" alt=""/>
                                </div>
                                <!-- End single partner -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Partner Area -->
            <!-- Start Footer Area -->
            <footer className="footer-area style-2 pt-115">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <!-- start contact widget -->
                            <div className="widget contact-widget">
                                <h3>About AdventureGene</h3>
                                <p>Adventure is all about having the freedom to follow your curiosity and discovering
                                    the unknown. No matter the Travel Style, our tours balance well-planned itineraries
                                    with the flexibility to do your own thing and explore a bit on your own.</p>
                                <ul>
                                    <li><a href="index-2.html#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="index-2.html#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="index-2.html#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="index-2.html#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="index-2.html#"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                            <!-- end contact widget -->
                        </div>
                        <div className="col-lg-2 col-sm-3">
                            <!-- start quick link widget -->
                            <div className="widget quick-link-widget">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>About Us</a></li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Why Travel With
                                        Us?</a></li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Guides & Staff</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Contact Us</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>We Are Hiring</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Our Core
                                        Values</a></li>
                                </ul>
                            </div>
                            <!-- end quick link widget -->
                        </div>
                        <div className="col-lg-2 col-sm-3">
                            <!-- start quick link widget -->
                            <div className="widget quick-link-categories">
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Adventure</a></li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Hiking & Trekking</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Cycling Tours</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Family Tours</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Wildlife Tours</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Polar Tours</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Food Tours</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- end quick link widget -->
                        </div>
                        <div className="col-lg-2 col-sm-4">
                            <!-- start quick link widget -->
                            <div className="widget quick-destinations">
                                <h3>Destinations</h3>
                                <ul>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>African
                                        Safaris</a></li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Alaska &
                                        Canada</a></li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>South America</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Middle East</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Asia</a></li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>Europe</a></li>
                                    <li><a href="index-2.html#"><i className="fal fa-angle-right"></i>South America</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- end quick link widget -->
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <!-- start contact us widget -->
                            <div className="widget contact-us">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li><a href="index-2.html#"><i className="fal fa-paper-plane"></i>Level 1, 14-16
                                        Church Street Queenstown, New Zealand</a></li>
                                    <li><a href="index-2.html#"><i className="fal fa-envelope"></i>support@adventuregene.com</a>
                                    </li>
                                    <li><a href="index-2.html#"><i className="fal fa-phone-alt"></i>+ 001 800 661
                                        9073</a></li>
                                </ul>
                            </div>
                            <!-- end contact us widget -->
                        </div>
                    </div>
                </div>
            </footer>
            <!-- Start Copyright Area -->
            <div className="copy-right-area style-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <!-- Start payment -->
                            <div className="copy-payment">
                                <ul>
                                    <li><a href="index-2.html#"><img src="img/payment/1.png" alt=""/></a></li>
                                    <li><a href="index-2.html#"><img src="img/payment/2.png" alt=""/></a></li>
                                    <li><a href="index-2.html#"><img src="img/payment/3.png" alt=""/></a></li>
                                    <li><a href="index-2.html#"><img src="img/payment/4.png" alt=""/></a></li>
                                </ul>
                            </div>
                            <!-- End payment -->
                        </div>
                        <div className="col-sm-6">
                            <!-- Start copyright text -->
                            <div className="copyright-text">
                                <p>© 2024 AdventureGene.com All rights reserved.</p>
                            </div>
                            <!-- End copyright text -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Copyright Area -->
            <!-- End Footer Area -->
        </div>

        </body>
    )
}