import { mailService } from '../services/mail-service.js'

export class MailPreviwe extends React.Component {

    state = {
        mail: null
    }

    onRemoveMail(mailId) {
        mailService.removeMail(mailId);
        this.props.loadMails();
    }
    

    render() {

        return (
            <div className="msg-container flex-row space-between align-center">
                <div className="flex-row space-between align-center">
                    <input type="checkbox" />
                    <input type="radio" />
                    <p className="mail-from">{this.props.mail.from}</p>
                </div>
                <p className="mail-title">{this.props.mail.subject}</p>
                <p className="mail-body">{this.props.mail.body}</p>
                <div>
                    <button className="mail-unread"><i class="fas fa-envelope-open"></i></button>
                    <button className="mail-delete" onClick={() => { this.onRemoveMail(this.props.mail.id) }}>
                        <i class="fas fa-trash"></i></button>
                </div>
            </div>
        )
    }


}