import {useApi} from "../service/useApi";
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import config from "../configs/config.json";
import ProjectCard from "./components/ProjectCard";

export default function ProjectList() {

    const [activeProjectList, setActiveProjectList] = useApi([]);
    const [project, setProject] = useApi([]);
    let {id} = useParams();

    useEffect(() => {

        setActiveProjectList("getActiveProject").then(r => null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        setProject("getProjectById", id).then(r => null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        setProject("getProjectById", id).then(r => null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);



    const beginArea = () => {
        return (
            <div className="about-adventure-area pt-110 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">

                                <h2>{project && project !== "deneme" ? project.name : ""}</h2>
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
                                    <p>IAlanında uzman ve deneyimli rehberlerimiz, öğrencilerin hem güvenliği hem de
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
                beginArea()
            }

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
        </>

    )
}