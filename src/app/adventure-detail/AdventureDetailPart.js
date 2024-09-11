import TripDateArea from "./TripDateArea";
import SimilarTrips from "./SimilarTrips";
import PartnerArea from "../components/PartnerArea";
import TripInformation from "./TripInformation";
import AdventureRight from "./AdventureRight";
import AdventureLeft from "./AdventureLeft";
import AdventureDiscover from "./AdventureDiscover";
import AdventureSelect from "./AdventureSelect";
import {useApi} from "../../service/useApi";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

export default function AdventureDetailPart() {
    let {id} = useParams();

    const [project, setProject] = useApi([]);


    useEffect(() => {
        console.log(id)
        setProject("getProjectById", id).then(r => null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(project)

    return (
        <>
            {
            project ?
                <>
                    <div className="adventure-details-area pt-90 pb-110">
                        <div className="container">
                            <AdventureSelect project={project}/>
                            <AdventureDiscover project={project}/>
                            <div className="row">
                                <div className="col-lg-6">
                                    <AdventureLeft project={project}/>
                                </div>
                                <div className="col-lg-6">
                                    <AdventureRight project={project}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TripInformation project={project}/>
                    <TripDateArea project={project}/>
                    <SimilarTrips project={project}/>
                </>
                : null
            }


        </>
    )
}