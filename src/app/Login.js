export default function Login (){
    return (

        <div className="login-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-md-5">
                        <img className="mb-5" src="img/about/2.png" alt=""/>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-7">
                        <div className="section-title font-s30">
                            <p className="title">Log in and let's get going</p>
                            <h2>Please log in to view, cancel or modify your reservations.</h2>
                        </div>
                        <div className="login-form">
                            <ul>
                                <li><a className="facebook" href="login.html#"><i
                                    className="fab fa-facebook-f"></i> Login With Facebook</a></li>
                                <li><a className="twiter" href="login.html#"><i className="fab fa-twitter"></i> Login
                                    With Twitter</a></li>
                                <li><a className="google" href="login.html#"><i
                                    className="fab fa-linkedin-in"></i> Login With Google</a></li>
                            </ul>
                            <form action="login.html#" className="gane-form">
                                <div className="form-left">
                                    <div className="form-title">
                                        <h4>Billing Details</h4>
                                    </div>
                                    <div className="single-field half-field">
                                        <input type="text" className="form-control" placeholder="First Name"/>
                                    </div>
                                    <div className="single-field half-field-last">
                                        <input type="text" className="form-control" placeholder="Last Name"/>
                                    </div>
                                    <div className="single-field ">
                                        <input type="text" className="form-control" placeholder="Last Name"/>
                                    </div>
                                    <div className="password">
                                        <p><input type="checkbox"/>Remember Password</p>
                                        <p>Forgot your <a href="login.html#">password?</a></p>
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