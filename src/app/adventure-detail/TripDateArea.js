import {Link} from "react-router-dom";

export default function TripDateArea() {
    return (
        <div className="trip-date-area pt-100 pb-150">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <p className="title">Aktif Okullarımız</p>
                            <h2>Aktif Okullarımız</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="trip-table table-responsive">
                        <table className="table text-center">
                            <thead>
                            <tr>
                                <th scope="col"><p className="pl-15">Okul</p></th>
                                <th scope="col"><p>Başvuru Başlangış</p></th>
                                <th scope="col"><p>Başvuru Bitiş</p></th>
                                <th scope="col"><p>Grup</p></th>
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
                                                             to="#">Başvur</Link></td>
                            </tr>
                            <tr>
                                <th scope="row"><span className="pl-15">Türkiye Okulları</span></th>
                                <td>15.10.2024</td>
                                <td>15.12.2024</td>
                                <td>Anadolu Lisesi 9-10. Sınıflar</td>
                                <td className="button"><Link className="btn-theme"
                                                             to="#">Başvur</Link></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}