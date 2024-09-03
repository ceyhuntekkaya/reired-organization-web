import {Link} from "react-router-dom";

export default function BreadcrumbArea (){





    return (
        <div className="bradcumb-area adventure-1 overlay-bg-2">
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