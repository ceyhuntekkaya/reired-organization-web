import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useApi} from "../../service/useApi";
import {useContext, useEffect} from "react";
import AdventureDiscover from "../adventure-detail/AdventureDiscover";
import AdventureLeft from "../adventure-detail/AdventureLeft";
import AdventureRight from "../adventure-detail/AdventureRight";
import TripInformation from "../adventure-detail/TripInformation";
import TripDateArea from "../adventure-detail/TripDateArea";
import SimilarTrips from "../adventure-detail/SimilarTrips";
import {AppContext} from "../../configs/AppContextProvider";

export default function SchoolProjectDetail() {
    let {id} = useParams();
    const userContext = useContext(AppContext);

    const [project, setProject] = useApi(null);
    const [campusProject, setCampusProject] = useApi(null);
    const [application, setApplication] = useApi(null);
    const navigate = useNavigate();

    useEffect(() => {
        setProject("getSchoolProjectById", id).then(r => null)
        setCampusProject("getSchoolProjectCampus", {
            projectId: id,
            campusId: userContext.student?.schoolCampus.id
        }).then(r => null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const applicationEvent = (e) => {
        e.preventDefault()
        const applicationData = {
            userId: userContext.user.id,
            studentId: userContext.student.id,
            schoolProjectId: project.id,
            schoolCampusId: userContext.student?.schoolCampus.id,
            schoolProjectCampusId: campusProject.id,
            currency: "TURKISH_LIRA",
            userType: "PARENT",
            isPaid: false,
            applicationStatus: "RESERVATION"
        }
        setApplication("createApplication", applicationData).then(r => null)
        navigate("/applications?tab=2")
    }

    const feeInformation = () => {
        return (
            <div className="appline-right">
                <div className="acivement-wrap">
                    <div className="text-sm-start">
                        <div><b>Program Başlama
                            Tarihi: </b><span>{new Date(project?.projectStartAt).toDateString("tr")}</span></div>
                        <div><b>Program Bitiş
                            Tarihi: </b><span>{new Date(project?.projectEndAt).toDateString("tr")}</span></div>
                        <div><b>Program Ücreti: </b><span>{campusProject?.fee} TL</span></div>
                        <div><b>Son Başvuru
                            Tarihi: </b><span>{new Date(project?.applicationEndAt).toDateString("tr")}</span></div>

                        <button onClick={applicationEvent} className="btn btn-info">Programa Başvuru
                            Yap
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            {
                project ?
                    <>
                        <div className="adventure-details-area pt-90 pb-110">
                            <div className="container">
                                <AdventureDiscover project={project}/>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <AdventureLeft project={project}/>
                                        {
                                            feeInformation()
                                            // <AdventureSelect project={project}/>
                                        }
                                    </div>
                                    <div className="col-lg-6">
                                        <AdventureRight project={project}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TripInformation project={project}/>
                        {
                            //<TripDateArea project={project}/>
                        }
                        <SimilarTrips project={project}/>
                    </>
                    : null
            }


        </>
    )
}