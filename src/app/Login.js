import {Link} from "react-router-dom";

export default function Login (){
    return (

        <div className="login-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                        <img className="mb-5" src="img/about/2.png" alt=""/>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7">
                        <div className="section-title font-s30">
                            <p className="title">Öğrenci Kayıt</p>
                            <h2>Okulunuz ile ilgili tüm organizasyonları görmel için giriş yapınız.</h2>
                        </div>
                        <div className="login-form">
                            <ul>
                                <li><Link className="facebook" to="login.html#"><i
                                    className="fab fa-facebook-f"></i> Facebook</Link></li>
                                <li><Link className="twiter" to="/login"><i className="fab fa-twitter"></i> Twitter</Link></li>
                                <li><Link className="google" to="login.html#"><i
                                    className="fab fa-linkedin-in"></i> oogle</Link></li>
                            </ul>
                            <form action="login.html#" className="gane-form">
                                <div className="form-left">
                                    <div className="form-title">
                                        <h4>Kullanıcı Bilgileri</h4>
                                    </div>
                                    <div className="single-field half-field">
                                        <input type="text" className="form-control" placeholder="İsim"/>
                                    </div>
                                    <div className="single-field half-field-last">
                                        <input type="text" className="form-control" placeholder="Soyisim"/>
                                    </div>
                                    <div className="single-field ">
                                        <input type="text" className="form-control" placeholder="MAil Adresi"/>
                                    </div>

                                    <button className="btn btn-theme" type="submit">Kaydol</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}