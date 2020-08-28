import '../assets/css/mail-style.css'
import { MailPreviwe } from '../cmps/MailPreviwe.jsx'
import { mailService } from '../services/mail-service.js'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { ReadFilter } from '../cmps/ReadFilter.jsx'
import { MailSort } from '../cmps/MailSort.jsx'


export class MailList extends React.Component {
    state = {
        mails: [],
        isModalShown: false,
        filterBy: '',
        readFilter: 'all',
        sortBy: 'sentAt'
    }

    componentDidMount() {
        this.loadMails();
    }

    loadMails = () => {
        mailService.query()
            .then(_mails => this.setState({ mails: _mails }))
    }

    setFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    setReadFilter = (readFilter) => {
        this.setState({ readFilter })
    }

    setSort = (sortBy) => {
        this.setState({ sortBy })
    }

    checkReadFilter(mail) {
        if (this.state.readFilter === 'read' && mail.isRead ||
            this.state.readFilter === 'unRead' && !mail.isRead ||
            this.state.readFilter === 'all') {
            return true;
        } else {
            return false;
        }
    }

    getMailsForDisplay() {
        const mails = this.state.mails.filter(mail =>
            (mail.subject.toLowerCase().includes(this.state.filterBy.toLowerCase()) ||
                mail.body.toLowerCase().includes(this.state.filterBy.toLowerCase()) ||
                mail.from.toLowerCase().includes(this.state.filterBy.toLowerCase())) && this.checkReadFilter(mail)
        );
        return this.sortMails(mails);
    }

    sortMails(mails) {
        const sortedMails = mails.sort((mail1, mail2) => {
            if (this.state.sortBy === 'sentAt') {
                if (mail1[this.state.sortBy] > mail2[this.state.sortBy]) return 1
                else if (mail1[this.state.sortBy] < mail2[this.state.sortBy]) return -1
                else return 0;
            } else {
                if (mail1[this.state.sortBy].toLowerCase() > mail2[this.state.sortBy].toLowerCase()) return 1
                else if (mail1[this.state.sortBy].toLowerCase() < mail2[this.state.sortBy].toLowerCase()) return -1
                else return 0;
            }
        });

        return sortedMails;
    }

    render() {
        const mails = this.getMailsForDisplay();

        return (
            <div className="inner-page-container">
                <div className="mail-filters flex-row space-around align-center">
                    <MailFilter onFilter={this.setFilter} />
                    <ReadFilter onFilter={this.setReadFilter} />
                    <MailSort onSort={this.setSort} />
                </div>
                <ul className="mail-list">
                    {mails.map(mail => {
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
