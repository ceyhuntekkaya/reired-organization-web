import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {useApi} from "../../service/useApi";
import {AppContext} from "../../configs/AppContextProvider";

import logo from '../../assets/logo.png'

export default function Header() {

    const [schoolList, setSchoolList] = useApi([]);
    const [projectList, setProjectList] = useApi([]);
    const userContext = useContext(AppContext);


    useEffect(() => {
        setSchoolList("getAllSchools").then(r => null)
        setProjectList("getActiveProject").then(r => null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const AllMenus = () => {
        return (

            <>
                <li className="has-dropdown"><Link to="javascript:void(0)">TÜMÜ</Link>
                    <ul>
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="/page/about-us">about-us</Link></li>
                        <li><Link to="/page/adventure">adventure</Link></li>
                        <li><Link to="/page/adventure-detail">adventure-detail</Link></li>
                        <li><Link to="/page/cart-list">Card List</Link></li>
                        <li><Link to="/page/check-out">check-out</Link></li>
                        <li><Link to="/page/contact">contact</Link></li>
                        <li><Link to="/page/error">error</Link></li>
                        <li><Link to="/page/sing-up">sing-up</Link></li>
                        <li><Link to="/page/travel/grid">/travel/grid</Link></li>
                        <li><Link to="/page/travel/one">travel/one</Link></li>
                        <li><Link to="/page/travel/two">travel/two</Link></li>
                        <li><Link to="/page/login">login</Link></li>

                        <li><Link to="/page/home1">home1</Link></li>
                        <li><Link to="/page/home2">home2</Link></li>
                        <li><Link to="/page/home3">home3</Link></li>

                    </ul>
                </li>
            </>
        )
    }
    return (


        <header id="header" className="header-area style-2 header-border absulate-header">
            <div className="container">

                <div className="row">
                    <div className="col-lg-6 col-sm-3">
                        <div className="header-top-left">
                            <ul>
                                <li className="has-dropdown"><Link to="adventure-1.html#">USD</Link>
                                    <ul>
                                        <li><Link to="/page/detail">URO</Link></li>
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
                                <li><Link to="mailto:yourname@email.com"><i className="fal fa-envelope"></i>support@campusorg.com</Link>
                                </li>
                                <li><Link to="tel:+008012345678"><i className="fal fa-phone-alt"></i>012 345
                                    6789</Link>
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
                                <Link to="/page/"><img src={logo} alt="GENE"/></Link>
                            </div>

                        </div>
                        <div className="col-lg-10 col-sm-6 col-6">

                            <div className="main-menu-wrap">
                                <nav className="gene-nav">
                                    <ul className="menu">
                                        {
                                            //AllMenus()
                                        }
                                        <li><Link to="/">Ana Sayfa</Link></li>
                                        <li><Link to="/page/about-us">Hakkımızda</Link></li>

                                        <li className="has-dropdown"><Link
                                            to="javascript:void(0)">Okullarımız</Link>
                                            <ul>
                                                {
                                                    schoolList && Array.isArray(schoolList) && schoolList.map((item, index) => (
                                                        <li key={index}><Link
                                                            to={`/page/campus/${item.id}`}>{item.name}</Link>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </li>
                                        <li className="has-dropdown"><Link
                                            to="javascript:void(0)">Programlar</Link>
                                            <ul>
                                                {
                                                    projectList && Array.isArray(projectList) && projectList.map((item, index) => (
                                                        <li key={index}><Link
                                                            to={`/page/project/${item.id}`}>{item.name}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>

                                        <li><Link to="/page/contact">İletişim</Link></li>
                                        <li><Link to="/page/sing-up">Kayıt</Link></li>
                                        <li className="icon"><Link to="/page/login"><i
                                            className="far fa-user"></i>LOGIN</Link></li>
                                        <li className="icon"><Link to="/page/">
                                            {
                                                // <li className="icon"><Link to="/page/cart-list">
                                            }
                                            <i
                                                className="fal fa-shopping-basket"></i><small>(2)</small></Link>
                                        </li>
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