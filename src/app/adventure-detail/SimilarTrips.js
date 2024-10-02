import {Link} from "react-router-dom";
import AdventureGridArea from "../adventure/AdventureGridArea";
import {useApi} from "../../service/useApi";
import {useEffect} from "react";
import ProjectCard from "../components/ProjectCard";

export default function SimilarTrips() {
    const [activeProjectList, setActiveProjectList] = useApi([]);


    useEffect(() => {

        setActiveProjectList("getActiveProject").then(r => null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const travelList = () => {
        return (
            <div className="adventure-grid-area pt-80 pb-105">
                <div className="container">
                    <div className="row">
                        {
                            activeProjectList && Array.isArray(activeProjectList) ?
                                activeProjectList.map((project, key) =>
                                    <ProjectCard key={key} project={project}/>
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