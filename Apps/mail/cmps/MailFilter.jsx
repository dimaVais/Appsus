export function MailFilter(props) {

    return (
        <div className="mail-filter">
            <h4>Search Mails:</h4>
            <input className="upper-bar mail-search" type="text" placeholder="Subject, Body or From"
                onChange={(ev) => props.onFilter(ev.target.value)} />
        </div >
    )
}