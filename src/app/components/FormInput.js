export default function FormInput(props) {

    const {text, name, value, changeEvent, css, type, data} = props;
    return (
        <div className={css}>
            <label htmlFor={name}>{text}</label>
            {
                type === "select" ?
                    <select name={name} id={name} className="form-control" onChange={e => changeEvent(e)} value={value}>
                        <option value="">Seçiniz</option>
                        {
                            data && Array.isArray(data) ?
                                data.map((item, key) =>
                                    <option key={key} value={item.id}>{item.name}</option>
                                ) : null
                        }
                    </select> :
                    <></>
            }
            {
                type === "text" ?
                    <input name={name} id={name} type={type} className="form-control" placeholder={text}
                           onChange={e => changeEvent(e)} value={value}/> :
                    <></>
            }
        </div>
    )
}