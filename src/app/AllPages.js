import Header from "./components/Header";
import BreadcrumbArea from "./components/BreadcrumbArea";
import TravelListOne from "./TravelListOne";
import TravelListTwo from "./TravelListTwo";
import TravelListGrid from "./TravelListGrid";
import SignUp from "./SignUp";
import Error from "./Error";
import Checkout from "./Checkout";
import CartList from "./CartList";
import Contact from "./Contact";
import Login from "./Login";
import AboutUs from "./AboutUs";
import AdventureGridArea from "./adventure/AdventureGridArea";
import AdventureDetailPart from "./adventure-detail/AdventureDetailPart";
import SubscribeArea from "./adventure/SubscribeArea";
import PartnerArea from "./components/PartnerArea";
import Footer from "./components/Footer";


function AllPages() {


    const loadingPanel = () => {

        return (
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
        )
    }
    return (
        <>
            {
                //loadingPanel()
            }
            <div className="wrapper">
                <Header/>
                <BreadcrumbArea/>
                <TravelListOne/>
                <TravelListTwo/>
                <TravelListGrid/>
                <Error/>
                <SignUp/>
                <Checkout/>
                <CartList/>
                <Contact/>
                <Login/>
                <AboutUs/>
                <AdventureDetailPart/>
                <AdventureGridArea/>
                <SubscribeArea/>
                <PartnerArea/>
                <Footer/>
            </div>
        </>
    );
}

export default AllPages;
