import {Link} from "react-router-dom";

export default function Error (){
    return (
        <div className="error-area pt-90">
            <div className="error-thumb">
                <img src="img/404.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <p className="title">404 Error</p>
                            <h2>Well, it seems that this site is missing.</h2>
                            <p>Looking for a specific tour? We may have renamed it or changed a trip code. Use our
                                search box to locate any of our current tours. We can also suggest visiting our homepage
                                to see whats new at Adventuren!</p>
                            <p>If you just want to ask us a question, then visit our contact us page to send us an email
                                or give us a call for some instant answers!</p>
                            <Link className="btn btn-theme" to="/error">Back To Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}