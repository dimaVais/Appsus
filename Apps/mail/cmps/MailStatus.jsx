import { eventBus } from '../../../../services/event-bus-service.js'
import { mailService } from '../services/mail-service.js'


export class MailStatus extends React.Component {
    state = {
        readMails: null,
        unReadMails: null,
        status: null
    }

    unsubscribe = null;

    componentDidMount() {
        this.setState({
            readMails: mailService.getReadAndUnreadCount().read,
            unReadMails: mailService.getReadAndUnreadCount().unRead,
            status: mailService.getReadAndUnreadCount().read /
                (mailService.getReadAndUnreadCount().read + mailService.getReadAndUnreadCount().unRead) * 100
        });

        this.unsubscribe = eventBus.on('changeMailRead', (data) => {
            this.setState({
                readMails: mailService.getReadAndUnreadCount().read,
                unReadMails: mailService.getReadAndUnreadCount().unRead,
                status: mailService.getReadAndUnreadCount().read /
                    (mailService.getReadAndUnreadCount().read + mailService.getReadAndUnreadCount().unRead) * 100
            });
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <p>Read Mail Status:</p>
                <div className="w3-light-grey w3-round-xlarge">
                    <div className="w3-container w3-blue w3-round-xlarge"
                        style={{ width: `${this.state.status}%` }}>{parseFloat(this.state.status).toFixed(2)}%</div>
                </div>
            </div>
        )
    }
}
