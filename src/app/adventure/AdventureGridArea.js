import {useEffect} from "react";
import {useApi} from "../../service/useApi";
import ProjectCard from "../components/ProjectCard";

export default function AdventureGridArea() {
    const [activeProjectList, setActiveProjectList] = useApi([]);

    useEffect(() => {
        setActiveProjectList("getActiveProject").then(r => null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="adventure-grid-area pt-80 pb-105">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="adventure-select">
                            <form action="adventure-1.html#" className="adventure-select-form">
                                <select className="form-select dn-small" aria-label="Default select example">
                                    <option selected>Tur Türü</option>
                                    <option value="1">Eğitim</option>
                                    <option value="2">Bilim</option>
                                    <option value="2">Gezi</option>
                                </select>

                                <select className="form-select dn-small" aria-label="Default select example">
                                    <option selected>Bölge</option>
                                    <option value="1">Avrupa</option>
                                    <option value="2">Amerika</option>
                                    <option value="2">Kanada</option>
                                    <option value="2">Afrika</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        activeProjectList && Array.isArray(activeProjectList) ?
                            activeProjectList.map((project, key) =>
                                <ProjectCard key={key} project={project}/>
                            ) : null
                    }
                </div>
            </div>
        </div>

    )
}