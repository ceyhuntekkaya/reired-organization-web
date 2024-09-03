export default function SignUp (){
    return (
        <div className="login-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                        <img className="mb-5" src="img/about/3.jpg" alt=""/>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7">
                        <div className="section-title font-s30">
                            <p className="title">CREATE NEW ACCOUNT</p>
                            <h2>PLEASE LOG IN TO VIEW, CANCEL OR MODIFY YOUR RESERVATIONS.</h2>
                        </div>
                        <div className="login-form">
                            <ul>
                                <li><a className="facebook" href="signup.html#"><i
                                    className="fab fa-facebook-f"></i> Login With Facebook</a></li>
                                <li><a className="twiter" href="signup.html#"><i className="fab fa-twitter"></i> Login
                                    With Twitter</a></li>
                                <li><a className="google" href="signup.html#"><i
                                    className="fab fa-linkedin-in"></i> Login With Google</a></li>
                            </ul>
                            <form action="signup.html#" className="gane-form">
                                <div className="form-left">
                                    <div className="form-title">
                                        <h4>Registration Credentials</h4>
                                    </div>
                                    <div className="single-field half-field">
                                        <input type="text" className="form-control" id="usr" placeholder="First Name"/>
                                    </div>
                                    <div className="single-field half-field-last">
                                        <input type="text" className="form-control" id="usr" placeholder="Last Name"/>
                                    </div>
                                    <div className="single-field ">
                                        <input type="email" className="form-control" id="usr" placeholder="Your Email"/>
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