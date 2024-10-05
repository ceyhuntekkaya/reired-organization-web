import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import FormInput from "./components/FormInput";
import config from "../configs/config.json";
import {useApi} from "../service/useApi";
import {AppContext} from "../configs/AppContextProvider";


export default function Login() {
    const [data, setData] = useState({});
    const [loginUser, setLoginUser] = useApi({});
    const userContext = useContext(AppContext);


    const changeEvent = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const oldVluess = () => {
        return (
            <div className="login-area pt-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-5">
                            <img className="mb-5" src="img/about/3.jpg" alt=""/>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-7">
                            <div className="section-title font-s30">
                                <p className="title">Öğrenci Kayıt</p>
                                <h2>Okulunuz ile ilgili tüm organizasyonları görmel için giriş yapınız.</h2>
                            </div>
                            <div className="login-form">
                                <ul>
                                    <li><Link className="facebook" to="signup.html#"><i
                                        className="fab fa-facebook-f"></i> Login With Facebook</Link></li>
                                    <li><Link className="twiter" to="/sign-up"><i className="fab fa-twitter"></i> Login
                                        With Twitter</Link></li>
                                    <li><Link className="google" to="signup.html#"><i
                                        className="fab fa-linkedin-in"></i> Login With Google</Link></li>
                                </ul>
                                <form action="signup.html#" className="gane-form">
                                    <div className="form-left">
                                        <div className="form-title">
                                            <h4>Registration Credentials</h4>
                                        </div>
                                        <div className="single-field half-field">
                                            <input type="text" className="form-control" id="usr"
                                                   placeholder="First Name"/>
                                        </div>
                                        <div className="single-field half-field-last">
                                            <input type="text" className="form-control" id="usr"
                                                   placeholder="Last Name"/>
                                        </div>
                                        <div className="single-field ">
                                            <input type="email" className="form-control" id="usr"
                                                   placeholder="Your Email"/>
                                        </div>
                                        <div className="single-field half-field">
                                            <input type="password" className="form-control" id="usr"
                                                   placeholder="Password"/>
                                        </div>
                                        <div className="single-field half-field-last">
                                            <input type="password" className="form-control" id="usr"
                                                   placeholder="Confirm Password"/>
                                        </div>
                                        <div className="password">
                                            <p className="aggri"><input type="checkbox"/>Agree to receive Adventuren
                                                marketing email</p>
                                        </div>
                                        <button className="btn btn-theme" type="submit">Ploace Order</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const loginEvent = (e) => {
        setLoginUser("studentLogin", data.username).then(r => null)
    }

    useEffect(() => {
        if (loginUser?.user) {
            userContext.setUser(loginUser)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loginUser]);


    return (

        userContext.user ? <div>Hoşgeldiniz {userContext.parent?.name}</div> :

        <div className="login-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                        <img className="mb-5" src={`${config.domain}img/about/2.png`} alt="adventure"/>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7">

                        <div className="login-form">
                            <div className="form-left">
                                <div className="form-title">
                                    <h4>Kullanıcı Girişi</h4>
                                </div>
                                <FormInput text="Öğrenci Kimlik No" name="username" value={data.username}
                                           css="single-field" type="text" changeEvent={changeEvent}/>
                                <button className="btn btn-theme" onClick={loginEvent}>Giriş</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}