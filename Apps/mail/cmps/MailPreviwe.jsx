const { Link } = ReactRouterDOM
import { mailService } from '../services/mail-service.js'
import { DeleteMailBtn } from 'DeleteMailBtn.jsx'
import { UnReadMailBtn } from './UnReadMailBtn.jsx'
import { LongTxt } from '../../../../general-cmps/LongTxt.jsx'

export class MailPreviwe extends React.Component {

    state = {
        mail: null,
    }

    onUpdateMailRead(mailId) {
        mailService.updateMailIsRead(mailId);
    }

    render() {

        const fromClass = (this.props.mail.isRead) ? "mail-from" : "unread-mail mail-from";
        const titleBodyClass = (this.props.mail.isRead) ? "mail-title-body" : "unread-mail mail-title-body";

        return (

            <div className="msg-container flex-row space-between align-center"
                onClick={() => { this.onUpdateMailRead(this.props.mail.id) }}>
                <div className="flex-row space-around align-center">
                    <input type="checkbox" className="mail-checkbox" />
                    <input type="checkbox" className="mail-checkbox-star" />
                    <Link className="flex-row flex-start mail-link" to={`/mail/list/${this.props.mail.id}`}>
                        <p className={fromClass}>{this.props.mail.from}</p>
                        <div className=''>

                            <p className={titleBodyClass}> <span>
                                <LongTxt limit={80} text={`${this.props.mail.subject} - ${this.props.mail.body}`} />
                            </span></p>
                        </div>
                    </Link>
                </div>
                <div>
                    <UnReadMailBtn loadMails={this.props.loadMails} mailId={this.props.mail.id} />
                    <DeleteMailBtn loadMails={this.props.loadMails} mailId={this.props.mail.id} />
                </div>
            </div >

        )
    }


}