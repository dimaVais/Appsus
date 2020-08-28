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
                <Compose onOpenModal={this.props.onOpenModal} />
                <div className='flex-col'> 
                    <Inbox />
                    <Starred />
                    <Sent />
                </div>
                <MailStatus />
            </div>
        )
    }

}