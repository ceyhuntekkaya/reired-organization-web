import TripDateArea from "./TripDateArea";
import SimilarTrips from "./SimilarTrips";
import PartnerArea from "../components/PartnerArea";
import TripInformation from "./TripInformation";
import AdventureRight from "./AdventureRight";
import AdventureLeft from "./AdventureLeft";
import AdventureDiscover from "./AdventureDiscover";
import AdventureSelect from "./AdventureSelect";

export default function AdventureDetailPart() {
    return (
        <>
            <div className="adventure-details-area pt-90 pb-110">
                <div className="container">
                    <AdventureSelect/>
                    <AdventureDiscover/>
                    <div className="row">
                        <div className="col-lg-6">
                            <AdventureLeft/>
                        </div>
                        <div className="col-lg-6">
                            <AdventureRight/>
                        </div>
                    </div>
                </div>
            </div>
            <TripInformation/>
            <TripDateArea/>
            <SimilarTrips/>
            <PartnerArea/>
        </>
    )
}