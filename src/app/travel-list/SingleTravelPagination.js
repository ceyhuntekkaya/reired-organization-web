import {Link} from "react-router-dom";

export default function SingleTravelPagination (){
    return (
        <div className="gane-pagination mt-30 text-center">
            <ul>
                <li className="active"><Link to="blog-1.html#">1</Link></li>
                <li><Link to="blog-1.html#">2</Link></li>
                <li><Link to="blog-1.html#">3</Link></li>
                <li><Link to="blog-1.html#">4</Link></li>
                <li><Link to="blog-1.html#">5</Link></li>
                <li><Link to="blog-1.html#">6</Link></li>
                <li><Link to="blog-1.html#">7</Link></li>
            </ul>
        </div>
    )
}