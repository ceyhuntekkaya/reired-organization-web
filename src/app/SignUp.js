import FormInput from "./components/FormInput";
import {useContext, useEffect, useState} from "react";
import {useApi} from "../service/useApi";
import {AppContext} from "../configs/AppContextProvider";

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
const student = {
    id: "",
    name: "",
    lastname: "",
    identityNumber: "",
    grade: "",
    school: {},
    schoolCampus: {},
    branch: "",
    birthday: 0,
    mobilePhone: "",
    homePhone: "",
    bloodGroup: "RhD_POSITIVE",
    healthInformation: "",
    email: "",
    parent: null,
}
const parent = {
    id: "",
    user: null,
    name: "",
    lastname: "",
    parentType: "",
    school: {},
    schoolCampus: {},
    street: "",
    city: "",
    postCode: "",
    address: "",
    country: "",
    email: ""
}
const user = {
    id: "",
    username: "",
    password: "",
    role: "",
    lastLoginTime: 0,
    mobilePhone: "",
    activationCode: "",
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


const parentTypeList = [
    {id: "FATHER", name: "Baba"},
    {id: "MOTHER", name: "Anne"},
    {id: "OTHER", name: "Diğer"},

]

export default function SignUp() {
    const [data, setData] = useState(registerData)
    const [school, setCheckCode] = useApi({});
    const [schoolCampusList, setSchoolCampusList] = useApi([]);
    const [createUserResult, setCreateUser] = useApi({});
    const userContext = useContext(AppContext);

    const changeEvent = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const checkCodeEvent = (e) => {
        setCheckCode("checkSchoolCode", data.code).then(r => null)
    }

    useEffect(() => {
        if (school?.id) {
            setSchoolCampusList("getSchoolCampusList", school.id).then(r => null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [school]);

    const saveEvent = (e) => {

        const saveData = {
            student: {
                ...student,
                name: data.name,
                lastname: data.lastName,
                identityNumber: data.idCart,
                grade: data.grade,
                branch: data.branch,
                school: school,
                schoolCampus: schoolCampusList.find(item => item.id === data.campusId),
            },
            parent: {
                ...parent,
                name: data.name,
                lastname: data.lastName,
                email: data.email,
                parentType: data.parentType,
                school: school,
                schoolCampus: schoolCampusList.find(item => item.id === data.campusId)
            },
            user: {
                ...user,
                username: data.idCart,
                password: data.idCart,
                mobilePhone: data.parentPhone,
                role: "PARENT"
            }
        }
        setCreateUser("createUserStudent", saveData).then(r => null)
    }

    useEffect(() => {

        if (createUserResult?.user) {
            userContext.setUser(createUserResult)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createUserResult]);

    return (

        <div className="login-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="section-title font-s30">
                        <p className="title">Öğrenci Kayıt</p>
                        <h2>Okulunuz ile ilgili tüm organizasyonları görmel için giriş yapınız.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                        <div className="login-form">
                            <div className="form-title">
                                <h4>Öğrenci Bilgileri</h4>
                            </div>
                            {
                                school && school.name ? <p>{school.name}</p> : <>
                                    <FormInput text="Okul Kodu" name="code" value={data.code} css="single-field"
                                               type="text"
                                               changeEvent={changeEvent}/>
                                    <button className="btn btn-theme" type="submit" onClick={checkCodeEvent}>Kontrol
                                    </button>
                                </>
                            }
                            {
                                school && school.name ? <>
                                    <FormInput text="Kampüs" name="campus" value={data.campus} css="single-field"
                                               type="select" data={schoolCampusList}
                                               changeEvent={changeEvent}/>
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
                                </> : null
                            }
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7">
                        <div>
                            <div className="form-title">
                                <h4>Veli Bilgileri</h4>
                            </div>

                            <FormInput text="İsim" name="parentNme" value={data.parentNme} css="single-field"
                                       type="text" changeEvent={changeEvent}/>
                            <FormInput text="Soyisim" name="parentLastname" value={data.parentLastname}
                                       css="single-field" type="text" changeEvent={changeEvent}/>
                            <FormInput text="Mail Adresi" name="parentMail" value={data.parentMail} css="single-field"
                                       type="text" changeEvent={changeEvent}/>
                            <FormInput text="Telefon Numarası" name="parentPhone" value={data.parentPhone} css="single-field"
                                       type="text" changeEvent={changeEvent}/>
                            <FormInput text="Yaknlık" name="parentType" value={data.parentType} css="single-field"
                                       type="select" data={parentTypeList} changeEvent={changeEvent}/>
                            <button className="btn btn-theme" onClick={saveEvent}>Kaydol</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}