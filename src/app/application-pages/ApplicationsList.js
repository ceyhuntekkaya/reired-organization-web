import {Link} from "react-router-dom";
import {useApi} from "../../service/useApi";
import {useContext, useEffect} from "react";
import {AppContext} from "../../configs/AppContextProvider";

export default function ApplicationsList (props){
    const [applicationList, setApplicationList] = useApi([]);
    const userContext = useContext(AppContext);
    const {setSelectedApplication, setPage} = props;

    useEffect(() => {
        setApplicationList("getUserApplications", userContext.user?.id).then(r => null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const selectApplicationEvent=(applicationId)=>{
        setSelectedApplication(applicationId)
        setPage(4)
    }

    return (
        <div className="trip-date-area pt-100 pb-150">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2>Başvurularım</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="trip-table table-responsive">
                        <table className="table text-center">
                            <thead>
                            <tr>
                                <th scope="col"><p className="pl-15">Organizasyon</p></th>
                                <th scope="col"><p>Öğrenci</p></th>
                                <th scope="col"><p>Başvuru Bitiş</p></th>
                                <th scope="col"><p>Durumu</p></th>
                                <th scope="col"><p></p></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                applicationList && Array.isArray(applicationList) ?
                                    applicationList.map((application, index) =>

                                        <tr key={index}>
                                            <th scope="row"><span className="pl-15">{application.application.schoolProject.name}</span></th>
                                            <td>{application.application.student.name} {application.application.student.lastname}</td>
                                            <td>{new Date(application.application.createdAt).toDateString("tr")}</td>
                                            <td>{application.application.applicationStatus}</td>
                                            <td className="button"><Link className="btn-bor"
                                                                         onClick={()=>selectApplicationEvent(application)}>Detay</Link></td>
                                        </tr>

                                    ) : null
                            }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}