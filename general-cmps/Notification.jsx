import { eventBus } from '../services/event-bus-service.js'

export class Notification extends React.Component {
    state = {
        isShown: false,
        msg: '',
        type: ''
    }
    unsubscribe;
    componentDidMount() {
        this.unsubscribe = eventBus.on('notify', (data) => {
            console.log(data);
            this.setState({ isShown: true, msg: data.msg, type: data.type })
            setTimeout(() => this.setState({ isShown: false }), 1500)
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const { isShown, msg, type } = this.state
        const currClass = (isShown) ? `notification-box ${type}` : 'hidden'
        return (
            <div className={currClass}>
                {isShown && <p className="text-notification">{msg}</p>}
            </div>
        )
    }
}


