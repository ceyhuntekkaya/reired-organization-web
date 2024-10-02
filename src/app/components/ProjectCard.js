import config from "../../configs/config.json";
import {Link} from "react-router-dom";

export default function ProjectCard (props){
    const {project, key} = props;



    return (
        <div key={key} className="col-lg-4 col-sm-6">
            <div className="single-adventure">
                <img src={`${config.domain}${project.smallBanner}`} alt="adventure"/>
                <div className="adventure-content">
                    {
                        // <p className="tour">7 Days - 14 People Max - Multi-activity</p>
                    }

                    <Link to={`/page/adventure-detail/${project.id}`}><h6>{project.name}</h6>
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
    )
}