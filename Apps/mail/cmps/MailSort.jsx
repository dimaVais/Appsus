export function MailSort(props) {

    return (
        <div>
            <h4>Sort Mails:</h4>
            <select className="upper-bar mail-sort" onChange={(ev) => props.onSort(ev.target.value)}>
                <option value="sentAt" selected="selected">Date</option>
                <option value="from">From</option>
                <option value="subject">Title</option>
            </select>
        </div>
    )

}