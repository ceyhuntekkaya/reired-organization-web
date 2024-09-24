export default function AdventureRight(props) {

    const project = props.project;


    const tripInfoOne = () => {
        return (
            <div className="trip-info-one">
                <div className="trip-content-one">
                    <p>Start </p>
                    <p>Finish </p>
                    <p>Countries </p>
                </div>
                <div className="trip-content-two">
                    <p>{project.location}</p>
                    <p>{project.location}</p>
                    <p>{project.location}</p>
                </div>
            </div>
        )
    }

    const tripInfoTwo = () => {
        return (
            <div className="trip-fifo-tow">
                <div className="trip-content-one">
                    <p>Sınıf Düzeyleri </p>
                    <p>Branşlar</p>
                    <p>Tür </p>
                </div>
                <div className="trip-content-two">
                    <p>{project.grades}</p>
                    <p>{project.lessonGroups}</p>
                    <p>{project.projectType}</p>
                </div>
            </div>
        )
    }

    const singleAcivement = () => {
        return (
            <>
                <div className="single-acivement">
                    <h4>Activities</h4>
                    <ul>
                        <li><img src="img/icon/a1.png" alt=""/>
                            <span>Camping</span>
                        </li>
                        <li><img src="img/icon/a2.png" alt=""/>
                            <span>Camping</span>
                        </li>
                        <li><img src="img/icon/a6.png" alt=""/>
                            <span>Camping</span>
                        </li>
                    </ul>
                </div>
                <div className="single-acivement">
                    <h4>Activities</h4>
                    <ul>
                        <li><img src="img/icon/a1.png" alt=""/>
                            <span>Camping</span>
                        </li>
                        <li><img src="img/icon/a2.png" alt=""/>
                            <span>Camping</span>
                        </li>
                        <li><img src="img/icon/a6.png" alt=""/>
                            <span>Camping</span>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
    return (
        <div className="appline-right">
            <div className="acivement-wrap">
                <div className="text-sm-start">
                    <div dangerouslySetInnerHTML={{__html: project.rightContent}}/>
                </div>
            </div>
            <div className="alpine-info-wrap">
                <h4>Gezi Bilgileri</h4>
                <div className="trip-info-wrap">

                        {
                            //tripInfoOne()
                        }
                        {
                            tripInfoTwo()
                        }


                </div>
            </div>
            <div className="acivement-wrap">
                {
                    //singleAcivement()
                }
            </div>
        </div>
    )
}