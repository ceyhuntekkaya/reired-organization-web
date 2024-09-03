import {Link} from "react-router-dom";

export default function SingleTravelItemFilter (){
    return (
        <div className="blog-top-bar">
            <form action="blog-1.html#" className="blog-select-form">
                <select className="form-select dn-small" aria-label="Default select example">
                    <option selected>Select Adventure Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select Price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </select>
            </form>
            <div className="grid-blog">
                <ul>
                    <li><Link to="blog-1.html#"><i className="fal fa-th"></i></Link></li>
                    <li><Link to="blog-1.html#"><i className="fal fa-list-ul"></i></Link></li>
                </ul>
            </div>
        </div>
    )
}