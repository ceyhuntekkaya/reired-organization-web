export default function ApplicationStudentInfo (){
    return (
        <form>
            <div className="form-group row m-2">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail"
                           value="email@example.com"/>
                </div>
            </div>
            <div className="form-group row m-2">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
            </div>
        </form>
    )
}