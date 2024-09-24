export default function TripInformation(props) {
    const project = props.project;
    return (
        <div className="inclution-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title">

                            <div style={{lineHeight: "inherit"}}>
                                <div dangerouslySetInnerHTML={{__html: project.programme}}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}