import '../assets/css/mail-style.css'
import { MailPreviwe } from '../cmps/MailPreviwe.jsx'
import { mailService } from '../services/mail-service.js'
import { MailFilter } from '../cmps/MailFilter.jsx'


export class MailList extends React.Component {
    state = {
        mails: [],
        isModalShown: false,
        openMail: null,
        ismailClicked: false,
        filterBy: ''
    }

    componentDidMount() {
        this.loadMails();
    }

    loadMails = () => {
        mailService.query()
            .then(_mails => this.setState({ mails: _mails }))
    }

    setFilter = (filterBy) => {
        // this.props.history.push(`/pet?filterBy=${filterBy}`)
        this.setState({ filterBy })
    }

    getMailsForDisplay() {
        const mails = this.state.mails.filter(mail => {
            mail.subject.toLowerCase().includes(this.state.filterBy.toLowerCase()) ||
            mail.body.toLowerCase().includes(this.state.filterBy.toLowerCase())});
        return mails;
    }

render() {
    return (
        <div className="inner-page-container">
            {/* <MailFilter onFilter={ this.setFilter } /> */}
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
