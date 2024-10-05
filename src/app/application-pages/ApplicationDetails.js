import {Link} from "react-router-dom";
import {useApi} from "../../service/useApi";
import {useEffect} from "react";

export default function ApplicationDetails(props) {

    const {application} = props;

    const [agreement, setAgreement] = useApi(null);
    const [applicationAgreement, setApplicationAgreement] = useApi(null);


    useEffect(() => {
        setAgreement("getAgreement").then(r => null)
        setApplicationAgreement("getApplicationAgreement", application.application?.id).then(r => null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);





    const isDocumentState = (projectDocumentId) => {

        const documentFilter = application.applicationDocumentList.filter(doc => doc.projectDocument.id === projectDocumentId)
        if (documentFilter && documentFilter.length > 0) {
            return <Link to={documentFilter[0].url} target={"_blank"} className="btn btn-info">Görüntüle</Link>
        }
        return <button className="btn btn-success">YÜKLE</button>
    }

    const documentArea = () => {
        return (
            <div className="appline-right m-2">
                <div className="alpine-info-wrap">
                    <h4>DOKÜMAN BİLGİLERİ</h4>
                </div>
                <div>
                    <table className="table">
                        <tbody>
                        {
                            // eslint-disable-next-line array-callback-return
                            application.projectDocumentList.map((doc, index) =>
                                <tr>
                                    <th scope="row">{index + 1}.</th>
                                    <td>{doc.explain}</td>
                                    <td>Zorunlu</td>
                                    <td>{isDocumentState(doc.id)}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
    const applicationArea = () => {
        return (
            <div className="appline-right m-2">
                <div className="alpine-info-wrap">
                    <h4>BAŞVURU BİLGİLERİ</h4>
                </div>
                <div>
                   -
                </div>
            </div>
        )

    }
    const paymentArea = () => {
        return (
            <div className="appline-right m-2">
                <div className="alpine-info-wrap">
                    <h4>ÖDEME BİLGİLERİ</h4>
                </div>
                <div>
                    Ödeme için başvurunuzun onaylanması gerekmektedir.
                </div>
            </div>
        )

    }

    const agreementArea = () => {
        return (
            <div className="appline-right m-2">
                <div className="alpine-info-wrap">
                    <h4>Agreement BİLGİLERİ</h4>
                </div>
                <div>
                    {agreement && agreement.detail}
                </div>
                <div><button className="btn btn-info">Sözleşmeyi okudum, onaylıyorum.</button></div>
            </div>
        )

    }

    const studentInformation = () => {
        return (
            <form>
                <div className="form-group row m-2">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" id="staticEmail"
                               value="email@example.com"/>
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <>
            {
                //applicationArea()
            }
            {agreementArea()}
            {documentArea()}
            {paymentArea()}

        </>
    )
}