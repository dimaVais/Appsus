import { eventBus } from '../../../../services/event-bus-service.js'
import { mailService } from '../services/mail-service.js'


export class MailStatus extends React.Component {
    state = {
        readMails: mailService.getReadAndUnreadCount().read,
        unReadMails: mailService.getReadAndUnreadCount().unRead,
        total: null,
        status: null    
    }

    unsubscribe = null;

    componentDidMount() {
        this.setState({
            total: this.state.readMails + this.state.unReadMails,
            status: this.state.readMails / this.state.total * 100
        });

        this.unsubscribe = eventBus.on('changeMailRead', (data) => {
            console.log(data);
            this.setState({
                readMails: data.msg.read,
                unReadMails: data.msg.unRead,
                total: data.msg.total,
                status: (this.state.readMails / this.state.total) / 100
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-container w3-blue w3-round-xlarge"
                    style={{ width: `${this.state.status}%` }}>{parseFloat(this.state.status).toFixed(2)}%</div>
            </div>
        )
    }
}
