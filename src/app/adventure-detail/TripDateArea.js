import {Link} from "react-router-dom";

export default function TripDateArea (){
    return (
        <div className="trip-date-area pt-100 pb-150">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <p className="title">Trip Date and Time</p>
                            <h2>We'll be there, like we've <span></span> been there befor</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="trip-table table-responsive">
                        <table className="table text-center">
                            <thead>
                            <tr>
                                <th scope="col"><p className="pl-15">Departing</p></th>
                                <th scope="col"><p>Finishing</p></th>
                                <th scope="col"><p>Trip Status</p></th>
                                <th scope="col"><p>Trip Price <small>Per Person</small></p></th>
                                <th scope="col"><p>Action</p></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row"><span className="pl-15">Mon 25 Apr 2022</span></th>
                                <td>Tue 3 May 2022</td>
                                <td>Available</td>
                                <td>$1,205 - $2,205</td>
                                <td className="button"><Link className="btn-bor" to="adventure-detail-1.html#">Book
                                    Now</Link></td>
                            </tr>
                            <tr>
                                <th scope="row"><span className="pl-15">Mon 9 May 2022</span></th>
                                <td>Tue 17 May 2022</td>
                                <td>Available</td>
                                <td>$2,205 - $3,350</td>
                                <td className="button"><Link className="btn-theme" to="adventure-detail-1.html#">Place
                                    On Hold</Link></td>
                            </tr>
                            <tr>
                                <th scope="row"><span className="pl-15">Mon 9 May 2022</span></th>
                                <td>Tue 17 May 2022</td>
                                <td>Available</td>
                                <td>$2,205 - $3,350</td>
                                <td className="button"><Link className="btn-bor" to="adventure-detail-1.html#">Book
                                    Now</Link></td>
                            </tr>
                            <tr>
                                <th scope="row"><span className="pl-15">Mon 9 May 2022</span></th>
                                <td>Tue 17 May 2022</td>
                                <td>Available</td>
                                <td>$2,205 - $3,350</td>
                                <td className="button"><Link className="btn-theme" to="adventure-detail-1.html#">Place
                                    On Hold</Link></td>
                            </tr>
                            <tr>
                                <th scope="row"><span className="pl-15">Mon 9 May 2022</span></th>
                                <td>Tue 17 May 2022</td>
                                <td>Available</td>
                                <td>$2,205 - $3,350</td>
                                <td className="button"><Link className="btn-bor" to="adventure-detail-1.html#">Book
                                    Now</Link></td>
                            </tr>
                            <tr>
                                <th scope="row"><span className="pl-15">Mon 9 May 2022</span></th>
                                <td>Tue 17 May 2022</td>
                                <td>Available</td>
                                <td>$2,205 - $3,350</td>
                                <td className="button"><Link className="btn-bor" to="adventure-detail-1.html#">Book
                                    Now</Link></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}