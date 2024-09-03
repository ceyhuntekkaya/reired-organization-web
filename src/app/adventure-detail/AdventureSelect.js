export default function AdventureSelect (){
    return (
        <div className="row">
            <div className="col">
                <div className="adventure-select">
                    <form action="adventure-detail-1.html#" className="adventure-select-form">
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
                        <select className="form-select dn-small" aria-label="Default select example">
                            <option selected>Select Destination</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                        </select>
                        <input className="dn-small" type="date" name="date"/>
                        <button className="search" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}