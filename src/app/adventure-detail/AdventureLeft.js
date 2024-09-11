import {Link} from "react-router-dom";

export default function AdventureLeft (props){
    const project = props.project;
    return (
        <div className="alpine-left-content mb-40">

            <div>
                <div dangerouslySetInnerHTML={{__html: project.leftContent}}/>

            </div>


            <p></p>
            <Link to="/detail" className="btn btn-theme">Book This Trip</Link>
        </div>
    )
}