import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function BlankPage (){

    const [pass, setPass] = useState("")
    const [link, setLink] = useState(false)



    useEffect(() => {

        if(pass === "reired"){
            setLink(true)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pass], );



    console.log("BURADA... 455")
    return (
        <div className="login-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                        <img className="mb-5" src="img/about/2.png" alt=""/>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7">

                        <div className="login-form">

                            <form action="login.html#" className="gane-form">
                                <div className="form-left">
                                    <div className="form-title">
                                        <h4>Kullanıcı Bilgileri - {pass}</h4>
                                    </div>

                                    <div className="single-field ">
                                        <input type="text" className="form-control" placeholder="Şifre"
                                        onChange={e=> setPass(e.target.value)}/>
                                    </div>
                                    {
                                        link ?

                                            <Link className="btn btn-success" to="/"> Giriş</Link>

                                            : null
                                    }

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}