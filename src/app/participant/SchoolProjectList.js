import {useApi} from "../../service/useApi";
import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import {AppContext} from "../../configs/AppContextProvider";
import Login from "../Login";


export default function SchoolProjectList() {
    const [activeProjectList, setActiveProjectList] = useApi([]);
    const [school, setSchool] = useApi([]);
    const userContext = useContext(AppContext);
    let {id} = useParams();

    useEffect(() => {
        setSchool("getSchoolById", id).then(r => null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setSchool("getSchoolById", id).then(r => null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        if (userContext?.student) {
            setActiveProjectList("findSchoolProjectBySchool", userContext?.student.school.id).then(r => null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userContext.parent]);


    const beginArea = () => {
        return (
            <div className="about-adventure-area pt-110 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">

                                <h2>{school ? school.name : ""}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-about-adventure text-center">
                                <div className="about-ad-thumb">
                                    <img src="img/adventure/1.png" alt=""/>
                                </div>
                                <div className="about-ad-content">
                                    <h4>Öğrenci Odaklı Yaklaşım</h4>
                                    <p>Her öğrencinin farklı ihtiyaçlarını ve ilgi alanlarını göz önünde bulundurarak
                                        özel
                                        programlar hazırlıyoruz.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-about-adventure text-center">
                                <div className="about-ad-thumb">
                                    <img src="img/adventure/2.png" alt=""/>
                                </div>
                                <div className="about-ad-content">
                                    <h4>Deneyimli Rehberler</h4>
                                    <p>Alanında uzman ve deneyimli rehberlerimiz, öğrencilerin hem güvenliği hem de
                                        öğrenimi için yanlarında oluyor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-about-adventure text-center">
                                <div className="about-ad-thumb">
                                    <img src="img/adventure/3.png" alt=""/>
                                </div>
                                <div className="about-ad-content">
                                    <h4>Kapsamlı Gezi Rotaları</h4>
                                    <p>ITarihi ve kültürel zenginlikleriyle öne çıkan şehirleri ziyaret ederek
                                        öğrencilerin
                                        ufkunu genişletiyoruz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {
                //beginArea()
            }
            <div className="adventure-grid-area pt-80 pb-105">
                <div className="container">
                    <div className="row">
                        {
                            userContext.parent ?
                                activeProjectList && Array.isArray(activeProjectList) ?
                                    activeProjectList.map((project, key) =>
                                        <ProjectCard type="school" key={key} project={project}/>
                                    ) : null
                                : <Login/>
                        }
                    </div>
                    {
                        // pagination()
                    }
                </div>
            </div>
        </>
    )
}