import '../assets/css/mail-style.css'
import { Compose } from './Compose.jsx'
import { Inbox } from './Inbox.jsx'
import { Starred } from './Starred.jsx'
import { Sent } from './Sent.jsx'
import { MailStatus } from 'MailStatus.jsx'

export class SideMenu extends React.Component {

    state = {

    }

    render() {

        return (

            <div className='main-side-container flex-col'>
                <div className="side-btn hamburger">
                    <i className="bars fas fa-bars z-index"></i>
                    <i className="close fas fa-times hidden"></i>
                </div>
                <div className='side-btn-container flex-col'>
                    <Compose onOpenModal={this.props.onOpenModal} />
                    <Inbox />
                    <Starred />
                    <Sent />
                </div>

                <MailStatus />

            </div>
        )
    }

}