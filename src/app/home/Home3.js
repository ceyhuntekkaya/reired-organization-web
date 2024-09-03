import {Link} from "react-router-dom";

export default function Home3() {
    return (
        <>

            { //<!-- Start Wrapper -->
            }
            <div className="wrapper">
                { //<!-- Start Header -->
                }
                <header id="header" className="header-area style-2 absulate-header">
                    <div className="container">
                        { //<!-- Start header top -->
                        }
                        <div className="row">
                            <div className="col-lg-6 col-sm-4">
                                <div className="header-top-left">
                                    <ul>
                                        <li className="has-dropdown"><Link to="index-3.html#">USD</Link>
                                            <ul>
                                                <li><Link to="index-3.html#">URO</Link></li>
                                                <li><Link to="index-3.html#">FJD</Link></li>
                                                <li><Link to="index-3.html#">GBP</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown"><Link to="index-3.html#">English</Link>
                                            <ul>
                                                <li><Link to="index-3.html#">Arabic</Link></li>
                                                <li><Link to="index-3.html#">French</Link></li>
                                                <li><Link to="index-3.html#">Bangla</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-8">
                                { //<!-- Header top contact -->
                                }
                                <div className="header-top-contact">
                                    <ul>
                                        <li><Link to="mailto:yourname@email.com"><i className="fal fa-envelope"></i>support@adventuregene.com</Link>
                                        </li>
                                        <li><Link to="tel:+008012345678"><i className="fal fa-phone-alt"></i>012 345
                                            6789</Link>
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
                            <div className="row">
                                <div className="col-lg-2 col-sm-6 col-6">
                                    { //<!-- Start site logo -->
                                    }
                                    <div className="site-logo">
                                        <Link to="index.html"><img src="img/logo2.png" alt="GENE"/></Link>
                                    </div>
                                    { //<!-- End site logo -->
                                    }
                                </div>
                                <div className="col-lg-10 col-sm-6 col-6">
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
                                                <li className="has-dropdown"><Link
                                                    to="javascript:void(0)">Adventures</Link>
                                                    <ul>{ //<!-- Dropdown Items -->
                                                    }
                                                        <li><Link to="adventure-1.html">Adventure List One</Link></li>
                                                        <li><Link to="adventure-2.html">Adventure List Two</Link></li>
                                                        <li><Link to="adventure-3.html">Adventure List Three</Link></li>
                                                        <li><Link to="adventure-detail-1.html">Adventure Details</Link>
                                                        </li>
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
                                                <li className="has-dropdown"><Link to="javascript:void(0)">Other
                                                    Pages</Link>
                                                    <ul>{ //<!-- Dropdown Items -->
                                                    }
                                                        <li><Link to="about.html">About Us</Link></li>
                                                        <li><Link to="login.html">Log In</Link></li>
                                                        <li><Link to="signup.html">Sign Up</Link></li>
                                                        <li><Link to="404.html">Error</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown"><Link to="javascript:void(0)">Cart
                                                    Pages</Link>
                                                    <ul>{ //<!-- Dropdown Items -->
                                                    }
                                                        <li><Link to="cart.html">Cart</Link></li>
                                                        <li><Link to="check-out.html">Check Out</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="contact.html">Contact</Link></li>
                                                <li className="icon"><Link to="login.html"><i
                                                    className="far fa-user"></i>LOGIN</Link>
                                                </li>
                                                <li className="icon"><Link to="cart.html"> <i
                                                    className="fal fa-shopping-basket"></i><small>(2)</small></Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    { //<!-- Mobile Menu Active here. Don't Remove it -->
                                    }
                                    <div className="mobile-menu-area"></div>
                                    { //<!-- End Navigation -->
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
                        <div className="single-slide">
                            <div className="slide-thumb shape-3">
                                <img src="img/slider/slide-3.jpg" alt=""/>
                                { //<!-- Start Slide Content -->
                                }
                                <div className="slide-content">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-10 col-sm-12">
                                                { //<!-- Start Slide content wrap -->
                                                    // }
                                                }
                                                <div className="slide-content-area">
                                                    { //<!-- Start Single slide content	-->
                                                    }
                                                    <div className="single-slide-content text-center">
                                                        <div className="content-text">
                                                            <h1>Enjoy A Beach Day<span></span> Paradise Awaits You!</h1>
                                                            <h2>discover the
                                                                best <strong>beaches</strong> And<span></span>enjoy
                                                                colorful <strong>underwater life</strong></h2>
                                                        </div>
                                                        <div className="find-adventure-form text-center">
                                                            <form action="index-3.html#">
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
                                                                <input className="btn btn-theme blue-2" type="submit"
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
                        <div className="single-slide">
                            <div className="slide-thumb shape-3">
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
                                                                <h1>Enjoy A Beach Day<span></span> Paradise Awaits You!
                                                                </h1>
                                                                <h2>discover the
                                                                    best <strong>beaches</strong> And<span></span>enjoy
                                                                    colorful <strong>underwater life</strong></h2>
                                                            </div>
                                                            <div className="find-adventure-form text-center">
                                                                <form action="index-3.html#">
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
                                                                    <input className="btn btn-theme blue-2"
                                                                           type="submit"
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
                            <div className="single-slide">
                                <div className="slide-thumb shape-3">
                                    <img src="img/slider/slide-4.jpg" alt=""/>
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
                                                                    <h1>Enjoy A Beach Day<span></span> Paradise Awaits
                                                                        You!</h1>
                                                                    <h2>discover the
                                                                        best <strong>beaches</strong> And<span></span>enjoy
                                                                        colorful <strong>underwater life</strong></h2>
                                                                </div>
                                                                <div className="find-adventure-form text-center">
                                                                    <form action="index-3.html#">
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
                                                                        <input className="btn btn-theme blue-2"
                                                                               type="submit"
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
                                                        { //<!-- Start About Area -->
                                                        }
                                                            <div className="about-area pt-80">
                                                            <div className="about-bg style-3">
                                                            <img src="img/about/2.jpg" alt=""/>
                                                            </div>
                                                            <div className="container">
                                                            <div className="row">
                                                            <div className="col"></div>
                                                            <div className="col-lg-8">
                                                            <div className="row">
                                                            <div className="col-lg-6">
                                                            <div className="row">
                                                            <div className="col-lg-6 col-sm-4">
                                                        { //<!-- Start single quick icon -->
                                                        }
                                                        <div className="single-quick-icon style-3 text-center">
                                                            <div className="quick-icon-content">
                                                                <img src="img/icon/13.png" alt=""/>
                                                                <p>Beach Parties</p>
                                                            </div>
                                                        </div>
                                                        { //<!-- End single quick icon -->
                                                        }
                                                    </div>
                                                    <div className="col-lg-6 col-sm-4">
                                                        { //<!-- Start single quick icon -->
                                                        }
                                                        <div className="single-quick-icon style-3 text-center">
                                                            <div className="quick-icon-content">
                                                                <img src="img/icon/14.png" alt=""/>
                                                                <p>beach Games</p>
                                                            </div>
                                                        </div>
                                                        { //<!-- End single quick icon -->
                                                        }
                                                    </div>
                                                    <div className="col-lg-6 col-sm-4">
                                                        { //<!-- Start single quick icon -->
                                                        }
                                                        <div className="single-quick-icon style-3 text-center">
                                                            <div className="quick-icon-content">
                                                                <img src="img/icon/15.png" alt=""/>
                                                                <p>Cruise Trip</p>
                                                            </div>
                                                        </div>
                                                        { //<!-- End single quick icon -->
                                                        }
                                                    </div>
                                                    <div className="col-lg-6 col-sm-4">
                                                        { //<!-- Start single quick icon -->
                                                        }
                                                        <div className="single-quick-icon style-3 text-center">
                                                            <div className="quick-icon-content">
                                                                <img src="img/icon/16.png" alt=""/>
                                                                <p>surfing</p>
                                                            </div>
                                                        </div>
                                                        { //<!-- End single quick icon -->
                                                        }
                                                    </div>
                                                    <div className="col-lg-6 col-sm-4">
                                                        { //<!-- Start single quick icon -->
                                                        }
                                                        <div className="single-quick-icon style-3 text-center">
                                                            <div className="quick-icon-content">
                                                                <img src="img/icon/17.png" alt=""/>
                                                                <p>Boat Fishing</p>
                                                            </div>
                                                        </div>
                                                        { //<!-- End single quick icon -->
                                                        }
                                                    </div>
                                                    <div className="col-lg-6 col-sm-4">
                                                        { //<!-- Start single quick icon -->
                                                        }
                                                        <div className="single-quick-icon style-3 text-center">
                                                            <div className="quick-icon-content">
                                                                <img src="img/icon/18.png" alt=""/>
                                                                <p>Drinks & Food</p>
                                                            </div>
                                                        </div>
                                                        { //<!-- End single quick icon -->
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                { //<!-- Start section title -->
                                                }
                                                <div className="section-title">
                                                    <p className="title">GET TO KNOW US</p>
                                                    <h2>WE’RE MAKING <span></span> WAVES TOGETHER</h2>
                                                </div>
                                                { //<!-- End section title -->
                                                }
                                                <div className="about-content">
                                                    <p>We are seasoned in this industry and are always vigilant to
                                                        recognize our
                                                        client’s expectations, and be on the look-out for new excursions
                                                        to
                                                        destinations previously inaccessible to the ordinary traveler.
                                                        We have trips
                                                        for everyone – from families & friends, to corporates &
                                                        individuals.</p>
                                                    <Link to="index-3.html#" className="btn btn-theme blue-2">Get To
                                                        Know Our
                                                        Values</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                        //<!-- End About Area -->

                        }
                        { //<!-- Start Camping Area -->
                        }
                        <div className="camping-hi-area pt-85 pb-70">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        { //<!-- Start section title -->
                                        }
                                        <div className="section-title text-center">
                                            <p className="title">Browse by Beach Tours</p>
                                            <h2>WE OFFER FUN FOR THE<span></span> WHOLE FAMILY IN PARADISE!</h2>
                                        </div>
                                        { //<!-- End section title -->
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        { //<!-- Start single camp -->
                                        }
                                        <div className="single-camp-hi">
                                            <img src="img/camp/7.jpg" alt=""/>
                                            <div className="camp-hi-content">
                                                <Link to="index-3.html#"><h4>Cruise Tour</h4></Link>
                                                <p>45 Trips</p>
                                            </div>
                                        </div>
                                        { //<!-- End single camp -->
                                        }
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        { //<!-- Start single camp -->
                                        }
                                        <div className="single-camp-hi">
                                            <img src="img/camp/8.jpg" alt=""/>
                                            <div className="camp-hi-content">
                                                <Link to="index-3.html#"><h4>Family Tours</h4></Link>
                                                <p>127 Trips</p>
                                            </div>
                                        </div>
                                        { //<!-- End single camp -->
                                        }
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        { //<!-- Start single camp -->
                                        }
                                        <div className="single-camp-hi">
                                            <img src="img/camp/9.jpg" alt=""/>
                                            <div className="camp-hi-content">
                                                <Link to="index-3.html#"><h4>Water Sports</h4></Link>
                                                <p>12 Games</p>
                                            </div>
                                        </div>
                                        { //<!-- End single camp -->
                                        }
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        { //<!-- Start single camp -->
                                        }
                                        <div className="single-camp-hi">
                                            <img src="img/camp/10.jpg" alt=""/>
                                            <div className="camp-hi-content">
                                                <Link to="index-3.html#"><h4>Beach Tours</h4></Link>
                                                <p>185 Trips</p>
                                            </div>
                                        </div>
                                        { //<!-- End single camp -->
                                        }
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        { //<!-- Start single camp -->
                                        }
                                        <div className="single-camp-hi">
                                            <img src="img/camp/11.jpg" alt=""/>
                                            <div className="camp-hi-content">
                                                <Link to="index-3.html#"><h4>Beach Parties</h4></Link>
                                                <p>145 Parties</p>
                                            </div>
                                        </div>
                                        { //<!-- End single camp -->
                                        }
                                    </div>
                                    <div className="col-sm-6">
                                        { //<!-- Start single camp -->
                                        }
                                        <div className="single-camp-hi">
                                            <img src="img/camp/12.jpg" alt=""/>
                                            <div className="camp-hi-content">
                                                <Link to="index-3.html#"><h4>Honeymoon Tour</h4></Link>
                                                <p>270 Trips</p>
                                            </div>
                                        </div>
                                        { //<!-- End single camp -->
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        { //<!-- End Camping Area -->
                        }
                        { //<!-- Start Fun Facts Area -->
                        }
                        <div className="funfact-area style-3 pb-120">
                            <div className="container">
                                <div className="row justify-content-center pt-85">
                                    <div className="col-lg-5">
                                        { //<!-- Start section title -->
                                        }
                                        <div className="section-title text-center">
                                            <p className="title">Interesting Facts</p>
                                            <h2>Experiences Away<span></span> From Crowd</h2>
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
                                                <img src="img/funfact/13.png" alt=""/>
                                                <span className="counter">10258</span><span>+</span>
                                                <p>Followers</p>
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
                                                <img src="img/funfact/14.png" alt=""/>
                                                <span className="counter">170</span><span>+</span>
                                                <p>Beach Tours</p>
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
                                                <img src="img/funfact/15.png" alt=""/>
                                                <span className="counter">15000</span><span>M</span>
                                                <p>DISTANCE COVERD</p>
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
                                                <img src="img/funfact/16.png" alt=""/>
                                                <span className="counter">330</span><span>+</span>
                                                <p>Cruise Parties</p>
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
                                                <img src="img/funfact/17.png" alt=""/>
                                                <span className="counter">2680</span><span>+</span>
                                                <p>Family Tours</p>
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
                                                <img src="img/funfact/18.png" alt=""/>
                                                <span className="counter">2680</span><span>+</span>
                                                <p>BBQ Parties</p>
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
                        <div className="selling-tips-area pt-85">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6 order-three">
                                        { //<!-- start single adventure -->
                                        }
                                        <div className="single-adventure">
                                            <img src="img/adventure/16.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                                <p className="tour">3 DAY TOUR</p>
                                                <Link to="index-3.html#"><h6>Camping At Beach</h6></Link>
                                                <p className="price">$580 <small>Per Person</small></p>
                                            </div>
                                        </div>
                                        { //<!-- end single adventure -->
                                        }
                                    </div>
                                    <div className="col-lg-3 col-sm-6 order-two">
                                        { //<!-- start single adventure -->
                                        }
                                        <div className="single-adventure">
                                            <img src="img/adventure/17.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                                <p className="tour">5 DAY TOUR</p>
                                                <Link to="index-3.html#"><h6>Dolphin Watching Day Trip</h6></Link>
                                                <p className="price">$2564 <small>Per Person</small></p>
                                            </div>
                                        </div>
                                        { //<!-- end single adventure -->
                                        }
                                    </div>
                                    <div className="col-lg-6 order-one">
                                        <div className="selling-tips-wrap">
                                            { //<!-- Start single selling tips -->
                                            }
                                            <div className="single-selling-tips section-title">
                                                <p className="title">BEST SELLING TRIPS</p>
                                                <h2>Top Rated Experiences<span></span> On Adventuren</h2>
                                                <p>It’s time to pack your bags and get ready for your next adventure.
                                                    Check out the
                                                    tours we’re running in August and September, and if you see
                                                    something that’s up
                                                    your alley, book away! We’re just as excited as you to explore our
                                                    big,
                                                    beautiful world.</p>
                                                <Link to="index-3.html#" className="btn btn-theme blue-2 mt-30">See all
                                                    the tours
                                                    we're running</Link>
                                            </div>
                                            { //<!-- End single selling tips -->
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure -->
                                        }
                                        <div className="single-adventure">
                                            <img src="img/adventure/18.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                                <p className="tour">5 DAY TOUR</p>
                                                <Link to="index-3.html#"><h6>Kayak And Wild Camp</h6></Link>
                                                <p className="price">$1500 <small>Per Person</small></p>
                                            </div>
                                        </div>
                                        { //<!-- end single adventure -->
                                        }
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure -->
                                        }
                                        <div className="single-adventure">
                                            <img src="img/adventure/19.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                                <p className="tour">5 DAY TOUR</p>
                                                <Link to="index-3.html#"><h6>Moroccan Surf Adventure</h6></Link>
                                                <p className="price">$874 <small>Per Person</small></p>
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
                                                <Link to="index-3.html#"><h6>ruise Tours</h6></Link>
                                                <p className="price">$526 <small>Per Person</small></p>
                                            </div>
                                        </div>
                                        { //<!-- end single adventure -->
                                        }
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        { //<!-- start single adventure -->
                                        }
                                        <div className="single-adventure">
                                            <img src="img/adventure/20.jpg" alt="adventure"/>
                                            <div className="adventure-content">
                                                <p className="tour">5 DAY TOUR</p>
                                                <Link to="index-3.html#"><h6>Private Yacht tour</h6></Link>
                                                <p className="price">$236 <small>Per Person</small></p>
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
                        <div className="subscribe-area style-3 pt-120 pb-315">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        { //<!-- Start section title -->
                                        }
                                        <div className="section-title text-center">
                                            <p className="title">SIGN UP FOR OUR NEWSLETTER</p>
                                            <h2>Sign up for travel deals,<span></span> news and inspiration</h2>
                                            <p>Join our community of over 300,000 global readers who receive emails
                                                filled with
                                                news, promotions, and other good stuff from G Adventures.</p>
                                        </div>
                                        { //<!-- End section title -->
                                        }
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        { //<!-- start subscribe -->
                                        }
                                        <form action="index-3.html#" method="post" className="subscribe-form">
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
                        <div className="home-blog-area style-3 pt-90 pb-120">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-9">
                                        { //<!-- Start section title -->
                                        }
                                        <div className="section-title text-center">
                                            <p className="title">From The Blog</p>
                                            <h2>Award-winning stories, and opinions <span></span> to fill your life with
                                                adventure
                                            </h2>
                                        </div>
                                        { //<!-- End section title -->
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                        { //<!-- Start single post blog -->
                                        }
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
                                                <Link to="index-3.html#"><h4>Five steps to picking your next
                                                    destination</h4></Link>
                                                <Link to="index-3.html#" className="more">Read More <i
                                                    className="fal fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                        { //<!-- End single post blog -->
                                        }
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        { //<!-- Start single post blog -->
                                        }
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
                                                <Link to="index-3.html#"><h4>Antarctica camping: What's it you
                                                    like?</h4></Link>
                                                <Link to="index-3.html#" className="more">Read More <i
                                                    className="fal fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                        { //<!-- End single post blog -->
                                        }
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        { //<!-- Start single post blog -->
                                        }
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
                                                <Link to="index-3.html#"><h4>Road Reads: 5 books to inspire trips to
                                                    Australia</h4>
                                                </Link>
                                                <Link to="index-3.html#" className="more">Read More <i
                                                    className="fal fa-angle-right"></i></Link>
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
                        <div className="guide-area pt-110 pb-80">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        { //<!-- Start section title -->
                                        }
                                        <div className="section-title text-center">
                                            <p className="title">Our Guides & Staff</p>
                                            <h2>A full team of experts with you before,<span></span> during and after
                                                the journey
                                            </h2>
                                        </div>
                                        { //<!-- End section title -->
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        { //<!-- Start single guide -->
                                        }
                                        <div className="single-guide">
                                            <div className="guide-thumb">
                                                <img src="img/guide/1.jpg" alt=""/>
                                                <div className="guide-content">
                                                    <p className="title">Adventure Manager</p>
                                                    <Link to="index-3.html#"><h4>Chris Kearney</h4></Link>
                                                    <ul>
                                                        <li><Link to="index-3.html#"><i
                                                            className="fab fa-facebook-f"></i></Link></li>
                                                        <li><Link to="index-3.html#"><i className="fab fa-twitter"></i></Link>
                                                        </li>
                                                        <li><Link to="index-3.html#"><i
                                                            className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="index-3.html#"><i
                                                            className="fab fa-linkedin-in"></i></Link></li>
                                                        <li><Link to="index-3.html#"><i className="fab fa-youtube"></i></Link>
                                                        </li>
                                                    </ul>
                                                    <div className="about-guide">
                                                        <p>Tasked with finding the freshest and most sustainable
                                                            adventures around
                                                            the world, either from his home in Brighton or wherever in
                                                            Europe his
                                                            campervan happens to be parked up.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        { //<!-- End single guide -->
                                        }
                                    </div>
                                    <div className="col-sm-4">
                                        { //<!-- Start single guide -->
                                        }
                                        <div className="single-guide">
                                            <div className="guide-thumb">
                                                <img src="img/guide/2.jpg" alt=""/>
                                                <div className="guide-content">
                                                    <p className="title">Customer Experience Manager</p>
                                                    <Link to="index-3.html#"><h4>Megan Devenish</h4></Link>
                                                    <ul>
                                                        <li><Link to="index-3.html#"><i
                                                            className="fab fa-facebook-f"></i></Link></li>
                                                        <li><Link to="index-3.html#"><i className="fab fa-twitter"></i></Link>
                                                        </li>
                                                        <li><Link to="index-3.html#"><i
                                                            className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="index-3.html#"><i
                                                            className="fab fa-linkedin-in"></i></Link></li>
                                                        <li><Link to="index-3.html#"><i className="fab fa-youtube"></i></Link>
                                                        </li>
                                                    </ul>
                                                    <div className="about-guide">
                                                        <p>Tasked with finding the freshest and most sustainable
                                                            adventures around
                                                            the world, either from his home in Brighton or wherever in
                                                            Europe his
                                                            campervan happens to be parked up.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        { //<!-- End single guide -->
                                        }
                                    </div>
                                    <div className="col-sm-4">
                                        { //<!-- Start single guide -->
                                        }
                                        <div className="single-guide">
                                            <div className="guide-thumb">
                                                <img src="img/guide/3.jpg" alt=""/>
                                                <div className="guide-content">
                                                    <p className="title">Travel Specialist</p>
                                                    <Link to="index-3.html#"><h4>Dan Bloomfield</h4></Link>
                                                    <ul>
                                                        <li><Link to="index-3.html#"><i
                                                            className="fab fa-facebook-f"></i></Link></li>
                                                        <li><Link to="index-3.html#"><i className="fab fa-twitter"></i></Link>
                                                        </li>
                                                        <li><Link to="index-3.html#"><i
                                                            className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="index-3.html#"><i
                                                            className="fab fa-linkedin-in"></i></Link></li>
                                                        <li><Link to="index-3.html#"><i className="fab fa-youtube"></i></Link>
                                                        </li>
                                                    </ul>
                                                    <div className="about-guide">
                                                        <p>Tasked with finding the freshest and most sustainable
                                                            adventures around
                                                            the world, either from his home in Brighton or wherever in
                                                            Europe his
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
                        <div className="partner-area pb-90">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        { //<!-- Start section title -->
                                        }
                                        <div className="section-title text-center">
                                            <p className="title">Our Partners</p>
                                            <h2>We team up with the best to give you <span></span> an unmatchable
                                                experience</h2>
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
                        <footer className="footer-area style-3 overlay-bg-4 pt-115">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6">
                                        { //<!-- start contact widget -->
                                        }
                                        <div className="widget contact-widget">
                                            <h3>About AdventureGene</h3>
                                            <p>Adventure is all about having the freedom to follow your curiosity and
                                                discovering
                                                the unknown. No matter the Travel Style, our tours balance well-planned
                                                itineraries
                                                with the flexibility to do your own thing and explore a bit on your
                                                own.</p>
                                            <ul>
                                                <li><Link to="index-3.html#"><i
                                                    className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link to="index-3.html#"><i className="fab fa-twitter"></i></Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fab fa-instagram"></i></Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i
                                                    className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link to="index-3.html#"><i className="fab fa-youtube"></i></Link>
                                                </li>
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
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>About
                                                    Us</Link></li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Why
                                                    Travel With
                                                    Us?</Link></li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Guides
                                                    & Staff</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Contact
                                                    Us</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>We
                                                    Are Hiring</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Our
                                                    Core
                                                    Values</Link></li>
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
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Adventure</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Hiking
                                                    & Trekking</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Cycling
                                                    Tours</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Family
                                                    Tours</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Wildlife
                                                    Tours</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Polar
                                                    Tours</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Food
                                                    Tours</Link>
                                                </li>
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
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>African
                                                    Safaris</Link></li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Alaska
                                                    &
                                                    Canada</Link></li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>South
                                                    America</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Middle
                                                    East</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Asia</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>Europe</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-angle-right"></i>South
                                                    America</Link>
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
                                                <li><Link to="index-3.html#"><i className="fal fa-paper-plane"></i>Level
                                                    1, 14-16
                                                    Church Street Queenstown, New Zealand</Link></li>
                                                <li><Link to="index-3.html#"><i className="fal fa-envelope"></i>support@adventuregene.com</Link>
                                                </li>
                                                <li><Link to="index-3.html#"><i className="fal fa-phone-alt"></i>+ 001
                                                    800 661
                                                    9073</Link></li>
                                            </ul>
                                        </div>
                                        { //<!-- end contact us widget -->
                                        }
                                    </div>
                                </div>
                            </div>
                        </footer>
                        { //<!-- Start Copyright Area -->
                        }
                        <div className="copy-right-area style-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        { //<!-- Start payment -->
                                        }
                                        <div className="copy-payment">
                                            <ul>
                                                <li><Link to="index-3.html#"><img src="img/payment/1.png"
                                                                                  alt=""/></Link></li>
                                                <li><Link to="index-3.html#"><img src="img/payment/2.png"
                                                                                  alt=""/></Link></li>
                                                <li><Link to="index-3.html#"><img src="img/payment/3.png"
                                                                                  alt=""/></Link></li>
                                                <li><Link to="index-3.html#"><img src="img/payment/4.png"
                                                                                  alt=""/></Link></li>
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
                        { //<!-- End Footer Area -->
                        }
                    </div>

                </>
                )
                }