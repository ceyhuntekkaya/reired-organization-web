import FormInput from "../components/FormInput";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../configs/AppContextProvider";

const registerData = {
    parentNme: "",
    parentLastname: "",
    parentMail: "",
    parentPhone: "",
    parentType: "",
    street: "",
    city: "",
    postCode: "",
    address: "",
    country: ""
}
const parentTypeList = [
    {id: "FATHER", name: "Baba"},
    {id: "MOTHER", name: "Anne"},
    {id: "OTHER", name: "Diğer"},

]


export default function ApplicationParents() {
    const userContext = useContext(AppContext);
    const [parent1, setParent1] = useState(registerData)
    const [parent2, setParent2] = useState(registerData)
    const [errorText, setErrorText] = useState([])

    useEffect(() => {
        const parent = {
            parentNme: userContext.parent.name,
            parentLastname: userContext.parent.lastname,
            parentMail: userContext.parent.email,
            parentPhone: userContext.user.mobilePhone,
            parentType: userContext.parent.parentType,
            street: userContext.parent.street,
            city: userContext.parent.city,
            postCode: userContext.parent.postCode,
            address: userContext.parent.address,
            country: userContext.parent.country,
        }
        setParent1(parent)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeEvent1 = (e) => {
        setParent1({...parent1, [e.target.name]: e.target.value})
    }
    const changeEvent2 = (e) => {
        setParent2({...parent2, [e.target.name]: e.target.value})
    }

    const saveEvent1 = (e) => {
        e.preventDefault()
    }
    const saveEvent2 = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="section-title font-s30">

                        <h2>VELİ BİLGİLERİ 1</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                        <div className="login-form">
                            <div className="form-title">
                                <h4>Veli Bilgileri</h4>
                            </div>
                            <FormInput text="İsim" name="parentNme" value={parent1.parentNme} css="single-field"
                                       type="text" changeEvent={changeEvent1}/>
                            <FormInput text="Soyisim" name="parentLastname" value={parent1.parentLastname}
                                       css="single-field" type="text" changeEvent={changeEvent1}/>
                            <FormInput text="Mail Adresi" name="parentMail" value={parent1.parentMail}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent1}/>
                            <FormInput text="Telefon Numarası" name="parentPhone" value={parent1.parentPhone}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent1}/>
                            <FormInput text="Adres" name="address" value={parent1.address}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent1}/>
                            <FormInput text="Sokak" name="street" value={parent1.street}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent1}/>
                            <FormInput text="Şehir" name="city" value={parent1.city}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent1}/>
                            <FormInput text="Posta Kodu" name="postCode" value={parent1.postCode}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent1}/>
                            <FormInput text="Ülke" name="country" value={parent1.country}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent1}/>
                            <FormInput text="Yaknlık" name="parentType" value={parent1.parentType} css="single-field"
                                       type="select" data={parentTypeList} changeEvent={changeEvent1}/>
                            <button className="btn btn-theme" onClick={saveEvent1}>Güncelle</button>
                        </div>
                        {
                            errorText && errorText.length > 0 ? errorText.map((item, index) => {
                                return <div className="btn-danger p-2 m-2"><p key={index}>{item.error}</p></div>
                            }) : null
                        }
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7">
                        <div>
                            <div className="form-title">
                                <h4>Veli Bilgileri 2</h4>
                            </div>

                            <FormInput text="İsim" name="parentNme" value={parent2.parentNme} css="single-field"
                                       type="text" changeEvent={changeEvent2}/>
                            <FormInput text="Soyisim" name="parentLastname" value={parent2.parentLastname}
                                       css="single-field" type="text" changeEvent={changeEvent2}/>
                            <FormInput text="Mail Adresi" name="parentMail" value={parent2.parentMail}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent2}/>
                            <FormInput text="Telefon Numarası" name="parentPhone" value={parent2.parentPhone}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent2}/>
                            <FormInput text="Adres" name="address" value={parent2.address}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent2}/>
                            <FormInput text="Sokak" name="street" value={parent2.street}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent2}/>
                            <FormInput text="Şehir" name="city" value={parent2.city}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent2}/>
                            <FormInput text="Posta Kodu" name="postCode" value={parent2.postCode}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent2}/>
                            <FormInput text="Ülke" name="country" value={parent2.country}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent2}/>
                            <FormInput text="Yaknlık" name="parentType" value={parent2.parentType} css="single-field"
                                       type="select" data={parentTypeList} changeEvent={changeEvent2}/>
                            <button className="btn btn-theme" onClick={saveEvent2}>Kaydet</button>
                        </div>
                        {
                            errorText && errorText.length > 0 ? errorText.map((item, index) => {
                                return <div className="btn-danger p-2 m-2"><p key={index}>{item.error}</p></div>
                            }) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}