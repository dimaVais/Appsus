const { Link } = ReactRouterDOM
import '../assets/css/mail-style.css'

export function Inbox(props) {


    return (
        <Link className="mail-link flex-col" to={`/mail/list`}>
            <button className='inbox-btn side-btn'> <span>Inbox </span></button>
        </Link>
    )
}