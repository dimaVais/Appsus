import '../assets/css/mail-style.css'
import { MailPreviwe } from './MailPreviwe.jsx'

export class MailList extends React.Component {

    render() {
        return (
            <div className="mail-list-container ">
                <ul className="mail-list">
                    {this.props.mails.map(mail => {
                        return <li key={mail.id} className="mail-item ">
                            <MailPreviwe mail={mail} loadMails={this.props.loadMails} />
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
