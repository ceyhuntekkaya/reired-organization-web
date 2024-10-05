import {Link} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../../configs/AppContextProvider";

export default function AdventureLeft (props){
    const userContext = useContext(AppContext);
    const project = props.project;
    return (
        <div className="alpine-left-content mb-40">
            <div>
                <div dangerouslySetInnerHTML={{__html: project.leftContent}}/>
            </div>
        </div>
    )
}