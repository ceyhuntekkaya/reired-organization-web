import {Link} from "react-router-dom";

export default function Checkout (){
    return (
        <div className="checkout-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="gane-form billing-form">
                            <form action="check-out.html#" className="contact-us-form">
                                <div className="form-left">
                                    <div className="form-title">
                                        <h4>Billing Details</h4>
                                    </div>
                                    <div className="single-field half-field">
                                        <input type="text" className="form-control" id="usr" placeholder="First Name"/>
                                    </div>
                                    <div className="single-field half-field-last">
                                        <input type="text" className="form-control" id="usr" placeholder="Last Name"/>
                                    </div>
                                    <div className="single-field">
                                        <input type="tel" className="form-control" id="phone" placeholder="Phone"/>
                                    </div>
                                    <div className="single-field">
                                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                                    </div>
                                    <div className="single-field">
                                        <input type="text" className="form-control" id="usr"
                                               placeholder="Street Address"/>
                                    </div>
                                    <div className="single-field">
                                        <input type="text" className="form-control" id="usr"
                                               placeholder="Apartment or Suite"/>
                                    </div>
                                    <div className="single-field half-field">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Select Region/Country</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                        </select>
                                    </div>
                                    <div className="single-field half-field-last">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Town/City</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                        </select>
                                    </div>
                                    <div className="single-field half-field">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Select State</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                        </select>
                                    </div>
                                    <div className="single-field half-field-last">
                                        <input type="text" className="form-control" id="usr" placeholder="Postcode"/>
                                    </div>
                                </div>
                                <div className="form-right checkout">
                                    <div className="form-title">
                                        <h4>Payment Method</h4>
                                    </div>
                                    <div className="payment-method-contnt">
                                        <p>Make your payment directly into our bank account. Your order will not be
                                            shipped until the funds have cleared in our account.</p>
                                        <Link to="check-out.html#"><img src="img/payment/p1.png" alt=""/></Link>
                                        <Link to="check-out.html#"><img src="img/payment/p2.png" alt=""/></Link>
                                        <Link to="check-out.html#"><img src="img/payment/p3.png" alt=""/></Link>
                                    </div>
                                    <div className="single-field">
                                        <input type="text" className="form-control" id="usr"
                                               placeholder="Name on card"/>
                                    </div>
                                    <div className="single-field">
                                        <input type="text" className="form-control" id="usr" placeholder="Card Number"/>
                                    </div>
                                    <div className="single-field one-third">
                                        <input type="text" className="form-control" id="usr" placeholder="Month"/>
                                    </div>
                                    <div className="single-field one-third">
                                        <input type="text" className="form-control" id="usr" placeholder="Year"/>
                                    </div>
                                    <div className="single-field one-third last">
                                        <input type="text" className="form-control" id="usr"
                                               placeholder="Security Code"/>
                                    </div>
                                    <button className="btn btn-theme-dark" type="submit">Place Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}