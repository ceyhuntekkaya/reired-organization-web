import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function BreadcrumbArea (){

    const[backgroundImage, setBackgroundImage] = useState("adventure-1")

    useEffect(() => {
        console.log(window.location.href)
        console.log(window.location.pathname)
    }, [window.location.href, window.location.pathname]);



    useEffect(() => {
        console.log(window.location.href)
        console.log(window.location.pathname)
    }, );


    return (
        <div className={`bradcumb-area ${backgroundImage} overlay-bg-2`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="bradcumb text-center">
                            <h3>Adventure Grid View</h3>
                            <ul>
                                <li><Link to="/detail">Home</Link></li>
                                <li>Adventure Grid View</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}