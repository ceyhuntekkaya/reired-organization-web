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
                    <li><a href="blog-1.html#"><i className="fal fa-th"></i></a></li>
                    <li><a href="blog-1.html#"><i className="fal fa-list-ul"></i></a></li>
                </ul>
            </div>
        </div>
    )
}