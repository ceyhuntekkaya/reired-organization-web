import {Link} from "react-router-dom";

export default function TeamUs (){
    return (
        <div className="guide-area pt-85 pb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title text-center">
                            <p className="title">Birlikte Seyahat Ettiğimiz</p>
                            <h2>Öğrencilerimizden<span></span> görüşler
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="single-guide">
                            <div className="guide-thumb">
                                <img src="img/guide/1.jpg" alt=""/>
                                <div className="guide-content">
                                    <p className="title">Macaristan Gezisi</p>
                                    <Link to="about.html#"><h4>Ceyhun Tekkaya</h4></Link>

                                    <div className="about-guide">
                                        <p>Bu gezi hayatımın en güzel deneyimlerinden biriydi! Farklı kültürleri yakından tanımak ve yeni arkadaşlıklar kurmak paha biçilemezdi. Özellikle Macaristan gezisi beni çok etkiledi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="single-guide">
                            <div className="guide-thumb">
                                <img src="img/guide/2.jpg" alt=""/>
                                <div className="guide-content">
                                    <p className="title">Macaristan Gezisi</p>
                                    <Link to="about.html#"><h4>Ceyhun Tekkaya</h4></Link>

                                    <div className="about-guide">
                                        <p>Bu gezi hayatımın en güzel deneyimlerinden biriydi! Farklı kültürleri
                                            yakından tanımak ve yeni arkadaşlıklar kurmak paha biçilemezdi. Özellikle
                                            Macaristan gezisi beni çok etkiledi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="single-guide">
                            <div className="guide-thumb">
                                <img src="img/guide/3.jpg" alt=""/>
                                <div className="guide-content">
                                    <p className="title">Macaristan Gezisi</p>
                                    <Link to="about.html#"><h4>Ceyhun Tekkaya</h4></Link>

                                    <div className="about-guide">
                                        <p>Bu gezi hayatımın en güzel deneyimlerinden biriydi! Farklı kültürleri
                                            yakından tanımak ve yeni arkadaşlıklar kurmak paha biçilemezdi. Özellikle
                                            Macaristan gezisi beni çok etkiledi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}