import {useContext, useEffect, useState} from "react";
import FormInput from "../components/FormInput";
import {AppContext} from "../../configs/AppContextProvider";

const registerData = {
    code: "",
    campusId: "",
    name: "",
    lastName: "",
    idCart: "",
    grade: "",
    branch: "",
    parentNme: "",
    parentLastname: "",
    parentMail: "",
    parentPhone: "",
    parentType: ""
}
const gradeList = [
    {id: "GRADE_1", name: "1. Sınıf"},
    {id: "GRADE_2", name: "2. Sınıf"},
    {id: "GRADE_3", name: "3. Sınıf"},
    {id: "GRADE_4", name: "4. Sınıf"},
    {id: "GRADE_5", name: "5. Sınıf"},
    {id: "GRADE_6", name: "6. Sınıf"},
    {id: "GRADE_7", name: "7. Sınıf"},
    {id: "GRADE_8", name: "8. Sınıf"},
    {id: "GRADE_9", name: "9. Sınıf"},
    {id: "GRADE_10", name: "10. Sınıf"},
    {id: "GRADE_11", name: "11. Sınıf"},
    {id: "GRADE_12", name: "12. Sınıf"}
]


export default function ApplicationStudentInfo() {
    const userContext = useContext(AppContext);
    const [data, setData] = useState(registerData)
    const [errorText, setErrorText] = useState([])

    useEffect(() => {
        const student = {

            name: userContext.student.name,
            lastName: userContext.student.lastname,
            idCart: userContext.student.identityNumber,
            grade: userContext.student.grade,
            branch: userContext.student.branch,
            email: userContext.student.email,
            mobilePhone: userContext.student.mobilePhone,
            healthInformation: userContext.student.mobilePhone,
            bloodGroup: userContext.student.bloodGroup,

        }
        setData(student)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const changeEvent = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const saveEvent = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="section-title font-s30">

                        <h2>ÖĞRENCİ BİLGİLERİ</h2>
                    </div>
                </div>
                <div className="row">

                    <div className="col-xl-6 col-lg-7 col-md-7">
                        <div>
                            <div className="form-title">
                                <h4>Öğrenci Bilgileri</h4>
                            </div>

                            <FormInput text="İsim" name="name" value={data.name} css="single-field"
                                       type="text" changeEvent={changeEvent}/>
                            <FormInput text="Soyisim" name="lastName" value={data.lastName}
                                       css="single-field" type="text" changeEvent={changeEvent}/>
                            <FormInput text="T.C. Kimlik No" name="idCart" value={data.idCart}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent}/>
                            <FormInput text="Sınıf" name="grade" value={data.grade}
                                       css="single-field half-field"
                                       type="select" data={gradeList} changeEvent={changeEvent}/>
                            <FormInput text="Şube" name="branch" value={data.branch}
                                       css="single-field half-field-last"
                                       type="text" changeEvent={changeEvent}/>

                        </div>

                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7">
                        <div>
                            <div className="form-title">
                                <h4>Öğrenci Bilgileri</h4>
                            </div>

                            <FormInput text="Doğum Tarihi" name="birthday" value={data.birthday} css="single-field"
                                       type="text" changeEvent={changeEvent}/>
                            <FormInput text="Cep Telefonu" name="mobilePhone" value={data.mobilePhone}
                                       css="single-field half-field" type="text" changeEvent={changeEvent}/>
                            <FormInput text="Ev Telefonu" name="homePhone" value={data.homePhone}
                                       css="single-field half-field-last"
                                       type="text" changeEvent={changeEvent}/>
                            <FormInput text="E-Posta" name="email" value={data.email}
                                       css="single-field half-field"
                                       type="text" changeEvent={changeEvent}/>
                            <FormInput text="Kan Grubu" name="bloodGroup" value={data.bloodGroup}
                                       css="single-field half-field-last"
                                       type="text" changeEvent={changeEvent}/>
                            <FormInput text="Sağlık Bilgileri" name="healthInformation" value={data.healthInformation}
                                       css="single-field"
                                       type="text" changeEvent={changeEvent}/>


                            <button className="btn btn-theme" onClick={saveEvent}>Güncelle</button>
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