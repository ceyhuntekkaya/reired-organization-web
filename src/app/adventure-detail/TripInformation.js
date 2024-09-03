export default function TripInformation (){
    return (
        <div className="inclution-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title text-center">
                            <p className="title">Essential trip information</p>
                            <h2>TRIP Inclusions</h2>
                            <p>Want an in-depth insight into this trip? Essential Trip Information provides a
                                detailed itinerary, visa info, how to get to your hotel, what's included - pretty
                                much everything you need to know about this adventure and more.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="inclution-wrap">
                            <div className="single-inclution">
                                <div className="inclution-thumb">
                                    <img src="img/icon/i1.png" alt=""/>
                                </div>
                                <div className="inclution-content">
                                    <h4>Accomodation</h4>
                                    <p>Hotel (3 nights), Camping (1 night)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="inclution-wrap">
                            <div className="single-inclution">
                                <div className="inclution-thumb">
                                    <img src="img/icon/i2.png" alt=""/>
                                </div>
                                <div className="inclution-content">
                                    <h4>Meals</h4>
                                    <p>8 breakfasts, 3 lunches, 2 dinners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="inclution-wrap">
                            <div className="single-inclution">
                                <div className="inclution-thumb">
                                    <img src="img/icon/i3.png" alt=""/>
                                </div>
                                <div className="inclution-content">
                                    <h4>Transport</h4>
                                    <p>Train, Public bus, Taxi, Tram, Metro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}