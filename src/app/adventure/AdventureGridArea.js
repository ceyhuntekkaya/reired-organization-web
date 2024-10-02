import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useApi} from "../../service/useApi";
import ProjectCard from "../components/ProjectCard";
const config = require("../../configs/config.json");

export default function AdventureGridArea (){
    const [activeProjectList, setActiveProjectList] = useApi([]);


    useEffect(() => {

        setActiveProjectList("getActiveProject").then(r => null)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


const pagination =()=>{
    return (
        <div className="row justify-content-center">
            <div className="col">
                <div className="gane-pagination mt-20 text-center">
                    <ul>
                        <li className="active"><Link to="adventure-1.html#">1</Link></li>
                        <li><Link to="adventure-1.html#">2</Link></li>
                        <li><Link to="adventure-1.html#">3</Link></li>
                        <li><Link to="adventure-1.html#">4</Link></li>
                        <li><Link to="adventure-1.html#">5</Link></li>
                        <li><Link to="adventure-1.html#">6</Link></li>
                        <li><Link to="adventure-1.html#">7</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



const AdventureGrid = () => {
        return (
            <div className="adventure-grid-area pt-80 pb-105">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="adventure-select">
                                <form action="adventure-1.html#" className="adventure-select-form">
                                    <select className="form-select dn-small" aria-label="Default select example">
                                        <option selected>Select Adventure Type</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                    </select>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select Price</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                    </select>
                                    <select className="form-select dn-small" aria-label="Default select example">
                                        <option selected>Select Destination</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                    </select>
                                    <input type="date" name="date"/>
                                    <div className="view-grid">
                                        <ul>
                                            <li className="active"><Link to="adventure-1.html#"><i
                                                className="fal fa-th"></i></Link></li>
                                            <li><Link to="adventure-1.html#"><i className="fal fa-list-ul"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">


                        {
                            activeProjectList && Array.isArray(activeProjectList) ?
                                activeProjectList.map((project, key) =>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single-adventure">
                                            <img src={`${config.api.invokeUrl}${project.smallBanner}`} alt="adventure"/>
                                            <div className="adventure-content">
                                                {
                                                    // <p className="tour">7 Days - 14 People Max - Multi-activity</p>
                                                }

                                                <Link to={`/adventure-detail/${project.id}`}><h6>{project.name}</h6>
                                                </Link>
                                                <p>{project.description}</p>
                                                {
                                                    //<p className="price">Detaylı bilgi <small>Per Person</small></p>
                                                }
                                                <p className="btn btn-success"><Link
                                                    to={`/adventure-detail/${project.id}`}>Detaylı bilgi</Link></p>
                                            </div>
                                        </div>
                                    </div>
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
                                activeProjectList && Array.isArray(activeProjectList) ?
                                    activeProjectList.map((project, key) =>
                                        <ProjectCard key={key} project={project}/>
                                    ) : null
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