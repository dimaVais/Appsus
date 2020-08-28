export function ReadFilter(props) {

    return (
        <div>
            <h4>Filter Read:</h4>
            <select className="upper-bar read-filter" onChange={(ev) => props.onFilter(ev.target.value)}>
                <option value="all" selected="selected">All</option>
                <option value="read">Read</option>
                <option value="unRead">Un-Read</option>
            </select>
        </div>
    )

}