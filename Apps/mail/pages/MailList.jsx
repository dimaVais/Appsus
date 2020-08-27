import '../assets/css/mail-style.css'
import { MailPreviwe } from '../cmps/MailPreviwe.jsx'
import { mailService } from '../services/mail-service.js'


export class MailList extends React.Component {
    state = {
        mails: [],
        isModalShown: false,
        openMail: null,
        ismailClicked: false
    }

    componentDidMount() {
        this.loadMails();
    }

    loadMails = () => {
        mailService.query()
            .then(_mails => this.setState({ mails: _mails }))
    }

    render() {
        return (
            <div className="inner-page-container">
               
                <ul className="mail-list">
                    {this.state.mails.map(mail => {
                        return <li key={mail.id} className="mail-item ">
                            <MailPreviwe mail={mail} loadMails={this.loadMails}
                                onMailClicked={this.props.onMailClicked} />
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
