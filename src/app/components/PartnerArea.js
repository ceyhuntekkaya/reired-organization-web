import partner1 from '../../assets/partner/1-1.jpg'
import partner2 from '../../assets/partner/2-2.jpg'
import partner3 from '../../assets/partner/3-3.jpg'
import partner4 from '../../assets/partner/4-4.jpg'
import partner5 from '../../assets/partner/5-5.jpg'
import partner6 from '../../assets/partner/6-6.jpg'


export default function PartnerArea () {





        return (
        <div className="partner-area pt-115 pb-220">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title text-center">
                            <p className="title">İş BİRLİKLERİMİZ</p>
                            <h2>SİZE EŞSİZ BİR DENEYİM SUNMAK İÇİN<span></span> EN İYİLERLE BİRLİKTE ÇALIŞIYORUZ
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img className="top" src={partner1} alt=""/>
                            </div>
                            <div className="col">
                                <img className="top" src={partner2} alt=""/>
                            </div>
                            <div className="col">
                                <img className="top" src={partner3} alt=""/>
                            </div>
                            <div className="col">
                                <img className="top" src={partner4} alt=""/>
                            </div>
                            <div className="col">
                                <img className="top" src={partner5} alt=""/>
                            </div>
                            <div className="col">
                                <img className="top" src={partner6} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
        }