export default function AdventureDiscover (props){
    const project = props.project;
    return (
        <div className="row justify-content-center pb-50 pt-50">
            <div className="col-lg-10">
                <div className="dis-alpine section-title text-center">
                    <h2>{project.name} <span></span> ...</h2>
                    <div className="sin-sis-alpine-wrap">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="single-alpine">
                                    <h4>Budget</h4>
                                    <h3>$1931</h3>
                                    <p>Per Person</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="single-alpine">
                                    <h4>Budget</h4>
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                    <p>15 Reviews</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="single-alpine">
                                    <h4>Duration</h4>
                                    <h3>10 Days</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}