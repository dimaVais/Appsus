import '../assets/css/mail-style.css'
import { Compose } from './Compose.jsx'
import { Inbox } from './Inbox.jsx'
import { Stared } from './Stared.jsx'
import { Sent } from './Sent.jsx'
import { MailStatus } from 'MailStatus.jsx'

export class SideMenu extends React.Component {

    state = {

    }

    render() {

        return (

            <div className='main-side-container flex-col'>
                <Compose onOpenModal={this.props.onOpenModal} />
                <div className='flex-col'> 
                    <Inbox />
                    <Stared />
                    <Sent />
                </div>
                <MailStatus />
            </div>
        )
    }

}