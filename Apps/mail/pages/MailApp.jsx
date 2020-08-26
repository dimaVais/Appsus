import 'assets/css/mail-style.css'
import { SideMenu } from '../cmps/SideMenu.jsx'
import { MailList } from '../cmps/MailList.jsx'
import { mailService } from '../services/mail-service.js'
import { Modal } from '../../../../general-cmps/Modal.jsx'
import { NewMail } from '../cmps/NewMail.jsx'

export class MailApp extends React.Component {


    state = {
        mails: [],
        isModalShown: false
    }


    componentDidMount() {
        this.loadMails();
    }

    loadMails = () => {
        mailService.query()
            .then(_mails => this.setState({ mails: _mails }))
    }

    onAddNewMail = (mail) => {
        mailService.addMail(mail);
        this.loadMails();
    }

    onOpenModal = () => {
        console.log('New Mail!!');
        this.setState({ isModalShown: !this.state.isModalShown });
    }

    render() {
        console.log('render in home', this.state.isModalShown)
        return (
            <section>
                <h2 className="mail-header">
                    Mail
                </h2>
                <div className="mailapp-container flex-row">
                    <SideMenu onOpenModal={this.onOpenModal} />
                    <MailList mails={this.state.mails} loadMails={this.loadMails}/>
                </div>
                <Modal isShown={this.state.isModalShown} />
                <NewMail onAddNewMail={this.onAddNewMail} />
            </section>
        )
    }
}