import config from "../../configs/config.json";
import {Link} from "react-router-dom";

export default function ProjectCard(props) {
    const {project, key, type} = props;

    return (
        <div key={key} className="col-lg-4 col-sm-6">
            <div className="single-adventure">
                <img src={`${config.domain}${project.smallBanner}`} alt="adventure"/>
                <div className="adventure-content">
                    {
                        type ?
                            <Link to={`/user/school/project/detail/${project.id}`}><h6>{project.name}</h6>
                            </Link>
                            :
                            <Link to={`/page/adventure-detail/${project.id}`}><h6>{project.name}</h6>
                            </Link>
                    }
                    <p>{project.description}</p>
                    {
                        type ?
                            <p className="btn btn-success"><Link
                                to={`/user/school/project/detail/${project.id}`}>Detaylı bilgi ve başvuru</Link></p>
                            :
                            <p className="btn btn-success"><Link
                                to={`/page/adventure-detail/${project.id}`}>Detaylı bilgi</Link></p>
                    }
                </div>
            </div>
        </div>
    )
}