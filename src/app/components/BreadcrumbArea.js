import {useState} from "react";

export default function BreadcrumbArea (){

    const[backgroundImage, ] = useState("adventure-1")

    return (
        <div className={`bradcumb-area ${backgroundImage} overlay-bg-2`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="bradcumb text-center">
                            <h3>Dünyayı gezdirir....</h3>

                            <ul>
                                {
                                    //  <li>Dünyayı gezdirir....</li>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}