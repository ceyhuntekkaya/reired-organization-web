import './App.css';
import Header from "./app/components/Header";
import BreadcrumbArea from "./app/components/BreadcrumbArea";
import AdventureGridArea from "./app/adventure/AdventureGridArea";
import SubscribeArea from "./app/adventure/SubscribeArea";
import PartnerArea from "./app/components/PartnerArea";
import Footer from "./app/components/Footer";
import AdventureDetailPart from "./app/adventure-detail/AdventureDetailPart";
import AboutUs from "./app/AboutUs";
import Login from "./app/Login";
import Contact from "./app/Contact";
import CartList from "./app/CartList";
import Checkout from "./app/Checkout";
import SignUp from "./app/SignUp";
import Error from "./app/Error";
import TravelListOne from "./app/TravelListOne";
import TravelListTwo from "./app/TravelListTwo";
import TravelListGrid from "./app/TravelListGrid";

function App() {


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

export default App;
