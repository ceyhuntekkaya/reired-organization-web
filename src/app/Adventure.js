import Header from "./components/Header";
import BreadcrumbArea from "./components/BreadcrumbArea";
import AdventureGridArea from "./adventure/AdventureGridArea";
import SubscribeArea from "./adventure/SubscribeArea";
import PartnerArea from "./components/PartnerArea";
import Footer from "./components/Footer";

export default function Adventure (){

    return (
        <div className="wrapper">
            <Header/>
            <BreadcrumbArea/>
            <AdventureGridArea/>
            <SubscribeArea/>
            <PartnerArea/>
            <Footer/>
        </div>
    )
}