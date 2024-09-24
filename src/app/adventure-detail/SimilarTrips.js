import {Link} from "react-router-dom";
import AdventureGridArea from "../adventure/AdventureGridArea";
import {useApi} from "../../service/useApi";
import {useEffect} from "react";

export default function SimilarTrips (){
    const [activeProjectList, setActiveProjectList] = useApi([]);


    useEffect(() => {

        setActiveProjectList("getActiveProject").then(r => null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const travelList=()=>{
        return (
            <div className="adventure-grid-area pt-80 pb-105">
                <div className="container">

                    <div className="row">


                        {
                            activeProjectList && Array.isArray(activeProjectList) ?
                                activeProjectList.map((project, key) =>
                                    key<3 ?
                                    <div key={key} className="col-lg-4 col-sm-6">
                                        <div className="single-adventure">
                                            <img src={"../"+project.smallBanner} alt="adventure"/>
                                            <div className="adventure-content">
                                                {
                                                    // <p className="tour">7 Days - 14 People Max - Multi-activity</p>
                                                }

                                                <Link to={`/adventure-detail/${project.id}`}><h6>{project.name}</h6></Link>
                                                <p>{project.description}</p>
                                                {
                                                    //<p className="price">Detaylı bilgi <small>Per Person</small></p>
                                                }
                                                <p className="btn btn-success"><Link to={`/adventure-detail/${project.id}`}>Detaylı bilgi</Link></p>
                                            </div>
                                        </div>
                                    </div> : null
                                ) : null
                        }
                    </div>
                    {
                        // pagination()
                    }
                </div>
            </div>
        )
    }
    return (
        <div className="adve-detail-area pt-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title text-center">
                            <p className="title">Benzer Geziler</p>
                            <h2>Katılabileceğiniz Diğer Geziler</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        travelList()
                    }
                </div>
            </div>
        </div>
    )
}