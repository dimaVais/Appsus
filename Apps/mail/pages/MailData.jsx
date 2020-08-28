
const { Link } = ReactRouterDOM
import 'assets/css/mail-style.css'
import { SideMenu } from '../cmps/SideMenu.jsx'
import { MailList } from './MailList.jsx'
import { mailService } from '../services/mail-service.js'
import { Modal } from '../../../../general-cmps/Modal.jsx'
import { NewMail } from '../cmps/NewMail.jsx'
import { UnReadMailBtn } from '../cmps/UnReadMailBtn.jsx'
import { DeleteMailBtn } from '../cmps/DeleteMailBtn.jsx'


export class MailData extends React.Component {

    state = {
        id: '',
        subject: '',
        from: '',
        sentAt: '',
        body: '',
        isModalShown: false
    }

    componentDidMount() {
        const mailId = this.props.match.params.id
        mailService.getMailById(mailId)
            .then(mail => this.setState({
                id: mail.id,
                subject: mail.subject,
                from: mail.from,
                sentAt: mail.sentAt,
                body: mail.body

            }))
    }

    onReplyToMail = (mail) => {
        mailService.addMail(mail);
    }

    onOpenModal = () => {
        this.setState({ isModalShown: !this.state.isModalShown });
    }


    render() {
        console.log(this.state.subject, this.state.body);
        return (
            <div className="inner-page-container data-container flex-col">
                <h2>{this.state.subject}</h2>
                <div>
                    <nav className="flex-row space-between align-center">
                        <div className="flex-col">
                            <span>  From: {this.state.from}</span>
                            <span>  Date: {this.state.sentAt}</span>
                        </div>
                        <div class="btn-data-menu">
                            <button onClick={this.onOpenModal}><i class="fas fa-reply"></i></button>
                            <UnReadMailBtn mailId={this.state.id} />
                            <Link to={`/mail/list/`}>
                                <DeleteMailBtn mailId={this.state.id} />
                            </Link>
                        </div>

                    </nav>
                </div>
                <div>
                    <p className="data-body">{this.state.body}</p>
                </div>

                <Modal isShown={this.state.isModalShown} toggleModal={this.onOpenModal}
                    children={<NewMail onAddNewMail={this.onReplyToMail} toggleModal={this.onOpenModal} 
                    subject={this.state.subject} body={this.state.body}/>} />

            </div>

        )
    }
}