import {Link} from "react-router-dom";

export default function ApplicationsList (){
    return (
        <div className="trip-date-area pt-100 pb-150">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2>Başvurularım</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="trip-table table-responsive">
                        <table className="table text-center">
                            <thead>
                            <tr>
                                <th scope="col"><p className="pl-15">Organizasyon</p></th>
                                <th scope="col"><p>Başvuru Başlangış</p></th>
                                <th scope="col"><p>Başvuru Bitiş</p></th>
                                <th scope="col"><p>Durumu</p></th>
                                <th scope="col"><p></p></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row"><span className="pl-15">Türkiye Okulları</span></th>
                                <td>15.10.2024</td>
                                <td>15.12.2024</td>
                                <td>Anadolu Lisesi 9-10. Sınıflar</td>
                                <td className="button"><Link className="btn-bor"
                                                             to="#">Detay</Link></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}