import {Link} from "react-router-dom";

export default function CartList (){

    return (
        <div className="cart-area pt-90">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="table-responsive mb-30">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col"><p>PRODUCT NAME</p></th>
                                    <th colSpan="2"><p>Product Price</p></th>
                                    <th scope="col"><p>Quantity</p></th>
                                    <th scope="col"><p>Total Price</p></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">
                                        <div className="product-cart-wrap">
                                            <div className="product-cart-close">
                                                <Link to="cart.html#">X</Link>
                                            </div>
                                            <div className="product-cart-tbl-thumb">
                                                <img src="img/product/ct1.jpg" alt="img"/>
                                            </div>
                                            <div className="product-cart-tbl-content">
                                                <Link to="cart.html#"><h6>Swiss Mountain Adventure</h6></Link>
                                                <p>Mon 25 Apr 2022</p>
                                                <Link to="cart.html#">Edit</Link>
                                            </div>
                                        </div>
                                    </th>
                                    <td colSpan="2"><p className="price">$1,205</p></td>
                                    <td>
                                        <div className="quickview-quality">
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton"
                                                       value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$30.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="product-cart-wrap">
                                            <div className="product-cart-close">
                                                <Link to="cart.html#">X</Link>
                                            </div>
                                            <div className="product-cart-tbl-thumb">
                                                <img src="img/product/ct2.jpg" alt="img"/>
                                            </div>
                                            <div className="product-cart-tbl-content">
                                                <Link to="cart.html#"><h6>Swiss Mountain Adventure</h6></Link>
                                                <p>Mon 25 Apr 2022</p>
                                                <Link to="cart.html#">Edit</Link>
                                            </div>
                                        </div>
                                    </th>
                                    <td colSpan="2"><p className="price">$550</p></td>
                                    <td className="table-quantity">
                                        <div className="quickview-quality">
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton"
                                                       value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$100.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="product-cart-wrap">
                                            <div className="product-cart-close">
                                                <Link to="cart.html#">X</Link>
                                            </div>
                                            <div className="product-cart-tbl-thumb">
                                                <img src="img/product/ct3.jpg" alt="img"/>
                                            </div>
                                            <div className="product-cart-tbl-content">
                                                <Link to="cart.html#"><h6>Swiss Mountain Adventure</h6></Link>
                                                <p>Mon 25 Apr 2022</p>
                                                <Link to="cart.html#">Edit</Link>
                                            </div>
                                        </div>
                                    </th>
                                    <td colSpan="2"><p className="price">$750</p></td>
                                    <td className="table-quantity">
                                        <div className="quickview-quality">
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton"
                                                       value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$80.00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-btn mb-30">
                            <input className="code-input single-input text-center mb-5" placeholder="Coupon Code"
                                   type="password"/>
                            <Link className="btn border-theme" to="cart.html#">Apply Coupon</Link>
                            <div className="right-cart-btn">
                                <Link className="btn btn-theme-dark" to="cart.html#">Update Cart</Link>
                                <Link className="btn btn-theme" to="cart.html#">Checkout</Link>
                            </div>
                        </div>
                        <div className="cart-total">
                            <h4>Cart Totals</h4>
                            <div className="single-total subtotal">
                                <p>Subtotal of products</p>
                                <p className="normal"> $5,665</p>
                            </div>
                            <div className="single-total total">
                                <p>Subtotal of products</p>
                                <p> $5,665</p>
                            </div>
                            <Link className="btn btn-theme float-right" to="cart.html#">Proceed To Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}