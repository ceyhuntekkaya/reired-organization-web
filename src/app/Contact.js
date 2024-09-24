import {Link} from "react-router-dom";

export default function Contact (){
    return(
        <>
            <div className="contact-area pt-90 pb-95">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center">
                                <h2>İLETİŞİM</h2>
                                <p>Bize ulaşmak kolaydır ve sizden haber almak isteriz. Maceraya atılmak için can atıyorsanız veya hayal kurmaya yeni başlıyorsanız, bizimle iletişime geçin ve yolculuğunuzda size yardımcı olalım.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact text-center">
                                <div className="contact-thumb">
                                    <img src="img/icon/c1.png" alt=""/>
                                </div>
                                <div className="contact-content">
                                    <h4>Adres</h4>
                                    <p>İşçi Blokları Mah. Muhsin Yazıcıoğlu Cad. Regnum SkyTower 17.kat No:57/50, 06530 Çankaya/Ankara</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact text-center">
                                <div className="contact-thumb">
                                    <img src="img/icon/c2.png" alt=""/>
                                </div>
                                <div className="contact-content">
                                    <h4>WhatsUp</h4>
                                    <p>09.00 - 18.00 Arası</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact text-center">
                                <div className="contact-thumb">
                                    <img src="img/icon/c3.png" alt=""/>
                                </div>
                                <div className="contact-content">
                                    <h4>Telefon</h4>
                                    <p>Merkez: <Link to="tel:+008012345678">+ 90 800 661 9073</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact text-center">
                                <div className="contact-thumb">
                                    <img src="img/icon/c4.png" alt=""/>
                                </div>
                                <div className="contact-content">
                                    <h4>Mail</h4>
                                    <Link to="mailto:yourname@email.com">admin@campusorg.com.tr</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="google-map-area">
                <div className="google-map-wrap">
                    <div className="fullwide-map">
                        <div id="map_canvas" style={{width:"100%;height:760px;"}}></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="section-title pt-90">
                                <p className="title">İletişim Fornmu</p>
                                <h2>BİZE ULAŞIN...</h2>
                            </div>
                            <div className="contact-p-contact pb-70">
                                <form action="contact.html#" className="gane-form">
                                    <div className="single-field half-field">
                                        <input type="text" className="form-control" id="usr" placeholder="İsim"/>
                                    </div>
                                    <div className="single-field half-field-last">
                                        <input type="text" className="form-control" id="usr" placeholder="Soyisim"/>
                                    </div>
                                    <div className="single-field half-field">
                                        <input type="email" className="form-control" id="usr" placeholder="Email"/>
                                    </div>
                                    <div className="single-field half-field-last">
                                        <input type="tel" className="form-control" id="usr" placeholder="Telefon"/>
                                    </div>
                                    <div className="single-field">
                                        <textarea className="form-control" rows="5" id="comment"
                                                  placeholder="Mesajınız"></textarea>
                                    </div>
                                    <button className="btn btn-theme" type="submit">Gönder</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}